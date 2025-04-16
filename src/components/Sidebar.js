'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [showInsights, setShowInsights] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <div className="w-64 bg-white shadow-md h-screen fixed">
      <div className="p-4 flex items-center">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
        <h1 className="text-lg font-bold text-green-600">Tekno Solusi Agro</h1>
      </div>

      <div className="p-4">
        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
          + New Task
        </button>
      </div>

      <div className="p-4">
        <input
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Search..."
          type="text"
        />
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center p-2 rounded-md transition-colors ${
                isActive('/dashboard') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-tachometer-alt mr-2"></i>
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/Monitoring"
              className={`flex items-center p-2 rounded-md transition-colors ${
                isActive('/Monitoring') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-eye mr-2"></i>
              Monitoring
            </Link>
          </li>

          <li>
            <Link
              href="/crop-production"
              className={`flex items-center p-2 rounded-md transition-colors ${
                isActive('/crop-production') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-seedling mr-2"></i>
              Crop Production
            </Link>
          </li>

          <li>
            <Link
              href="/Resources"
              className={`flex items-center p-2 rounded-md transition-colors ${
                isActive('/resources') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-box-open mr-2"></i>
              Resources
            </Link>
          </li>

          <li>
            <button
              onClick={() => setShowInsights(!showInsights)}
              className={`flex items-center w-full p-2 rounded-md transition-colors ${
                pathname.startsWith('/insights') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-chart-line mr-2"></i>
              Insights
              <i className={`fas fa-chevron-${showInsights ? 'up' : 'down'} ml-auto`}></i>
            </button>

            {showInsights && (
              <ul className="ml-6 mt-2 space-y-1">
                <li className="px-4 py-2 bg-gray-200 rounded">
                  <Link href="/insights/field-activity">Field Activity Record</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 rounded">
                  <Link href="/insights/reporting">Reporting</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 rounded">
                  <Link href="/insights/analysis">Analysis</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 rounded">
                  <Link href="/insights/finance">Finance</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/Notifications"
              className={`flex items-center p-2 rounded-md transition-colors ${
                isActive('/notifications') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-bell mr-2"></i>
              Notifications
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">9+</span>
            </Link>
          </li>

          <li>
            <Link
              href="/setting"
              className={`flex items-center p-2 rounded-md transition-colors ${
                isActive('/settings') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-cog mr-2"></i>
              Setting
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
            <Image
              src="/profile-picture.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Nazlan Rizqon</p>
            <p className="text-sm text-gray-600">nazlanrizqon@upi.edu</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors">
          <i className="fas fa-sign-out-alt mr-2"></i>
          Log out
        </button>
      </div>
    </div>
  );
}
