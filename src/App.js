import './App.css'
import NpfMaster from './Component/NpfMaster'
import Navbar from './Component/StickyComponent/Navbar';
import Sidebar from './Component/StickyComponent/Sidebar';

function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      
      <div className="layout-container">
        <Sidebar />
        <NpfMaster />
      </div>
    </>
  );
}

export default App;