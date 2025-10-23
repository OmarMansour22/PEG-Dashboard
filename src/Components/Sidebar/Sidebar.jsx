import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiEdit, FiLogIn } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { BiFile } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { GiHeartBeats } from "react-icons/gi";
import { RiMoneyDollarBoxFill, RiFileList3Line } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import reefLogo from "../../assets/reefLogo.svg";

export default function Sidebar({ open, setOpen }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  // Close sidebar automatically on small screens
  const handleLinkClick = () => {
    if (window.innerWidth < 768) setOpen(false);
  };

  const menu = [
    { icon: <MdDashboard />, text: "لوحة البيانات", path: "/dashboard" },
    { icon: <FiEdit />, text: "تقديم طلب جديد", path: "/new-request" },
    {
      icon: <BiFile />,
      text: "السجلات",
      submenu: [
        { text: "سجل العمال", path: "/records/workers" },
        { text: "سجل المعدات", path: "/records/equipment" },
        { text: "سجل المشاريع", path: "/records/projects" },
      ],
    },
    {
      icon: <BsCalendar />,
      text: "الجدول الزمنية",
      submenu: [
        { text: "جدول العمال", path: "/schedule/workers" },
        { text: "جدول المعدات", path: "/schedule/equipment" },
        { text: "جدول المشاريع", path: "/schedule/projects" },
      ],
    },
    { icon: <IoMdMail />, text: "الخطابات والمراسلات", path: "/messages" },
    {
      icon: <GiHeartBeats />,
      text: "الجودة",
      submenu: [
        { text: "جودة العمال", path: "/quality/workers" },
        { text: "جودة المشاريع", path: "/quality/projects" },
      ],
    },
    { icon: <RiMoneyDollarBoxFill />, text: "الميزانية", path: "/budget" },
    {
      icon: <RiFileList3Line />,
      text: "العقود والمشتريات",
      path: "/contracts",
    },
    { icon: <FaGraduationCap />, text: "الدراسات", path: "/studies" },
  ];

  return (
    <aside
      className={`fixed top-0 right-0 h-screen bg-linear-to-tl from-[#0b1622] via-[#0e1b2a] to-[#0c2235]
        shadow-[0_0_25px_rgba(0,0,0,0.35)] border border-[#1a2b3d]
        p-5 flex flex-col justify-between transition-all duration-300 z-50
        ${
          open
            ? "translate-x-0 w-72"
            : "translate-x-full md:translate-x-0 md:w-20"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to={""} onClick={handleLinkClick}>
          <img
            src={reefLogo}
            alt="logo"
            className={`h-12 transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 hover:text-white text-2xl cursor-pointer"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      <hr className="border-[#1a2b3d] mb-4" />

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        {open && (
          <div className="text-right text-sm mb-6 text-gray-300">
            مرحباً: <span className="font-semibold">مقاول</span>
          </div>
        )}

        <nav className="space-y-2">
          {menu.map((item, i) => (
            <div key={i}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => open && toggleSubmenu(item.text)}
                    className="w-full flex items-center justify-start gap-3 px-3 py-2 rounded-lg
                      hover:bg-[#1a2b3d] cursor-pointer transition text-right text-gray-300 hover:text-white"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {open && (
                      <span className="flex-1 flex justify-between items-center text-sm">
                        {item.text}
                        {activeSubmenu === item.text ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        )}
                      </span>
                    )}
                  </button>

                  {/* Submenu */}
                  {activeSubmenu === item.text && open && (
                    <div className="pr-10 mt-1 space-y-1">
                      {item.submenu.map((sub, j) => (
                        <NavLink
                          key={j}
                          to={sub.path}
                          onClick={handleLinkClick}
                          className={({ isActive }) =>
                            `block text-right text-sm py-1 px-2 rounded-md transition 
                            ${
                              isActive
                                ? "bg-[#1a2b3d] text-green-400"
                                : "text-gray-400 hover:text-white hover:bg-[#1a2b3d]"
                            }`
                          }
                        >
                          {sub.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `w-full flex items-center justify-start gap-3 px-3 py-2 rounded-lg transition text-right 
                    ${
                      isActive
                        ? "bg-[#1a2b3d] text-green-400"
                        : "text-gray-300 hover:text-white hover:bg-[#1a2b3d]"
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  {open && <span className="flex-1 text-sm">{item.text}</span>}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Login Button */}
      <div className="pt-4 border-t border-[#1a2b3d]">
        <NavLink
          to="/login"
          onClick={handleLinkClick}
          className="flex items-center justify-start gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1a2b3d] transition"
        >
          <FiLogIn className="text-lg" />
          {open && <span className="text-sm">تسجيل الدخول</span>}
        </NavLink>
      </div>
    </aside>
  );
}
