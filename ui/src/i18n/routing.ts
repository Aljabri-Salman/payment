import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ar', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'ar',
  // 🔥 Only prefix pages, not API routes
  localePrefix: 'as-needed',
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);