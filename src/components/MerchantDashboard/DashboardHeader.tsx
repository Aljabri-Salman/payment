'use client';

import { Group, Title, Text, Badge } from '@mantine/core';
import { IconBuilding } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { DashboardHeaderProps } from './types';

export function DashboardHeader({ merchant }: DashboardHeaderProps) {
  const t = useTranslations('MerchantDashboard');

  return (
    <div>
      <Group mb="xs">
        <IconBuilding size={32} />
        <div>
          <Title order={2}>{merchant.name}</Title>
          <Text c="dimmed" size="sm">
            {t('createdAt')}: {new Date(merchant._creationTime).toLocaleDateString()}
          </Text>
        </div>
        <Badge color={merchant.status === 'ACTIVE' ? 'green' : 'red'} ml="auto">
          {merchant.status}
        </Badge>
      </Group>
    </div>
  );
}
