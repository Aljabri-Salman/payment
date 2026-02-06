/**
 * MerchantDashboard Utility Functions
 */

import { Gateway } from '@/convex/types';

/**
 * Get display name for a gateway
 */
export function getGatewayDisplayName(gateway: Gateway): string {
  const displayNames: Record<Gateway, string> = {
    hyperpay: 'HyperPay',
    moyasar: 'Moyasar',
    tap: 'Tap Payments',
    checkout: 'Checkout.com',
  };

  return displayNames[gateway] || gateway;
}

/**
 * Get color for gateway badge
 */
export function getGatewayColor(gateway: Gateway): string {
  const colors: Record<Gateway, string> = {
    hyperpay: 'blue',
    moyasar: 'green',
    tap: 'violet',
    checkout: 'orange',
  };

  return colors[gateway] || 'gray';
}
