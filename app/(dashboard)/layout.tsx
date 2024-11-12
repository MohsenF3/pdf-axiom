import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-dvh w-full flex-col items-start overflow-hidden lg:flex-row">
      <DashboardSidebar />

      <main className="relative flex h-full w-full flex-col gap-10 p-4 lg:p-8">
        {children}
      </main>
    </div>
  );
}
