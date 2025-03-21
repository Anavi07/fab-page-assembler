
import React from 'react';
import { Clock, Calendar, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  title: string;
  description: string;
  timeLeft: string;
  date: string;
  time: string;
  priority: 'high-priority' | 'medium' | 'low';
  style?: React.CSSProperties;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  timeLeft,
  date,
  time,
  priority,
  style
}) => {
  return (
    <div 
      className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow animate-scale-in"
      style={style}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
            <Clock className="w-3 h-3" />
          </div>
          <span className="text-xs text-gray-500">{timeLeft} Left</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      
      <h3 className="text-[15px] font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={cn("priority-pill", priority)}>
          {priority === 'high-priority' ? 'High priority' : priority === 'medium' ? 'Medium' : 'Low'}
        </span>
      </div>
      
      <div className="flex gap-2">
        <div className="date-pill">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
        </div>
        <div className="time-pill">
          <Clock className="w-3 h-3" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
