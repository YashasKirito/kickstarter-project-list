import "./layout.css";
import KickstarterProjectsListPage from "./pages/KickstarterList/KickstarterProjectsListPage";

function AppLayout() {
  return (
    <main className="page_container">
      {/* All pages */}
      <KickstarterProjectsListPage />
    </main>
  );
}

export default AppLayout;
