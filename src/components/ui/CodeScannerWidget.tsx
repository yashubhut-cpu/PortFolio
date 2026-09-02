import React, { useState } from 'react';
import { Scan, Search, CheckCircle } from 'lucide-react';

export const CodeScannerWidget: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 1800);
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-[#16213e] border-3 border-black dark:border-[#e85d04] p-4 sm:p-5 rounded-xs neobrutal-shadow text-[#1a1a2e] dark:text-white space-y-4 font-plus-jakarta select-none">
      <div className="flex items-center justify-between border-b-2 border-black dark:border-[#e85d04]/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#e85d04] text-black flex items-center justify-center font-black border border-black">
            <Scan size={16} />
          </div>
          <div>
            <h4 className="font-montserrat text-xs font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
              Code AST & Security Parser
            </h4>
            <span className="font-space-grotesk text-[9px] text-stone-600 dark:text-stone-400 font-bold block">
              Static Analysis Utility
            </span>
          </div>
        </div>
        <span className="font-space-grotesk text-[10px] font-extrabold bg-[#0d9488] text-white px-2 py-0.5 border border-black rounded-xs">
          READY
        </span>
      </div>

      {/* Code Window */}
      <div className="bg-[#1a1a2e] text-emerald-400 p-3 rounded-xs font-mono text-[11px] border border-black space-y-1 relative overflow-hidden">
        <div className="text-stone-400">// TypeScript AST Validation</div>
        <div>
          <span className="text-pink-400">const</span> <span className="text-amber-300">schema</span> ={' '}
          <span className="text-blue-300">z.object</span>(&#123;
        </div>
        <div className="pl-4">
          <span className="text-white">user</span>: <span className="text-[#e85d04]">z.string()</span>
        </div>
        <div>&#125;);</div>

        {scanning && (
          <div className="absolute inset-0 bg-[#e85d04]/20 flex items-center justify-center backdrop-blur-[1px]">
            <span className="font-space-grotesk text-xs font-extrabold text-white bg-black px-3 py-1 border border-white animate-pulse">
              SCANNING CODE DIFF...
            </span>
          </div>
        )}
      </div>

      {/* Output Status */}
      {scanned ? (
        <div className="p-2.5 bg-[#059669]/10 border border-[#059669] rounded-xs text-xs font-space-grotesk font-bold text-[#059669] flex items-center gap-2">
          <CheckCircle size={14} />
          <span>0 Vulnerabilities Detected • 100% Type Safe</span>
        </div>
      ) : (
        <button
          onClick={handleScan}
          disabled={scanning}
          className="w-full bg-[#1a1a2e] dark:bg-stone-800 hover:bg-[#2a2a4e] text-white p-2.5 border-2 border-black font-space-grotesk text-xs uppercase font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <Search size={14} className="text-[#e85d04]" />
          <span>Run Security AST Scan</span>
        </button>
      )}
    </div>
  );
};
