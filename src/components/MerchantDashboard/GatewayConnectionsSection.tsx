'use client';

import { useState } from 'react';
import { Paper, Group, Text, Button, Stack, SimpleGrid, Card, Badge, Title } from '@mantine/core';
import { IconPlugConnected, IconPlus } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { GatewayConnectionForm } from './GatewayConnectionForm';
import { GatewayConnectionsSectionProps } from './types';
import { getGatewayDisplayName, getGatewayColor } from './utils';

export function GatewayConnectionsSection({
  gatewayConnections,
  merchantId,
}: GatewayConnectionsSectionProps) {
  const t = useTranslations('MerchantDashboard');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <Group mb="md" justify="space-between">
        <div>
          <Group gap="xs">
            <IconPlugConnected size={24} />
            <Title order={3}>{t('gatewayConnectionsTitle')}</Title>
          </Group>
          <Text c="dimmed" size="sm">
            {t('gatewayConnectionsDescription')}
          </Text>
        </div>
        <Button
          variant="light"
          leftSection={<IconPlus size={18} />}
          onClick={() => setIsFormOpen(true)}
        >
          {t('addGateway')}
        </Button>
      </Group>

      {isFormOpen && (
        <Paper withBorder p="lg" radius="md" mb="lg">
          <GatewayConnectionForm
            merchantId={merchantId}
            onSuccess={() => setIsFormOpen(false)}
            onCancel={() => setIsFormOpen(false)}
          />
        </Paper>
      )}

      {gatewayConnections.length === 0 ? (
        <Paper withBorder p="xl" radius="md">
          <Stack align="center" gap="md">
            <IconPlugConnected size={48} stroke={1.5} opacity={0.5} />
            <div style={{ textAlign: 'center' }}>
              <Text fw={500} size="lg" mb={5}>
                {t('noGatewayConnectionsTitle')}
              </Text>
              <Text c="dimmed" size="sm" mb="md">
                {t('noGatewayConnectionsDescription')}
              </Text>
              <Button
                leftSection={<IconPlus size={18} />}
                onClick={() => setIsFormOpen(true)}
              >
                {t('connectGateway')}
              </Button>
            </div>
          </Stack>
        </Paper>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {gatewayConnections.map((connection) => (
            <Card key={connection._id} withBorder shadow="sm" p="lg" radius="md">
              <Stack gap="sm">
                <Group justify="space-between">
                  <Badge color={getGatewayColor(connection.gateway)} size="lg" variant="light">
                    {getGatewayDisplayName(connection.gateway)}
                  </Badge>
                  <Badge color={connection.isActive ? 'green' : 'gray'}>
                    {connection.isActive ? t('active') : t('inactive')}
                  </Badge>
                </Group>
                <Text size="xs" c="dimmed">
                  {t('secret')}:{' '}
                  {connection.hasSecret ? t('secretConfigured') : t('secretNotSet')}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
}
