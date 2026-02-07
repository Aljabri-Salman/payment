'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useMerchantStore } from '@/store/useMerchantStore';
import { useEffect } from 'react';
import { Container, Stack, Loader, Center } from '@mantine/core';
import { EmptyState } from './EmptyState';
import { SelectMerchantPrompt } from './SelectMerchantPrompt';
import { MerchantNotFound } from './MerchantNotFound';
import { DashboardHeader } from './DashboardHeader';
import { QuickStats } from './QuickStats';
import { GatewayConnectionsSection } from './GatewayConnectionsSection';
import { MerchantDashboardProps } from './types';

export function MerchantDashboard({ merchantId }: MerchantDashboardProps = {}) {
  const { selectedMerchantId, setSelectedMerchant } = useMerchantStore();

  // Use prop merchantId if provided, otherwise fall back to store
  const activeMerchantId = merchantId || selectedMerchantId;

  // Sync the store with the route param
  useEffect(() => {
    if (merchantId && merchantId !== selectedMerchantId) {
      setSelectedMerchant(merchantId);
    }
  }, [merchantId, selectedMerchantId, setSelectedMerchant]);

  // Query merchants and data for selected merchant
  const merchants = useQuery(api.queries.merchants.listMerchants);
  const selectedMerchant = useQuery(
    api.queries.merchants.getMerchant,
    activeMerchantId ? { merchantId: activeMerchantId } : 'skip'
  );
  const gatewayConnections = useQuery(
    api.queries.gatewayConnections.listByMerchant,
    activeMerchantId ? { merchantId: activeMerchantId } : 'skip'
  );
  const eventsCount = useQuery(
    api.queries.paymentEvents.countByMerchant,
    activeMerchantId ? { merchantId: activeMerchantId } : 'skip'
  );

  // Loading state
  if (merchants === undefined) {
    return (
      <Center style={{ minHeight: '400px' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  // Empty state - first time user (no merchants)
  if (merchants.length === 0) {
    return <EmptyState />;
  }

  // No merchant selected
  if (!activeMerchantId) {
    return <SelectMerchantPrompt />;
  }

  // Loading merchant data
  if (selectedMerchant === undefined || gatewayConnections === undefined || eventsCount === undefined) {
    return (
      <Center style={{ minHeight: '400px' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  // Merchant not found
  if (!selectedMerchant) {
    return <MerchantNotFound />;
  }

  // Main dashboard for selected merchant
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <DashboardHeader merchant={selectedMerchant} />
        <QuickStats
          totalEventsCount={eventsCount}
          gatewayConnectionsCount={gatewayConnections.length}
          merchantStatus={selectedMerchant.status}
        />
        <GatewayConnectionsSection
          gatewayConnections={gatewayConnections}
          merchantId={activeMerchantId}
        />
      </Stack>
    </Container>
  );
}
