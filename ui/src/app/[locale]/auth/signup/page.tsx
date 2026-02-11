'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
  Anchor,
  Stack,
  Alert,
  Progress,
  Box,
} from '@mantine/core';
import { IconAlertCircle, IconMail, IconLock, IconUser, IconCheck, IconX } from '@tabler/icons-react';
import { authClient } from '@/lib/auth-client';

// Password strength checker
function getPasswordStrength(password: string): number {
  let strength = 0;
  if (password.length >= 8) strength += 25;
  if (password.length >= 12) strength += 25;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
  if (/\d/.test(password)) strength += 15;
  if (/[^a-zA-Z0-9]/.test(password)) strength += 10;
  return Math.min(strength, 100);
}

function getPasswordStrengthColor(strength: number): string {
  if (strength < 40) return 'red';
  if (strength < 70) return 'yellow';
  return 'green';
}

export default function SignUpPage() {
  const t = useTranslations('SignUpPage');
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const passwordStrength = getPasswordStrength(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate passwords match
    if (password !== confirmPassword) {
      setError(t('errorPasswordMismatch'));
      setLoading(false);
      return;
    }

    // Validate password strength
    if (passwordStrength < 40) {
      setError(t('errorWeakPassword'));
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: '/',
      });

      if (error) {
        setError(error.message || t('errorGeneric'));
      } else if (data) {
        setSuccess(true);
        // Successful signup, redirect to dashboard after a short delay
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    } catch (err) {
      setError(t('errorGeneric'));
      console.error('Sign up error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={460} my={40}>
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
            <Anchor size="sm" href="/auth/login">
              {t('signInLink')}
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

              {success && (
                <Alert icon={<IconCheck size={16} />} color="green" variant="light">
                  {t('successMessage')}
                </Alert>
              )}

              <TextInput
                label={t('nameLabel')}
                placeholder={t('namePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                leftSection={<IconUser size={16} />}
                required
                autoComplete="name"
              />

              <TextInput
                label={t('emailLabel')}
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftSection={<IconMail size={16} />}
                required
                type="email"
                autoComplete="email"
              />

              <div>
                <PasswordInput
                  label={t('passwordLabel')}
                  placeholder={t('passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  leftSection={<IconLock size={16} />}
                  required
                  autoComplete="new-password"
                />
                {password && (
                  <Box mt="xs">
                    <Text size="xs" c="dimmed" mb={5}>
                      {t('passwordStrength')}
                    </Text>
                    <Progress
                      value={passwordStrength}
                      color={getPasswordStrengthColor(passwordStrength)}
                      size="sm"
                    />
                  </Box>
                )}
              </div>

              <PasswordInput
                label={t('confirmPasswordLabel')}
                placeholder={t('confirmPasswordPlaceholder')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                leftSection={
                  confirmPassword ? (
                    passwordsMatch ? (
                      <IconCheck size={16} color="green" />
                    ) : (
                      <IconX size={16} color="red" />
                    )
                  ) : (
                    <IconLock size={16} />
                  )
                }
                required
                autoComplete="new-password"
                error={confirmPassword && !passwordsMatch ? t('errorPasswordMismatch') : undefined}
              />

              <Button type="submit" fullWidth mt="md" loading={loading} disabled={success}>
                {t('signUpButton')}
              </Button>

              <Text size="xs" c="dimmed" ta="center" mt="xs">
                {t('termsText')}{' '}
                <Anchor size="xs" href="/terms">
                  {t('termsLink')}
                </Anchor>{' '}
                {t('and')}{' '}
                <Anchor size="xs" href="/privacy">
                  {t('privacyLink')}
                </Anchor>
              </Text>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Container>
  );
}
