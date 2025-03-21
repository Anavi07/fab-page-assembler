
import React from 'react';
import { Sidebar } from '../sidebar/Sidebar';

interface TasklyLayoutProps {
  children: React.ReactNode;
}

const TasklyLayout: React.FC<TasklyLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="taskly-container flex w-full h-[calc(100vh-2rem)] max-h-[800px]">
        <Sidebar />
        <main className="flex-1 overflow-hidden flex">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TasklyLayout;
