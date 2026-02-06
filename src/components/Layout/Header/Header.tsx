'use client';

import { useState } from 'react';
import { Group, Text, ActionIcon, useMantineColorScheme, Burger, Input, Avatar, Menu, Indicator, Box, rem, AppShell, Tooltip } from '@mantine/core';
import { IconSearch, IconBell, IconSun, IconMoon, IconLogout, IconUser, IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LocaleSwitch from './LocaleSwitch';
import styles from './Header.module.css';

interface HeaderProps {
  mobileNavbarOpened?: boolean;
  onMobileNavbarToggle?: () => void;
}

export function Header({ mobileNavbarOpened = false, onMobileNavbarToggle }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Header');
  const tCommon = useTranslations('Common');

  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';

  return (
    <AppShell.Header>
      <Box className={styles.header}>
        <Group justify="space-between" h="100%" w="100%">
          <Group className={styles.leftSection}>
            <Burger opened={mobileNavbarOpened} onClick={onMobileNavbarToggle} size="sm" hiddenFrom="sm" />
            <Link href={`/${currentLocale}`} className={styles.logoLink}>
              <div className={styles.logoIcon}>M</div>
              <Text className={styles.logoText} visibleFrom="sm">{t('logoText')}</Text>
            </Link>
          </Group>
          <Box className={styles.searchSection} visibleFrom="md">
            <Input 
              placeholder={t('search')} 
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)} 
              leftSection={<IconSearch size={16} />} 
              radius="md" 
            />
          </Box>
          <Group className={styles.rightSection}>
            {/* Locale switcher */}
            <LocaleSwitch />
            {/* Theme toggle with tooltip */}
            <Tooltip label={isDark ? t('lightMode') : t('darkMode')} position="bottom">
              <ActionIcon 
                variant="light" 
                size="lg" 
                radius="md" 
                onClick={toggleColorScheme} 
                className={styles.actionButton}
              >
                {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
              </ActionIcon>
            </Tooltip>
            {/* Notifications */}
            <Menu shadow="md" width={320} position="bottom-end">
              <Menu.Target>
                <ActionIcon variant="light" size="lg" radius="md" className={styles.actionButton}>
                  <Indicator size={8} color="red" offset={4} withBorder>
                    <IconBell size={18} />
                  </Indicator>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>{t('notifications')}</Menu.Label>
                <Menu.Item><Text size="sm">New payment: SAR 1,000</Text></Menu.Item>
                <Menu.Item><Text size="sm">Gateway issue: Hyperpay</Text></Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Box>
    </AppShell.Header>
  );
}
