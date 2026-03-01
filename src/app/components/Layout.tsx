import { Outlet } from 'react-router';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efe5' }}>
      <Navigation />
      <Outlet />
    </div>
  );
}
