'use client';

import { ReactNode, useState } from 'react';
import { AppShell, useMantineColorScheme } from '@mantine/core';
import { Header } from './Header';
import { SideBar } from './SideBar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileNavbarOpened },
      }}
      header={{ height: 60 }}
      styles={{
        main: {
          // backgroundColor: isDark ? 'var(--mantine-color-dark-8)' : 'var(--mantine-color-gray-0)',
          minHeight: '100vh',
        },
      }}
    >
      <Header 
        mobileNavbarOpened={mobileNavbarOpened}
        onMobileNavbarToggle={() => setMobileNavbarOpened((o) => !o)} 
      />
      <SideBar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}


