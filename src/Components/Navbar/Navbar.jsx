import { useEffect } from "react";
import { FiSettings, FiBell } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsFullscreen } from "react-icons/bs";

export default function Navbar({ open, setOpen, fullscreen, setFullscreen }) {
  const handleFullscreenToggle = () => {
    if (!fullscreen) {
      const docElm = document.documentElement;
      if (docElm.requestFullscreen) docElm.requestFullscreen();
      else if (docElm.mozRequestFullScreen) docElm.mozRequestFullScreen();
      else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();
      else if (docElm.msRequestFullscreen) docElm.msRequestFullscreen();

      setOpen(false);
      setFullscreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();

      setFullscreen(false);
      setOpen(true);
    }
  };

  // Detect manual fullscreen exit (Esc key or OS exit)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      setFullscreen(!!isFullscreen);
      if (!isFullscreen) setOpen(true);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, [setFullscreen, setOpen]);

  return (
    <header className="flex justify-between items-center p-7">
      {/* Fullscreen Button */}
      <div
        className="cursor-pointer hidden md:block"
        onClick={handleFullscreenToggle}
      >
        <BsFullscreen />
      </div>

      {/* Right section */}
      <div className="flex justify-end items-center gap-6">
        <FiBell className="text-xl cursor-pointer hidden md:block" />
        <FiSettings className="text-xl cursor-pointer hidden md:block" />
        <button
          onClick={() => setOpen(!open)}
          className={`cursor-pointer text-gray-300 hover:text-white text-2xl md:hidden transition-all duration-100 ${
            open
              ? "opacity-0 translate-x-4 pointer-events-none"
              : "opacity-300 translate-x-0"
          }`}
        >
          <HiMenuAlt3 />
        </button>
      </div>
    </header>
  );
}
