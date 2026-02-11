/**
 * MerchantDashboard Component Types
 * 
 * Type definitions for the MerchantDashboard component and its subcomponents.
 * These types extend or reference the schema types from @/convex/types
 */

import { Id } from '@/convex/_generated/dataModel';
import { Merchant, Gateway, MerchantStatus } from '@/convex/types';

/**
 * Gateway connection display type
 * This is the safe version returned by queries (without decrypted secrets)
 */
export interface GatewayConnectionDisplay {
  _id: Id<'gatewayConnections'>;
  merchantId: Id<'merchants'>;
  gateway: Gateway;
  isActive: boolean;
  hasSecret: boolean;
}

/**
 * Props for the main MerchantDashboard component
 */
export interface MerchantDashboardProps {
  merchantId?: Id<'merchants'>;
}

/**
 * Props for DashboardHeader component
 */
export interface DashboardHeaderProps {
  merchant: Merchant;
}

/**
 * Props for QuickStats component
 */
export interface QuickStatsProps {
  totalEventsCount: number;
  gatewayConnectionsCount: number;
  merchantStatus: MerchantStatus;
}

/**
 * Props for GatewayConnectionsSection component
 */
export interface GatewayConnectionsSectionProps {
  gatewayConnections: GatewayConnectionDisplay[];
  merchantId: Id<'merchants'>;
}

/**
 * Props for GatewayConnectionForm component
 */
export interface GatewayConnectionFormProps {
  merchantId: Id<'merchants'>;
  onSuccess?: () => void;
  onCancel?: () => void;
}

/**
 * Gateway option for Select dropdown
 */
export interface GatewayOption {
  value: Gateway;
  label: string;
}
