import { useState } from "react";
import { motion } from "framer-motion";
import { transactions } from "@/data/mockData";
import { TransactionRow } from "@/components/TransactionRow";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Transactions() {
  const [filter, setFilter] = useState<"all" | "credit" | "debit">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "success" | "pending" | "failed">("all");
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((tx) => {
    if (filter !== "all" && tx.type !== filter) return false;
    if (statusFilter !== "all" && tx.status !== statusFilter) return false;
    if (search && !tx.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-2xl font-bold text-foreground">Transactions</h1>
        <p className="text-muted-foreground text-sm mt-1">View and filter your transaction history</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center"
      >
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-secondary/50 border-border focus:border-primary"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {(["all", "credit", "debit"] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={filter === f ? "gold-gradient text-primary-foreground" : "border-border hover:border-primary/50"}
            >
              {f === "all" ? "All" : f === "credit" ? "Income" : "Expense"}
            </Button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          {(["all", "success", "pending", "failed"] as const).map((s) => (
            <Button
              key={s}
              variant={statusFilter === s ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(s)}
              className={statusFilter === s ? "gold-gradient text-primary-foreground" : "border-border hover:border-primary/50"}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Transaction List */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-4"
      >
        {filtered.length > 0 ? (
          <div className="space-y-1">
            {filtered.map((tx, i) => (
              <TransactionRow key={tx.id} tx={tx} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Filter className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No transactions match your filters</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
