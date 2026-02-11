
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from "next/navigation";
import { getToken } from '@/lib/auth-server';
import { ColorSchemeScript } from "@mantine/core";
import { AppProvider } from '@/components/providers/AppProvider';


import '@mantine/core/styles.css';
// import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';


const rtlLocales = ['ar'];

export const metadata = {
  title: 'My App',
};

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cairo',
});


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!['en', 'ar'].includes(locale)) notFound();

  const isRtl = rtlLocales.includes(locale);
  const token = await getToken();

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={cairo.className}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider >
          <AppProvider
            isRtl={isRtl}
            initialToken={token ?? null}
          >
            {children}
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
