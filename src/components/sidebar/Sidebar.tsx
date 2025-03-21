
import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  ActivitySquare,
  Calendar, 
  Settings, 
  HelpCircle, 
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active, onClick }) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200",
        active ? "text-taskly-blue" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className={cn(
      "border-r border-gray-200 flex flex-col py-5 transition-all duration-300 ease-in-out",
      collapsed ? "w-[80px]" : "w-[220px]"
    )}>
      <div className="flex items-center gap-2 px-5 mb-8">
        <div className="w-8 h-8 bg-taskly-blue rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold">T</span>
        </div>
        {!collapsed && <h1 className="text-lg font-semibold">Taskly</h1>}
        <button 
          className="ml-auto text-gray-400 hover:text-gray-600"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft className={cn("w-5 h-5 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      <div className="space-y-1 flex-1">
        <SidebarItem 
          icon={<LayoutDashboard className="w-5 h-5" />} 
          text="Dashboard" 
          active={activeItem === 'Dashboard'} 
          onClick={() => handleItemClick('Dashboard')}
        />
        <SidebarItem 
          icon={<CheckSquare className="w-5 h-5" />} 
          text="Tasks" 
          active={activeItem === 'Tasks'} 
          onClick={() => handleItemClick('Tasks')}
        />
        <SidebarItem 
          icon={<ActivitySquare className="w-5 h-5" />} 
          text="Tips and Wellness" 
          active={activeItem === 'Tips and Wellness'} 
          onClick={() => handleItemClick('Tips and Wellness')}
        />
        <SidebarItem 
          icon={<Calendar className="w-5 h-5" />} 
          text="Period Tracker" 
          active={activeItem === 'Period Tracker'} 
          onClick={() => handleItemClick('Period Tracker')}
        />
        <SidebarItem 
          icon={<Settings className="w-5 h-5" />} 
          text="Settings" 
          active={activeItem === 'Settings'} 
          onClick={() => handleItemClick('Settings')}
        />
      </div>

      <div className="mt-auto">
        <SidebarItem 
          icon={<HelpCircle className="w-5 h-5" />} 
          text="Help desk" 
          active={activeItem === 'Help desk'} 
          onClick={() => handleItemClick('Help desk')}
        />
      </div>
    </div>
  );
};
