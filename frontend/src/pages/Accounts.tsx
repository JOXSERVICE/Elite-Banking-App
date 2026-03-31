import { motion } from "framer-motion";
import { AccountCard } from "@/components/AccountCard";
import { accounts } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Send, FileText, Plus } from "lucide-react";

export default function Accounts() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Accounts</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your bank accounts</p>
        </div>
        <Button className="gold-gradient text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" /> New Account
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((acc, i) => (
          <div key={acc.id} className="space-y-3">
            <AccountCard {...acc} delay={i * 0.1} />
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 border-border hover:border-primary/50 hover:bg-accent">
                <Send className="w-3 h-3 mr-2" /> Transfer
              </Button>
              <Button variant="outline" size="sm" className="flex-1 border-border hover:border-primary/50 hover:bg-accent">
                <FileText className="w-3 h-3 mr-2" /> Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Portfolio Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Assets</p>
            <p className="text-2xl font-heading font-bold gold-text">$248,050.50</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active Accounts</p>
            <p className="text-2xl font-heading font-bold text-foreground">3</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Currencies</p>
            <p className="text-2xl font-heading font-bold text-foreground">USD</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
