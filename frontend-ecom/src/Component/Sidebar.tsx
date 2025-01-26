import React, { useState } from "react";
import { Outlet } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index: number) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: "🏠",
      path: "/dashboard",
    },
    {
      title: "Manage",
      icon: "⚙️",
      submenu: [
        { title: "Users", path: "/manage/users" },
        { title: "Products", path: "/manage/products" },
        { title: "Orders", path: "/manage/orders" },
      ],
    },
    {
      title: "Reports",
      icon: "📊",
      path: "/reports",
    },
    {
      title: "Settings",
      icon: "🔧",
      path: "/settings",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-30 h-full w-48 bg-gray-800 text-white transition-transform lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:py-6">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button
            className="text-xl lg:hidden ml-5"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <nav className="mt-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-700"
                onClick={() => item.submenu && toggleSubmenu(index)}
              >
                <span className="flex items-center gap-2">
                  {item.icon} {item.title}
                </span>
                {item.submenu && (
                  <span>
                    {submenuOpen === index ? "▲" : "▼"}
                  </span>
                )}
              </button>
              {item.submenu && (
                <div
                  className={`overflow-hidden transition-all ${
                    submenuOpen === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subitem.path}
                      className="block px-8 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      {subitem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1">
        <button
          className="m-4 p-2 text-white bg-gray-800 rounded lg:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Content Area</h2>
          <p className="mt-2 text-gray-700">
            This is where your main content will go.
            <Outlet />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
