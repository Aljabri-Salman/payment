'use client';

import { useState } from 'react';
import {
  Stack,
  Select,
  PasswordInput,
  Button,
  Group,
  Text,
  Title,
  Alert,
} from '@mantine/core';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Gateway } from '@/convex/types';
import { GatewayConnectionFormProps, GatewayOption } from './types';

const GATEWAY_OPTIONS: GatewayOption[] = [
  { value: 'hyperpay', label: 'HyperPay' },
  { value: 'moyasar', label: 'Moyasar' },
  { value: 'tap', label: 'Tap Payments' },
  { value: 'checkout', label: 'Checkout.com' },
  { value: 'stripe', label: 'Stripe' },
];

export function GatewayConnectionForm({
  merchantId,
  onSuccess,
  onCancel,
}: GatewayConnectionFormProps) {
  const t = useTranslations('GatewayConnectionForm');
  const [gateway, setGateway] = useState<Gateway | ''>('');
  const [webhookSecret, setWebhookSecret] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const addConnection = useMutation(api.mutations.gatewayConnections.addConnection);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!gateway) {
      setError(t('errors.gatewayRequired'));
      return;
    }

    if (!webhookSecret) {
      setError(t('errors.webhookSecretRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      await addConnection({
        merchantId,
        gateway: gateway as Gateway,
        webhookSecret,
      });

      // Reset form
      setGateway('');
      setWebhookSecret('');

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || t('errors.createFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <div>
          <Title order={4} mb="xs">
            {t('title')}
          </Title>
          <Text size="sm" c="dimmed">
            {t('description')}
          </Text>
        </div>

        {error && (
          <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
            {error}
          </Alert>
        )}

        <Select
          label={t('fields.gateway.label')}
          placeholder={t('fields.gateway.placeholder')}
          description={t('fields.gateway.description')}
          data={GATEWAY_OPTIONS}
          value={gateway}
          onChange={(value) => setGateway((value as Gateway) || '')}
          required
          searchable
          disabled={isSubmitting}
        />

        <PasswordInput
          label={t('fields.webhookSecret.label')}
          placeholder={t('fields.webhookSecret.placeholder')}
          description={t('fields.webhookSecret.description')}
          value={webhookSecret}
          onChange={(e) => setWebhookSecret(e.currentTarget.value)}
          required
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
            {t('actions.submit')}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
