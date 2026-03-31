import { motion } from "framer-motion";

interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: string;
  type: "credit" | "debit";
  status: "success" | "pending" | "failed";
  date: string;
  icon: string;
}

export function TransactionRow({ tx, index }: { tx: Transaction; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-accent/30 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-lg">
          {tx.icon}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{tx.name}</p>
          <p className="text-xs text-muted-foreground">{tx.category} · {tx.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          tx.status === "success" ? "status-success" :
          tx.status === "pending" ? "status-pending" : "status-failed"
        }`}>
          {tx.status}
        </span>
        <span className={`text-sm font-medium ${tx.type === "credit" ? "text-success" : "text-foreground"}`}>
          {tx.type === "credit" ? "+" : "-"}{tx.amount}
        </span>
      </div>
    </motion.div>
  );
}

export type { Transaction };
