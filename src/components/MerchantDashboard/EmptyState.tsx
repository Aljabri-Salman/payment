'use client';

import { Container, Paper, Title, Text, Button, Stack } from '@mantine/core';
import { IconBuilding, IconPlus } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

export function EmptyState() {
  const t = useTranslations('MerchantDashboard');
  const router = useRouter();

  return (
    <Container size="sm" py="xl">
      <Paper withBorder shadow="md" p={40} radius="md">
        <Stack gap="lg" align="center">
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconBuilding size={40} color="white" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Title order={2} mb="xs">
              {t('welcomeTitle')}
            </Title>
            <Text c="dimmed" size="sm">
              {t('welcomeDescription')}
            </Text>
          </div>

          <Button
            size="lg"
            leftSection={<IconPlus size={20} />}
            onClick={() => router.push('/merchants')}
          >
            {t('createFirstMerchant')}
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
