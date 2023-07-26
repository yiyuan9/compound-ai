import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <div>
      <div>DashboardPage</div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
export default DashboardPage