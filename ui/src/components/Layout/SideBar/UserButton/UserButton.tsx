"use client";
import { IconChevronRight } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton, Skeleton } from '@mantine/core';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import classes from './UserButton.module.css';

export function UserButton() {
  const currentUser = useQuery(api.auth.getCurrentUser);

  // Show skeleton while loading
  if (currentUser === undefined) {
    return (
      <UnstyledButton className={classes.user}>
        <Group>
          <Skeleton circle height={38} />
          <div style={{ flex: 1 }}>
            <Skeleton height={14} width={120} mb={6} />
            <Skeleton height={12} width={160} />
          </div>
        </Group>
      </UnstyledButton>
    );
  }
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src={currentUser?.image ||
            "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}
          radius="xl"
          alt={currentUser?.name || 'User'}
        >
          {currentUser?.name?.[0]?.toUpperCase() || 'U'}
        </Avatar>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {currentUser?.name || 'Guest User'}
          </Text>

          <Text c="dimmed" size="xs">
            {currentUser?.email || 'guest@example.com'}
          </Text>
        </div>
        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}