'use client';

import { Container, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

export function MerchantNotFound() {
  const t = useTranslations('MerchantDashboard');

  return (
    <Container size="xl" py="xl">
      <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
        {t('merchantNotFound')}
      </Alert>
    </Container>
  );
}
