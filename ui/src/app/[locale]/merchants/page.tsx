'use client';

import { useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useMerchantStore } from '@/store/useMerchantStore';
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Card,
  Badge,
  TextInput,
  Modal,
  Alert,
  ActionIcon,
  Menu,
  Loader,
  Center,
  SimpleGrid,
  Paper,
} from '@mantine/core';
import {
  IconBuilding,
  IconPlus,
  IconEdit,
  IconTrash,
  IconDots,
  IconAlertCircle,
  IconCheck,
} from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { AppLayout } from '@/components/Layout';

export default function MerchantsPage() {
  const t = useTranslations('MerchantsPage');
  const tCommon = useTranslations('Common');

  const merchants = useQuery
    (api.queries.merchants.listMerchants,
      { paginationOpts: { numItems: 100, cursor: null } }
    );
  const createMerchant = useMutation(api.mutations.merchants.createMerchant);
  const updateMerchant = useMutation(api.mutations.merchants.updateMerchant);
  const deleteMerchant = useMutation(api.mutations.merchants.deleteMerchant);

  const { selectedMerchantId, setSelectedMerchant } = useMerchantStore();

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingMerchant, setEditingMerchant] = useState<any>(null);
  const [merchantName, setMerchantName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCreate = async () => {
    if (!merchantName.trim()) {
      setError('Merchant name is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const newMerchantId = await createMerchant({ name: merchantName.trim() });
      setSuccess('Merchant created successfully!');
      setMerchantName('');
      setCreateModalOpen(false);

      // Auto-select if it's the first merchant
      if (!selectedMerchantId) {
        setSelectedMerchant(newMerchantId);
      }

      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to create merchant');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!merchantName.trim() || !editingMerchant) {
      setError('Merchant name is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await updateMerchant({
        merchantId: editingMerchant._id,
        name: merchantName.trim(),
      });
      setSuccess('Merchant updated successfully!');
      setEditModalOpen(false);
      setEditingMerchant(null);
      setMerchantName('');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to update merchant');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (merchantId: any) => {
    if (!confirm('Are you sure you want to delete this merchant?')) {
      return;
    }

    try {
      await deleteMerchant({ merchantId });
      setSuccess('Merchant deleted successfully!');

      // Clear selection if deleted merchant was selected
      if (selectedMerchantId === merchantId) {
        setSelectedMerchant(null);
      }

      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to delete merchant');
    }
  };

  const openEditModal = (merchant: any) => {
    setEditingMerchant(merchant);
    setMerchantName(merchant.name);
    setEditModalOpen(true);
    setError('');
  };

  if (merchants === undefined) {
    return (
      <AppLayout>
        <Center style={{ minHeight: '400px' }}>
          <Loader size="lg" />
        </Center>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Container size="xl" py="xl">
        <Stack gap="xl">
          <Group justify="space-between">
            <div>
              <Title order={2}>Merchants</Title>
              <Text c="dimmed" size="sm" mt={5}>
                Manage your merchant accounts and workspaces
              </Text>
            </div>
            <Button
              leftSection={<IconPlus size={18} />}
              onClick={() => {
                setMerchantName('');
                setError('');
                setCreateModalOpen(true);
              }}
            >
              Create Merchant
            </Button>
          </Group>

          {success && (
            <Alert icon={<IconCheck size={16} />} color="green" variant="light">
              {success}
            </Alert>
          )}

          {merchants.page.length === 0 ? (
            <Paper withBorder p="xl" radius="md">
              <Stack align="center" gap="md">
                <IconBuilding size={64} stroke={1.5} opacity={0.5} />
                <div style={{ textAlign: 'center' }}>
                  <Text fw={500} size="lg" mb={5}>
                    No Merchants Yet
                  </Text>
                  <Text c="dimmed" size="sm" mb="md">
                    Create your first merchant to get started
                  </Text>
                  <Button
                    leftSection={<IconPlus size={18} />}
                    onClick={() => setCreateModalOpen(true)}
                  >
                    Create Merchant
                  </Button>
                </div>
              </Stack>
            </Paper>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {merchants.page.map((merchant) => (
                <Card
                  key={merchant._id}
                  withBorder
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  style={{
                    border:
                      merchant._id === selectedMerchantId
                        ? '2px solid var(--mantine-color-blue-6)'
                        : undefined,
                  }}
                >
                  <Stack gap="sm">
                    <Group justify="space-between">
                      <IconBuilding size={24} />
                      <Group gap="xs">
                        <Badge color={merchant.status === 'ACTIVE' ? 'green' : 'red'}>
                          {merchant.status}
                        </Badge>
                        <Menu shadow="md" width={200}>
                          <Menu.Target>
                            <ActionIcon variant="subtle" color="gray">
                              <IconDots size={16} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item
                              leftSection={<IconEdit size={16} />}
                              onClick={() => openEditModal(merchant)}
                            >
                              Edit
                            </Menu.Item>
                            {merchant._id !== selectedMerchantId && (
                              <Menu.Item
                                leftSection={<IconTrash size={16} />}
                                color="red"
                                onClick={() => handleDelete(merchant._id)}
                              >
                                Delete
                              </Menu.Item>
                            )}
                          </Menu.Dropdown>
                        </Menu>
                      </Group>
                    </Group>

                    <div>
                      <Text fw={500} size="lg">
                        {merchant.name}
                      </Text>
                      <Text size="xs" c="dimmed" mt={4}>
                        Created: {new Date(merchant._creationTime).toLocaleDateString()}
                      </Text>
                    </div>

                    {merchant._id === selectedMerchantId && (
                      <Badge color="blue" variant="light" fullWidth>
                        Currently Active
                      </Badge>
                    )}

                    {merchant._id !== selectedMerchantId && (
                      <Button
                        variant="light"
                        fullWidth
                        onClick={() => setSelectedMerchant(merchant._id)}
                      >
                        Switch to this merchant
                      </Button>
                    )}
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </Stack>

        {/* Create Modal */}
        <Modal
          opened={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          title="Create New Merchant"
        >
          <Stack gap="md">
            {error && (
              <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
                {error}
              </Alert>
            )}

            <TextInput
              label="Merchant Name"
              placeholder="My Business"
              value={merchantName}
              onChange={(e) => setMerchantName(e.target.value)}
              leftSection={<IconBuilding size={16} />}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button variant="subtle" onClick={() => setCreateModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreate} loading={loading}>
                Create
              </Button>
            </Group>
          </Stack>
        </Modal>

        {/* Edit Modal */}
        <Modal
          opened={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setEditingMerchant(null);
            setMerchantName('');
          }}
          title="Edit Merchant"
        >
          <Stack gap="md">
            {error && (
              <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
                {error}
              </Alert>
            )}

            <TextInput
              label="Merchant Name"
              placeholder="My Business"
              value={merchantName}
              onChange={(e) => setMerchantName(e.target.value)}
              leftSection={<IconBuilding size={16} />}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button
                variant="subtle"
                onClick={() => {
                  setEditModalOpen(false);
                  setEditingMerchant(null);
                  setMerchantName('');
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleEdit} loading={loading}>
                Save Changes
              </Button>
            </Group>
          </Stack>
        </Modal>
      </Container>
    </AppLayout>
  );
}
