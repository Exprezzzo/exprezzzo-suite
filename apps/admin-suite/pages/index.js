import AdminDashboardTiles from '../components/AdminDashboardTiles';
import UserRolePanel from '../components/UserRolePanel';
import InviteLinkGenerator from '../components/InviteLinkGenerator';
import StatusOverview from '../components/StatusOverview';
import ProjectSwitcher from '../components/ProjectSwitcher';

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🛠️ Admin Console</h1>
      <StatusOverview />
      <AdminDashboardTiles />
      <UserRolePanel />
      <InviteLinkGenerator />
      <ProjectSwitcher />
    </main>
  );
}
