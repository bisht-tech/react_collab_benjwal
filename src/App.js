import { useState } from "react";
import "./App.css";
import NpfMaster from "./Component/NpfMaster";
import Navbar from "./Component/StickyComponent/Navbar";
import Sidebar from "./Component/StickyComponent/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      {/* Navbar remains fixed */}
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar & Content Wrapper */}
      <div className="layout-container">
        {/* Sidebar */}
        <Sidebar className={`sidebar ${isSidebarOpen ? "open" : "closed"}`} />

        {/* Main Content */}
        <div className="content">
          <NpfMaster />
        </div>
      </div>
    </div>
  );
}

export default App;