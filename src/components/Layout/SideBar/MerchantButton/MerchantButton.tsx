'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useMerchantStore } from '@/store/useMerchantStore';
import { Group, Text, UnstyledButton, Menu, ActionIcon, Skeleton } from '@mantine/core';
import { IconBuilding, IconChevronRight, IconEdit, IconCheck } from '@tabler/icons-react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import classes from './MerchantButton.module.css';

export function MerchantButton() {
  const t = useTranslations('MerchantButton');
  const router = useRouter();
  const merchants = useQuery(api.queries.merchants.listActive);
  const { selectedMerchantId, setSelectedMerchant } = useMerchantStore();

  // Auto-select first merchant if none selected
  useEffect(() => {
    if (merchants && merchants.length > 0 && !selectedMerchantId) {
      setSelectedMerchant(merchants[0]._id);
    }
  }, [merchants, selectedMerchantId, setSelectedMerchant]);

  const selectedMerchant = merchants?.find((m) => m._id === selectedMerchantId);

  if (merchants === undefined) {
    return (
      <UnstyledButton className={classes.merchant}>
        <Group>
          <Skeleton circle height={38} />
          <div style={{ flex: 1 }}>
            <Skeleton height={14} width={120} mb={6} />
            <Skeleton height={12} width={80} />
          </div>
        </Group>
      </UnstyledButton>
    );
  }

  if (!merchants || merchants.length === 0) {
    return null;
  }

  return (
    <Menu shadow="md" width={280} position="bottom">
      <Menu.Target>
        <UnstyledButton className={classes.merchant}>
          <Group>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
              }}
            >
              <IconBuilding size={20} />
            </div>

            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                {selectedMerchant?.name || t('selectMerchant')}
              </Text>
              <Text c="dimmed" size="xs">
                {t('currentWorkspace')}
              </Text>
            </div>

            <IconChevronRight size={14} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{t('switchMerchant')}</Menu.Label>
        {merchants.map((merchant) => (
          <Menu.Item
            key={merchant._id}
            leftSection={<IconBuilding size={16} />}
            rightSection={
              merchant._id === selectedMerchantId ? (
                <IconCheck size={16} />
              ) : null
            }
            onClick={() => {
              setSelectedMerchant(merchant._id);
              router.push(`/${merchant._id}`);
            }}
          >
            {merchant.name}
          </Menu.Item>
        ))}

        <Menu.Divider />

        <Menu.Label>{t('actions')}</Menu.Label>
        <Menu.Item
          leftSection={<IconEdit size={16} />}
          onClick={() => router.push('/merchants')}
        >
          {t('manageMerchants')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
