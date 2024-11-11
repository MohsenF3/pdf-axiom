import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-dvh w-full flex-col items-start overflow-hidden lg:flex-row">
      <DashboardSidebar />

      <main className="p-3">{children}</main>
    </div>
  );
}
