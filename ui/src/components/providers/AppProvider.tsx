'use client';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ConvexClientProvider } from './ConvexClientProvider';
import { AuthGuard } from './AuthGuard';
import { ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
  isRtl: boolean;
  initialToken: string | null;
}

export function AppProvider({ children, isRtl, initialToken }: AppProviderProps) {
  return (
    <ConvexClientProvider initialToken={initialToken}>
      <DirectionProvider initialDirection={isRtl ? 'rtl' : 'ltr'} detectDirection={false}>
        <MantineProvider
          theme={{
            fontFamily: isRtl ? 'var(--font-cairo)' : 'inherit',
          }}
        >
          <Notifications />
          <AuthGuard>
            {children}
          </AuthGuard>
        </MantineProvider>
      </DirectionProvider>
    </ConvexClientProvider>
  );
}
