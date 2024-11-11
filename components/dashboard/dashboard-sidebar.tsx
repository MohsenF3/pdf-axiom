import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./sidebar"));
const MobileSidebar = dynamic(() => import("./mobile-sidebar"));

export default function DashboardSidebar() {
  return (
    <aside className="h-auto w-full lg:h-full lg:w-auto">
      <div className="w-auto lg:w-full">
        {/* Desktop sidebar */}
        <Sidebar className="hidden lg:flex" />

        {/* Mobile sidebar */}
        <MobileSidebar />
      </div>
    </aside>
  );
}
