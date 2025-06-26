import MainLayout from "@/components/layout/main-layout"
import TicketsTrackingContent from "@/components/tickets-tracking-content"

export default function TicketsPage() {
  return (
    <MainLayout title="Dashboard">
      <TicketsTrackingContent />
    </MainLayout>
  )
}
