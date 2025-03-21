
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DayProps {
  day: number;
  isToday?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const Day: React.FC<DayProps> = ({ day, isToday, isSelected, onClick }) => {
  let className = "calendar-day";
  if (isToday) className += " today";
  if (isSelected) className += " selected";
  
  return (
    <div className={className} onClick={onClick}>
      {day}
    </div>
  );
};

interface CalendarSidebarProps {
  onDateSelect: (date: Date) => void;
}

export const CalendarSidebar: React.FC<CalendarSidebarProps> = ({ onDateSelect }) => {
  const [view, setView] = React.useState<'monthly' | 'daily'>('monthly');
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const monthYearString = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    onDateSelect(newDate);
  };
  
  const renderCalendarDays = () => {
    const days = [];
    
    // Adjust for Monday as first day of week
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }
    
    // Add days of the month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        today.getDate() === day && 
        today.getMonth() === currentMonth.getMonth() && 
        today.getFullYear() === currentMonth.getFullYear();
      
      const isSelected = 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === currentMonth.getMonth() && 
        selectedDate.getFullYear() === currentMonth.getFullYear();
      
      days.push(
        <Day 
          key={day} 
          day={day} 
          isToday={isToday}
          isSelected={isSelected}
          onClick={() => handleDateClick(day)}
        />
      );
    }
    
    return days;
  };
  
  return (
    <div className="border-l border-gray-200 p-5 w-[300px] animate-slide-in-right">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <button 
            className={`text-sm font-medium px-3 py-1 rounded-full ${view === 'monthly' ? 'bg-gray-200' : ''}`}
            onClick={() => setView('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`text-sm font-medium px-3 py-1 rounded-full ${view === 'daily' ? 'bg-gray-200' : ''}`}
            onClick={() => setView('daily')}
          >
            Daily
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-medium">{monthYearString}</h2>
        <div className="flex gap-1">
          <button 
            className="p-1 rounded-full hover:bg-gray-100" 
            onClick={handlePrevMonth}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            className="p-1 rounded-full hover:bg-gray-100" 
            onClick={handleNextMonth}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdays.map(day => (
          <div key={day} className="text-center text-gray-500 text-xs font-medium">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
      
      <h2 className="text-base font-medium mt-8 mb-4">Task</h2>
      
      <div className="space-y-3">
        <TaskCheckbox label="Schedule post Dusk&Dawn" checked={true} />
        <TaskCheckbox label="Design post for Holi" checked={true} />
        <TaskCheckbox label="Brainstorming new project" checked={false} />
        <TaskCheckbox label="Re-Branding Discussion" checked={false} />
        <TaskCheckbox label="User Reasearch" checked={false} />
      </div>
      
      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl mt-6 font-medium transition-colors">
        Schedule Task
      </button>
    </div>
  );
};

interface TaskCheckboxProps {
  label: string;
  checked: boolean;
}

const TaskCheckbox: React.FC<TaskCheckboxProps> = ({ label, checked }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  
  return (
    <div className="flex items-center gap-3">
      <div 
        className={`task-checkbox ${isChecked ? 'checked' : ''}`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-3 h-3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span className={`text-sm ${isChecked ? 'line-through text-gray-400' : ''}`}>
        {label}
      </span>
    </div>
  );
};
