
import React from 'react';
import { RefreshCcw, Maximize2 } from 'lucide-react';

interface DailyProgressProps {
  percentage: number;
}

export const DailyProgress: React.FC<DailyProgressProps> = ({ percentage }) => {
  return (
    <div className="mb-8 animate-slide-in-up">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">Today</span>
        <span className="text-gray-400 text-sm">{percentage}% complete</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export const TaskTabs: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  const tabs = ['Upcoming', 'Board', 'Notes'];
  
  return (
    <div className="flex justify-between items-center mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="flex border-b border-gray-200 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <RefreshCcw className="w-4 h-4 text-gray-500" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Maximize2 className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};
