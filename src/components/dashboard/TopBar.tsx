
import React from 'react';
import { Search, Bell, Calendar, MessageSquare } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-2 px-5 border-b border-gray-200 animate-fade-in">
      <div className="relative max-w-md w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for anything..."
          className="block w-full bg-gray-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-taskly-blue"
        />
      </div>
      
      <div className="flex items-center gap-5">
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            <Calendar className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            <MessageSquare className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
          <span className="text-sm font-medium">User</span>
        </div>
      </div>
    </div>
  );
};
