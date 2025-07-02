import React, { useState } from 'react';
import {
  MapIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/outline';

const UnderConstruction = ({ label }) => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="text-6xl mb-4">🚧</div>
    <h2 className="text-2xl font-bold text-purple-700 mb-2">
      {label} Panel Under Construction
    </h2>
    <p className="text-gray-600 text-center max-w-md">
      This section is being built with enterprise-grade functionality. 
      Check back soon for the complete {label.toLowerCase()} management interface.
    </p>
  </div>
);

const tabs = [
  {
    id: 'territory',
    name: 'Territory Map',
    icon: MapIcon,
    component: () => <UnderConstruction label="Territory Map" />
  },
  {
    id: 'vendors',
    name: 'Vendor Manager',
    icon: UsersIcon,
    component: () => <UnderConstruction label="Vendor Manager" />
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: ChartBarIcon,
    component: () => <UnderConstruction label="Analytics Dashboard" />
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: CogIcon,
    component: () => <UnderConstruction label="Settings" />
  }
];

export default function CzarAdminPanel() {
  const [activeTab, setActiveTab] = useState('territory');
  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component ||
    (() => <UnderConstruction label="Unknown" />);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">LVGT Czar Admin</h1>
            <p className="text-sm text-gray-600">
              Enterprise Intelligence & Security System
            </p>
          </div>
          <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ActiveComponent />
      </div>
    </div>
  );
}