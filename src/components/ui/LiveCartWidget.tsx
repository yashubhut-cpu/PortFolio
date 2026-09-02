import React, { useState } from 'react';
import { ShoppingBag, Printer, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LiveCartWidget: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Cloud Server Slot', qty: 2, price: 49 },
    { id: 2, name: 'SSL Security Cert', qty: 1, price: 29 },
  ]);
  const [paid, setPaid] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  const handleCheckout = () => {
    setPaid(true);
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setPaid(false), 3000);
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-[#16213e] border-3 border-black dark:border-[#e85d04] p-4 sm:p-5 rounded-xs neobrutal-shadow text-[#1a1a2e] dark:text-white space-y-4 font-plus-jakarta select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-black dark:border-[#e85d04]/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#e85d04] text-black flex items-center justify-center font-black border border-black">
            <ShoppingBag size={16} />
          </div>
          <div>
            <h4 className="font-montserrat text-xs font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
              Live Register POS
            </h4>
            <span className="font-space-grotesk text-[9px] text-stone-600 dark:text-stone-400 font-bold block">
              Cart Simulator #0492
            </span>
          </div>
        </div>
        <span className="font-space-grotesk text-[10px] font-extrabold bg-[#0d9488] text-white px-2 py-0.5 border border-black rounded-xs">
          ONLINE
        </span>
      </div>

      {/* Cart Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs text-xs"
          >
            <span className="font-space-grotesk font-bold text-[#1a1a2e] dark:text-white">
              {item.qty}x {item.name}
            </span>
            <span className="font-mono text-stone-800 dark:text-stone-200 font-bold">${item.qty * item.price}</span>
          </div>
        ))}
      </div>

      {/* Subtotal & Taxes */}
      <div className="border-t border-stone-200 dark:border-stone-700 pt-3 space-y-1 text-xs">
        <div className="flex justify-between text-stone-600 dark:text-stone-400">
          <span>Subtotal</span>
          <span className="font-mono">${subtotal}</span>
        </div>
        <div className="flex justify-between text-stone-600 dark:text-stone-400">
          <span>Sales Tax (8%)</span>
          <span className="font-mono">${tax}</span>
        </div>
        <div className="flex justify-between font-montserrat text-sm font-black text-[#1a1a2e] dark:text-[#e85d04] pt-1">
          <span>TOTAL DUE</span>
          <span className="font-mono text-[#e85d04]">${total}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="pt-2">
        {paid ? (
          <div className="w-full bg-[#059669] text-white p-2.5 border-2 border-black font-space-grotesk text-xs uppercase font-extrabold flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]">
            <CheckCircle size={16} />
            <span>Payment Verified & Printed!</span>
          </div>
        ) : (
          <button
            onClick={handleCheckout}
            className="w-full bg-[#e85d04] hover:bg-[#fb923c] text-black p-2.5 border-2 border-black font-space-grotesk text-xs uppercase font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <Printer size={16} />
            <span>Process Checkout (${total})</span>
          </button>
        )}
      </div>
    </div>
  );
};
