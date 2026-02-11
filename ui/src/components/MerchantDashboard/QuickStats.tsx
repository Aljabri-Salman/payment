'use client';

import { SimpleGrid, Paper, Group, Text } from '@mantine/core';
import { IconReceipt, IconPlugConnected, IconBuilding } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { QuickStatsProps } from './types';

export function QuickStats({ totalEventsCount, gatewayConnectionsCount, merchantStatus }: QuickStatsProps) {
  const t = useTranslations('MerchantDashboard');

  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
      <Paper withBorder p="lg" radius="md">
        <Group gap="xs" mb="xs">
          <IconReceipt size={20} />
          <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
            {t('totalEvents')}
          </Text>
        </Group>
        <Text size="xl" fw={700}>
          {totalEventsCount}
        </Text>
        <Text size="xs" c="dimmed" mt="xs">
          {totalEventsCount === 0 ? t('noPaymentEvents') : t('paymentEventsReceived')}
        </Text>
      </Paper>

      <Paper withBorder p="lg" radius="md">
        <Group gap="xs" mb="xs">
          <IconPlugConnected size={20} />
          <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
            {t('gatewayConnections')}
          </Text>
        </Group>
        <Text size="xl" fw={700}>
          {gatewayConnectionsCount}
        </Text>
        <Text size="xs" c="dimmed" mt="xs">
          {gatewayConnectionsCount === 0 ? t('noGatewaysConnected') : t('activeConnections')}
        </Text>
      </Paper>

      <Paper withBorder p="lg" radius="md">
        <Group gap="xs" mb="xs">
          <IconBuilding size={20} />
          <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
            {t('status')}
          </Text>
        </Group>
        <Text size="xl" fw={700} c={merchantStatus === 'ACTIVE' ? 'green' : 'red'}>
          {merchantStatus === 'ACTIVE' ? t('active') : t('inactive')}
        </Text>
        <Text size="xs" c="dimmed" mt="xs">
          {t('merchantIsStatus', { status: merchantStatus.toLowerCase() })}
        </Text>
      </Paper>
    </SimpleGrid>
  );
}
