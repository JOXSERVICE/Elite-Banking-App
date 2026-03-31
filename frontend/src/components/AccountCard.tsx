import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";

interface AccountCardProps {
  name: string;
  balance: string;
  currency: string;
  type: string;
  cardNumber: string;
  gradient: string;
  delay?: number;
}

export function AccountCard({ name, balance, currency, type, cardNumber, gradient, delay = 0 }: AccountCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`relative overflow-hidden rounded-xl p-6 ${gradient} min-h-[200px] flex flex-col justify-between group cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-foreground/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-foreground/5 translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs uppercase tracking-widest opacity-80">{type}</span>
          <Eye className="w-4 h-4 opacity-60" />
        </div>
        <h3 className="font-heading font-bold text-lg">{name}</h3>
      </div>
      <div className="relative z-10">
        <p className="text-xs opacity-70 mb-1">Balance</p>
        <p className="font-heading text-2xl font-bold">
          {currency} {balance}
        </p>
        <p className="text-xs mt-3 opacity-70 tracking-[0.3em]">{cardNumber}</p>
      </div>
      <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
