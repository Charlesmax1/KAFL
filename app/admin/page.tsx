import ComingSoon from '@/components/ComingSoon'

export default function AdminPage() {
  return (
    <ComingSoon
      icon="🛠️"
      title="Admin Dashboard"
      description="The administration dashboard is under development. Features coming soon to manage the league."
      features={[
        'Manage teams and players',
        'Create and schedule fixtures',
        'Update match scores',
        'Publish news articles',
        'Manage user access'
      ]}
    />
  )
}