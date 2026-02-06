"use client";
import { useState } from 'react';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { AppShell, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl';
import classes from './Sidebar.module.css';
import { UserButton } from './UserButton';
import { MerchantButton } from './MerchantButton';

export function SideBar() {
  const t = useTranslations('Sidebar');
  const [active, setActive] = useState('billing');

  const data = [
    { link: '', label: t('notifications'), key: 'notifications', icon: IconBellRinging },
    { link: '', label: t('billing'), key: 'billing', icon: IconReceipt2 },
    { link: '', label: t('security'), key: 'security', icon: IconFingerprint },
    { link: '', label: t('sshKeys'), key: 'sshKeys', icon: IconKey },
    { link: '', label: t('databases'), key: 'databases', icon: IconDatabaseImport },
    { link: '', label: t('authentication'), key: 'authentication', icon: Icon2fa },
    { link: '', label: t('otherSettings'), key: 'otherSettings', icon: IconSettings },
  ];

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.key === active || undefined}
      href={item.link}
      key={item.key}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.key);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <AppShell.Navbar>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Stack gap="sm" mb="md">
            {/* <UserButton /> */}
            <MerchantButton />
          </Stack>
          {links}
        </div>

        <div className={classes.footer}>
          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>{t('changeAccount')}</span>
          </a>

          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>{t('logout')}</span>
          </a>
        </div>
      </nav>
    </AppShell.Navbar>
  );
}