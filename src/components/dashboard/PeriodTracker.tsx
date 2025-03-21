
import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react';

interface TrackerCardProps {
  title: string;
  children: React.ReactNode;
}

const TrackerCard: React.FC<TrackerCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-scale-in">
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">{title}</h3>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

interface CircularProgressProps {
  value: number;
  text: string;
  subText: string;
  type?: 'period' | 'productivity';
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ 
  value, 
  text, 
  subText,
  type = 'period'
}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className={`circular-progress ${type === 'productivity' ? 'productivity-progress' : ''}`}>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} />
        <circle 
          className="progress-circle" 
          cx="50" 
          cy="50" 
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: strokeDashoffset }}
        />
      </svg>
      <div className="text-center">
        <div className="text-2xl font-semibold">{text}</div>
        <div className="text-xs text-gray-500 max-w-[80px] text-center">
          {subText}
        </div>
      </div>
    </div>
  );
};

interface PeriodTrackerSectionProps {
  dailyView?: boolean;
}

export const PeriodTrackerSection: React.FC<PeriodTrackerSectionProps> = ({ dailyView = false }) => {
  return (
    <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Period-Productivity Tracker</h2>
        <div className="relative">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
            <span className="text-sm font-medium">{dailyView ? 'Daily' : 'This Week'}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <TrackerCard title="Period Tracker (Current Cycle)">
          <CircularProgress 
            value={25} 
            text="5 days" 
            subText="until your next period"
            type="period"
          />
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-taskly-red rounded-full"></div>
            <span className="text-xs text-gray-600">Luteal Phase</span>
          </div>
        </TrackerCard>
        
        <TrackerCard title="Productivity Score">
          <CircularProgress 
            value={25} 
            text="25%" 
            subText="Goal Achieved"
            type="productivity"
          />
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-taskly-pink rounded-full"></div>
            <span className="text-xs text-gray-600">Goal Achieved</span>
          </div>
        </TrackerCard>
      </div>
    </div>
  );
};
