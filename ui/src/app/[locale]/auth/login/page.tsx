'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Container,
  Group,
  Anchor,
  Stack,
  Alert,
} from '@mantine/core';
import { IconAlertCircle, IconMail, IconLock } from '@tabler/icons-react';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const t = useTranslations('LoginPage');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
        callbackURL: '/',
      });

      if (error) {
        setError(error.message || t('errorGeneric'));
      } else if (data) {
        // Successful login, redirect to dashboard
        router.push('/');
      }
    } catch (err) {
      setError(t('errorGeneric'));
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Stack gap="lg">
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 20,
              margin: '0 auto 20px',
            }}
          >
            M
          </div>
          <Title order={2} ta="center" mt="md" mb={5}>
            {t('title')}
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            {t('subtitle')}{' '}
            <Anchor size="sm" href="/auth/register">
              {t('signUpLink')}
            </Anchor>
          </Text>
        </div>

        <Paper withBorder shadow="md" p={30} mt={20} radius="md">
          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              {error && (
                <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
                  {error}
                </Alert>
              )}

              <TextInput
                label={t('emailLabel')}
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftSection={<IconMail size={16} />}
                required
                autoComplete="email"
              />

              <PasswordInput
                label={t('passwordLabel')}
                placeholder={t('passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leftSection={<IconLock size={16} />}
                required
                autoComplete="current-password"
              />

              <Group justify="space-between" mt="xs">
                <Checkbox
                  label={t('rememberMe')}
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.currentTarget.checked)}
                />
                <Anchor size="sm" href="/auth/forgot-password">
                  {t('forgotPassword')}
                </Anchor>
              </Group>

              <Button type="submit" fullWidth mt="md" loading={loading}>
                {t('signInButton')}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Container>
  );
}
