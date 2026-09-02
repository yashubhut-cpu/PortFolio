import React, { useState } from 'react';
import { Cpu, RefreshCw } from 'lucide-react';

export const OperationsWidget: React.FC = () => {
  const [pipelineState, setPipelineState] = useState({
    docker: true,
    cache: true,
    ssl: true,
  });

  const toggleSwitch = (key: keyof typeof pipelineState) => {
    setPipelineState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-[#16213e] border-3 border-black dark:border-[#e85d04] p-4 sm:p-5 rounded-xs neobrutal-shadow text-[#1a1a2e] dark:text-white space-y-4 font-plus-jakarta select-none">
      <div className="flex items-center justify-between border-b-2 border-black dark:border-[#e85d04]/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0d9488] text-white flex items-center justify-center font-black border border-black">
            <Cpu size={16} />
          </div>
          <div>
            <h4 className="font-montserrat text-xs font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
              CI/CD Automation Controls
            </h4>
            <span className="font-space-grotesk text-[9px] text-stone-600 dark:text-stone-400 font-bold block">
              Infrastructure Operations
            </span>
          </div>
        </div>
        <span className="font-space-grotesk text-[10px] font-extrabold bg-[#059669] text-white px-2 py-0.5 border border-black rounded-xs">
          ACTIVE
        </span>
      </div>

      {/* Switches Grid */}
      <div className="space-y-2">
        <div
          onClick={() => toggleSwitch('docker')}
          className="flex items-center justify-between p-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs cursor-pointer select-none"
        >
          <span className="font-space-grotesk text-xs font-bold text-[#1a1a2e] dark:text-white">
            Docker Container Build
          </span>
          <div
            className={`w-10 h-5 border-2 border-black rounded-full transition-colors flex items-center px-0.5 ${
              pipelineState.docker ? 'bg-[#059669] justify-end' : 'bg-stone-300 dark:bg-stone-600 justify-start'
            }`}
          >
            <div className="w-3.5 h-3.5 bg-white border border-black rounded-full" />
          </div>
        </div>

        <div
          onClick={() => toggleSwitch('cache')}
          className="flex items-center justify-between p-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs cursor-pointer select-none"
        >
          <span className="font-space-grotesk text-xs font-bold text-[#1a1a2e] dark:text-white">
            Redis Cache Purge Automation
          </span>
          <div
            className={`w-10 h-5 border-2 border-black rounded-full transition-colors flex items-center px-0.5 ${
              pipelineState.cache ? 'bg-[#059669] justify-end' : 'bg-stone-300 dark:bg-stone-600 justify-start'
            }`}
          >
            <div className="w-3.5 h-3.5 bg-white border border-black rounded-full" />
          </div>
        </div>

        <div
          onClick={() => toggleSwitch('ssl')}
          className="flex items-center justify-between p-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs cursor-pointer select-none"
        >
          <span className="font-space-grotesk text-xs font-bold text-[#1a1a2e] dark:text-white">
            Auto-renew SSL Certificates
          </span>
          <div
            className={`w-10 h-5 border-2 border-black rounded-full transition-colors flex items-center px-0.5 ${
              pipelineState.ssl ? 'bg-[#059669] justify-end' : 'bg-stone-300 dark:bg-stone-600 justify-start'
            }`}
          >
            <div className="w-3.5 h-3.5 bg-white border border-black rounded-full" />
          </div>
        </div>
      </div>

      {/* Audit Log Timestamp */}
      <div className="flex items-center justify-between text-[10px] font-mono text-stone-600 dark:text-stone-400 pt-1">
        <span>Last Audit Log: {new Date().toLocaleTimeString()}</span>
        <span className="flex items-center gap-1 text-[#e85d04]">
          <RefreshCw size={10} className="animate-spin" />
          SYNCED
        </span>
      </div>
    </div>
  );
};
