import { Outlet } from 'react-router';
import { Container } from '@/components/container';
import { MenuSidebar } from '@/components/menu';

export function DashboardLayout() {
  return (
    <div className="flex h-screen w-full">
      <MenuSidebar />

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
