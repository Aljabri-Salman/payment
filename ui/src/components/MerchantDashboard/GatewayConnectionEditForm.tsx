'use client';

import { useState } from 'react';
import {
  Stack,
  PasswordInput,
  Button,
  Group,
  Text,
  Title,
  Alert,
  Switch,
} from '@mantine/core';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { GatewayConnectionEditFormProps } from './types';

export function GatewayConnectionEditForm({
  connection,
  merchantId,
  onSuccess,
  onCancel,
}: GatewayConnectionEditFormProps) {
  const t = useTranslations('GatewayConnectionForm');
  const [webhookSecret, setWebhookSecret] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(connection.isActive);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const updateConnection = useMutation(api.mutations.gatewayConnections.updateConnection);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Prepare updates object
    const updates: any = {};
    
    // Only include webhookSecret if provided (not empty)
    if (webhookSecret.trim()) {
      updates.webhookSecret = webhookSecret;
    }
    
    // Always include isActive
    updates.isActive = isActive;

    // If no updates, just close
    if (Object.keys(updates).length === 0) {
      if (onCancel) onCancel();
      return;
    }

    setIsSubmitting(true);

    try {
      await updateConnection({
        connectionId: connection._id,
        ...updates,
      });

      // Reset form
      setWebhookSecret('');

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || t('errors.updateFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <div>
          <Title order={4} mb="xs">
            {t('editTitle')}
          </Title>
          <Text size="sm" c="dimmed">
            {t('editDescription')}
          </Text>
        </div>

        {error && (
          <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
            {error}
          </Alert>
        )}

        <Switch
          label={t('fields.isActive.label')}
          description={t('fields.isActive.description')}
          checked={isActive}
          onChange={(e) => setIsActive(e.currentTarget.checked)}
          disabled={isSubmitting}
        />

        <PasswordInput
          label={t('fields.webhookSecret.label')}
          placeholder={t('fields.webhookSecret.editPlaceholder')}
          description={t('fields.webhookSecret.editDescription')}
          value={webhookSecret}
          onChange={(e) => setWebhookSecret(e.currentTarget.value)}
          disabled={isSubmitting}
        />

        <Group justify="flex-end" mt="md">
          {onCancel && (
            <Button
              variant="subtle"
              leftSection={<IconX size={18} />}
              onClick={onCancel}
              disabled={isSubmitting}
            >
              {t('actions.cancel')}
            </Button>
          )}
          <Button
            type="submit"
            leftSection={<IconCheck size={18} />}
            loading={isSubmitting}
          >
            {t('actions.update')}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}