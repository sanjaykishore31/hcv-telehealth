'use client';

import Link from 'next/link';
import { Home, Calendar, Video, FileText, User, LogOut } from 'lucide-react';

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/dashboard", icon: User, label: "Dashboard" },
  { href: "/appointments", icon: Calendar, label: "Appointments" },
  { href: "/consultation", icon: Video, label: "Video Consultation" },
  { href: "/resources", icon: FileText, label: "Resources" },
];

export function Sidebar() {
  return (
    <div className="bg-primary text-primary-foreground w-64 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Cure</h1>
        <p className="text-sm">Be cured of Hepatitis C - for free</p>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <Link 
                href={href} 
                className="flex items-center space-x-2 p-2 rounded hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Link 
          href="/login" 
          className="flex items-center space-x-2 p-2 rounded hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}