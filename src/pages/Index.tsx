
import React, { useState } from 'react';
import { TopBar } from '@/components/dashboard/TopBar';
import { DailyProgress, TaskTabs } from '@/components/dashboard/DailyProgress';
import { TaskCard } from '@/components/dashboard/TaskCard';
import { PeriodTrackerSection } from '@/components/dashboard/PeriodTracker';
import { CalendarSidebar } from '@/components/dashboard/Calendar';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="flex flex-col w-full">
      <TopBar />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-6 overflow-auto">
          <DailyProgress percentage={65} />
          
          <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <h2 className="text-lg font-semibold mb-5 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Upcoming Tasks
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <TaskCard
              title="Study today's lecture"
              description="Microprocessor: Interfacing"
              timeLeft="12 Min"
              date="23 Mar 2024"
              time="12:45 pm"
              priority="medium"
              style={{ animationDelay: '0.3s' }}
            />
            
            <TaskCard
              title="HCI Project Discussion"
              description="Discussion on front-end design improvements"
              timeLeft="58 Min"
              date="23 Mar 2024"
              time="1:30 pm"
              priority="high-priority"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
          
          <PeriodTrackerSection />
        </div>
        
        <CalendarSidebar onDateSelect={setSelectedDate} />
      </div>
    </div>
  );
};

export default Index;
