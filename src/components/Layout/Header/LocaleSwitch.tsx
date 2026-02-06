'use client';

import { usePathname } from "@/i18n/routing";
import { Button, UnstyledButton } from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import classes from './Header.module.css';

interface LocaleSwitchProps {
  fullWidth?: boolean;
}

export default function LocaleSwitch({ fullWidth }: LocaleSwitchProps) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'ar' : 'en';
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = () => {
    startTransition(() => {
      const newPath = `/${nextLocale}${pathname}`;
      console.log('Navigating to:', newPath);
      router.push(newPath);
    });
  }

  if (fullWidth) {
    return (
      <UnstyledButton
        onClick={handleLocaleChange}
        className={`${classes.link} ${classes.linkButton}`}
        type="button"
        disabled={isPending}
      >
        <span className={classes.linkContent}>
          <IconWorld size={20} />
          {locale === 'en' ? 'عربي' : 'EN'}
        </span>
      </UnstyledButton>
    );
  }

  return (
    <Button
      size="xs"
      disabled={isPending}
      leftSection={<IconWorld size={15} />}
      variant="subtle"
      onClick={handleLocaleChange} >
      {locale === 'en' ? 'عربي' : 'EN'}
    </Button>
  );
}