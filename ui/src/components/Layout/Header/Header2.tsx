'use client';

import { useState, useTransition, useEffect, useRef } from 'react';
import {
  IconSearch,
  IconBell,
  IconSun,
  IconMoon,
  IconWorld
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import styles from './Header2.module.css';

interface Header2Props {
  mobileNavbarOpened?: boolean;
  onMobileNavbarToggle?: () => void;
}

export function Header2({ mobileNavbarOpened = false, onMobileNavbarToggle }: Header2Props) {
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const t = useTranslations('Header');
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';
  const nextLocale = locale === 'en' ? 'ar' : 'en';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };

    if (notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    // You can implement actual theme switching logic here
    // document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleLocaleChange = () => {
    startTransition(() => {
      const newPath = `/${nextLocale}${pathname}`;
      router.push(newPath);
    });
  };

  return (
    <header className={styles.header} data-theme={theme}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <button
            className={`${styles.burger} ${styles.mobileOnly}`}
            onClick={onMobileNavbarToggle}
            aria-label="Toggle navigation"
            aria-expanded={mobileNavbarOpened}
          >
            <span className={mobileNavbarOpened ? styles.burgerOpen : ''}></span>
            <span className={mobileNavbarOpened ? styles.burgerOpen : ''}></span>
            <span className={mobileNavbarOpened ? styles.burgerOpen : ''}></span>
          </button>

          <Link href={`/${currentLocale}`} className={styles.logoLink}>
            <div className={styles.logoIcon}>M</div>
            <span className={`${styles.logoText} ${styles.hideOnMobile}`}>{t('logoText')}</span>
          </Link>
        </div>

        <div className={`${styles.searchSection} ${styles.hideOnTablet}`}>
          <div className={styles.searchWrapper}>
            <IconSearch size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder={t('search')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
              aria-label={t('search')}
            />
          </div>
        </div>

        <div className={styles.rightSection}>
          {/* Locale Switch */}
          <button
            onClick={handleLocaleChange}
            disabled={isPending}
            className={styles.actionButton}
            title={locale === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <IconWorld size={16} />
            <span className={styles.localeText}>{locale === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <div className={styles.tooltip}>
            <button
              onClick={toggleTheme}
              className={styles.actionButton}
              aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
            >
              {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
            <span className={styles.tooltipText}>{theme === 'dark' ? t('lightMode') : t('darkMode')}</span>
          </div>

          {/* Notifications */}
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className={styles.actionButton}
              aria-label={t('notifications')}
              aria-expanded={notificationsOpen}
            >
              <span className={styles.indicator}>
                <IconBell size={18} />
                <span className={styles.badge} aria-label="2 new notifications"></span>
              </span>
            </button>

            {notificationsOpen && (
              <div className={styles.dropdownMenu} role="menu">
                <div className={styles.dropdownLabel}>{t('notifications')}</div>
                <button className={styles.dropdownItem} role="menuitem">
                  <span className={styles.dropdownText}>New payment: SAR 1,000</span>
                </button>
                <button className={styles.dropdownItem} role="menuitem">
                  <span className={styles.dropdownText}>Gateway issue: Hyperpay</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
