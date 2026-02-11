'use client';

import { AppLayout } from "@/components/Layout";
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from '@/i18n/routing';
import { useEffect } from 'react';
import { Container, Paper, Title, Text, Button, Stack, Loader, Center } from '@mantine/core';
import { IconBuilding, IconPlus } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useMerchantStore } from '@/store/useMerchantStore';

export default function Home() {
  const t = useTranslations('MerchantDashboard');
  const router = useRouter();
  const merchants = useQuery(api.queries.merchants.listActive);
  const { selectedMerchantId } = useMerchantStore();

  // Redirect to merchant page if a merchant exists
  useEffect(() => {
    if (merchants && merchants.length > 0) {
      const merchantToView = selectedMerchantId || merchants[0]._id;
      router.push(`/${merchantToView}`);
    }
  }, [merchants, selectedMerchantId, router]);

  // Loading state
  if (merchants === undefined) {
    return (
      <AppLayout>
        <Center style={{ minHeight: '400px' }}>
          <Loader size="lg" />
        </Center>
      </AppLayout>
    );
  }

  // Empty state - first time user (no merchants)
  if (merchants.length === 0) {
    return (
      <AppLayout>
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
      </AppLayout>
    );
  }

  // Should not reach here due to redirect, but just in case
  return (
    <AppLayout>
      <Center style={{ minHeight: '400px' }}>
        <Loader size="lg" />
      </Center>
    </AppLayout>
  );
}