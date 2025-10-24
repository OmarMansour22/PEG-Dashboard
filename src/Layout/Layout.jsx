import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  // Auto-close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1622] text-white relative flex">
      {/* Sidebar — hidden completely in fullscreen */}
      {!fullscreen && (
        <>
          <div className="hidden md:block">
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          </div>

          <div className="md:hidden">
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          </div>
        </>
      )}

      {/* Overlay (mobile) */}
      {sidebarOpen && !fullscreen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          fullscreen ? "md:mr-0" : sidebarOpen ? "md:mr-72" : "md:mr-20"
        }`}
      >
        <Navbar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
        />
        <main className="flex-1 py-6 px-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
