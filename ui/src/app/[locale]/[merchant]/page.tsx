import { AppLayout } from "@/components/Layout";
import { MerchantDashboard } from "@/components/MerchantDashboard";
import { Id } from "@/convex/_generated/dataModel";

interface MerchantPageProps {
  params: Promise<{
    merchant: string;
    locale: string;
  }>;
}

export default async function MerchantPage({ params }: MerchantPageProps) {
  const { merchant } = await params;
  
  return (
    <AppLayout>
      <MerchantDashboard merchantId={merchant as Id<"merchants">} />
    </AppLayout>
  );
}
