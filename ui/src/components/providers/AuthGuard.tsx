'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useConvexAuth, Authenticated, Unauthenticated, AuthLoading } from 'convex/react';
import { Center, Loader } from '@mantine/core';

interface AuthGuardProps {
  children: React.ReactNode;
}

const PUBLIC_ROUTES = ['/auth/login', '/auth/signup', '/auth/forgot-password'];

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, isAuthenticated } = useConvexAuth();

  useEffect(() => {
    // Check if we're on a public route
    const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.includes(route));
    
    // Redirect to login if not authenticated and not on public route
    if (!isLoading && !isAuthenticated && !isPublicRoute) {
      router.push('/auth/login');
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  // If on public route, always render (for login/signup pages)
  const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.includes(route));
  if (isPublicRoute) {
    return <>{children}</>;
  }

  // Use Convex's built-in auth components for protected routes
  return (
    <>
      <AuthLoading>
        <Center style={{ height: '100vh' }}>
          <Loader size="lg" />
        </Center>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <Center style={{ height: '100vh' }}>
          <Loader size="lg" />
        </Center>
      </Unauthenticated>
    </>
  );
}
