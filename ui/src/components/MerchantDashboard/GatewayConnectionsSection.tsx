'use client';

import { useState } from 'react';
import { Paper, Group, Text, Button, Stack, SimpleGrid, Card, Badge, Title, CopyButton, ActionIcon, Tooltip, TextInput, Menu } from '@mantine/core';
import { IconPlugConnected, IconPlus, IconCopy, IconCheck, IconDotsVertical, IconEdit } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { GatewayConnectionForm } from './GatewayConnectionForm';
import { GatewayConnectionEditForm } from './GatewayConnectionEditForm';
import { GatewayConnectionsSectionProps } from './types';
import { getGatewayDisplayName, getGatewayColor } from './utils';

export function GatewayConnectionsSection({
  gatewayConnections,
  merchantId,
}: GatewayConnectionsSectionProps) {
  const t = useTranslations('MerchantDashboard');
  const commonT = useTranslations('Common');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingConnection, setEditingConnection] = useState<string | null>(null);

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
        <>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {gatewayConnections.map((connection) => {
              // Generate webhook URL for this connection
              const webhookUrl = typeof window !== 'undefined' 
                ? `${window.location.origin}/api/webhooks/${merchantId}/${connection.gateway}`
                : `/api/webhooks/${merchantId}/${connection.gateway}`;
              
              return (
                <Card key={connection._id} withBorder shadow="sm" p="lg" radius="md">
                  <Stack gap="sm">
                    <Group justify="space-between">
                      <Badge color={getGatewayColor(connection.gateway)} size="lg" variant="light">
                        {getGatewayDisplayName(connection.gateway)}
                      </Badge>
                      <Group gap="xs">
                        <Badge color={connection.isActive ? 'green' : 'gray'}>
                          {connection.isActive ? t('active') : t('inactive')}
                        </Badge>
                        <Menu position="bottom-end" withArrow>
                          <Menu.Target>
                            <ActionIcon variant="subtle" size="sm">
                              <IconDotsVertical size={16} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item
                              leftSection={<IconEdit size={14} />}
                              onClick={() => setEditingConnection(connection._id)}
                            >
                              {commonT('edit')}
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Group>
                    </Group>
                    <Text size="xs" c="dimmed">
                      {t('secret')}:{' '}
                      {connection.hasSecret ? t('secretConfigured') : t('secretNotSet')}
                    </Text>
                    <div>
                      <Text size="xs" fw={500} mb={4}>
                        Webhook URL:
                      </Text>
                      <Group gap="xs">
                        <TextInput
                          size="xs"
                          value={webhookUrl}
                          readOnly
                          style={{ flex: 1 }}
                          styles={{ input: { fontSize: '11px' } }}
                        />
                        <CopyButton value={webhookUrl}>
                          {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied!' : 'Copy URL'}>
                              <ActionIcon
                                color={copied ? 'teal' : 'gray'}
                                variant="subtle"
                                onClick={copy}
                              >
                                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                              </ActionIcon>
                            </Tooltip>
                          )}
                        </CopyButton>
                      </Group>
                    </div>
                  </Stack>
                </Card>
              );
            })}
          </SimpleGrid>

          {editingConnection && (
            <Paper withBorder p="lg" radius="md" mt="lg">
              <GatewayConnectionEditForm
                connection={gatewayConnections.find(c => c._id === editingConnection)!}
                merchantId={merchantId}
                onSuccess={() => {
                  setEditingConnection(null);
                }}
                onCancel={() => setEditingConnection(null)}
              />
            </Paper>
          )}
        </>
      )}
    </div>
  );
}