import { Route, Routes } from 'react-router';
import { DashboardLayout } from './layouts/dashboard';
import { Home } from './pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
