import React, { useState } from 'react';
import {
  LayoutDashboard,
  Target,
  Zap,
  BarChart3,
  BookOpen,
  Menu,
  X,
} from 'lucide-react';

const Sidebar = ({ activeItem = 'Dashboard', onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '#' },
    { name: 'Strict', icon: Target, href: '#' },
    { name: 'Normal', icon: Zap, href: '#' },
    { name: 'Analysis', icon: BarChart3, href: '#' },
    { name: 'Resources', icon: BookOpen, href: '#' },
  ];

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      const newCollapsed = !isCollapsed;
      setIsCollapsed(newCollapsed);
      if (onCollapseChange) {
        onCollapseChange(newCollapsed);
      }
    }
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2  bg-[var(--card)] rounded-lg shadow-lg hover:bg-[var(--card-foreground)] transition-colors duration-200"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-24 left-0 h-[calc(100vh-6rem)] bg-[var(--card)] border-r border-[var(--border)]
          shadow-lg z-40 transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-[var(--primary)]">LeetCode Bucket</h2>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden md:block p-2 rounded-lg hover:bg-[var(--muted)] transition-colors duration-200"
          >
            <Menu size={20} className={`transform transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 rounded-lg transition-all duration-200
                      hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]
                      ${isActive ? 'bg-[var(--accent)] text-[var(--accent-foreground)]' : 'text-[var(--primary)]'}
                      ${isCollapsed ? 'justify-center' : 'justify-start'}
                    `}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="ml-3 font-medium">{item.name}</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border)]">
          {!isCollapsed && (
            <p className="text-sm text-[var(--muted-foreground)] text-center">
              Keep solving! 🚀
            </p>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
