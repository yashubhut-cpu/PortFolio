import React, { useState } from 'react';
import { CheckSquare, Plus, Check } from 'lucide-react';

export const TaskBoardWidget: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Deploy WebSocket Cluster', done: true },
    { id: 2, text: 'Optimize Redis Cache Queries', done: true },
    { id: 3, text: 'Audit SSL Security Rules', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const completedCount = tasks.filter((t) => t.done).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="w-full max-w-md bg-white dark:bg-[#16213e] border-3 border-black dark:border-[#e85d04] p-4 sm:p-5 rounded-xs neobrutal-shadow text-[#1a1a2e] dark:text-white space-y-4 font-plus-jakarta select-none">
      <div className="flex items-center justify-between border-b-2 border-black dark:border-[#e85d04]/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0d9488] text-white flex items-center justify-center font-black border border-black">
            <CheckSquare size={16} />
          </div>
          <div>
            <h4 className="font-montserrat text-xs font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
              Sprint Task Checklist
            </h4>
            <span className="font-space-grotesk text-[9px] text-stone-600 dark:text-stone-400 font-bold block">
              Real-time Task Matrix
            </span>
          </div>
        </div>
        <span className="font-space-grotesk text-[10px] font-extrabold bg-[#e85d04] text-black px-2 py-0.5 border border-black rounded-xs">
          {progressPercent}% DONE
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="w-full h-3 bg-stone-200 dark:bg-stone-800 border border-black rounded-xs overflow-hidden">
          <div
            className="h-full bg-[#0d9488] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex items-center gap-3 p-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs cursor-pointer hover:border-[#e85d04] transition-colors"
          >
            <div
              className={`w-5 h-5 border-2 border-black flex items-center justify-center rounded-xs ${
                task.done ? 'bg-[#059669] text-white' : 'bg-white'
              }`}
            >
              {task.done && <Check size={12} strokeWidth={3} />}
            </div>
            <span
              className={`text-xs font-space-grotesk font-bold ${
                task.done
                  ? 'line-through text-stone-400 dark:text-stone-500'
                  : 'text-[#1a1a2e] dark:text-white'
              }`}
            >
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
