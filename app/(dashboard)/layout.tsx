import OrgSidebar from "./_components/OrgSidebar"
import Sidebar from "./_components/Sidebar/index"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default (props: DashboardLayoutProps) => {
  return (
    <main className="flex">
      <Sidebar></Sidebar>
      <div className="flex m-0 gap-5 w-full">
        <OrgSidebar></OrgSidebar>
        {props.children}
      </div>
    </main>
  )
}