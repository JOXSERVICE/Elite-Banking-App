import { motion } from "framer-motion";
import { Wallet, TrendingUp, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { StatCard } from "@/components/StatCard";
import { AccountCard } from "@/components/AccountCard";
import { TransactionRow } from "@/components/TransactionRow";
import { accounts, transactions, spendingData } from "@/data/mockData";

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <h1 className="font-heading text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Welcome back, John. Here's your financial overview.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Balance" value="$248,050.50" change="+12.5% from last month" changeType="positive" icon={Wallet} delay={0} />
        <StatCard title="Monthly Income" value="$11,700.00" change="+8.2% from last month" changeType="positive" icon={TrendingUp} delay={0.1} />
        <StatCard title="Total Spent" value="$4,200.00" change="-3.1% from last month" changeType="negative" icon={ArrowUpRight} delay={0.2} />
        <StatCard title="Received" value="$11,720.00" change="+15.0% from last month" changeType="positive" icon={ArrowDownLeft} delay={0.3} />
      </div>

      {/* Accounts */}
      <div>
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Your Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {accounts.map((acc, i) => (
            <AccountCard key={acc.id} {...acc} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Chart + Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 glass-card p-6"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Spending Analytics</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={spendingData}>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(43 72% 52%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(43 72% 52%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(215 20% 55%)" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(215 20% 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 18%)" />
              <XAxis dataKey="month" stroke="hsl(215 20% 55%)" tick={{ fontSize: 12 }} />
              <YAxis stroke="hsl(215 20% 55%)" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222 40% 10%)",
                  border: "1px solid hsl(222 20% 22%)",
                  borderRadius: "8px",
                  color: "hsl(210 40% 92%)",
                }}
              />
              <Area type="monotone" dataKey="income" stroke="hsl(43 72% 52%)" fill="url(#incomeGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="spending" stroke="hsl(215 20% 55%)" fill="url(#spendGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 glass-card p-5"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Recent Transactions</h3>
          <div className="space-y-1 max-h-[300px] overflow-y-auto">
            {transactions.slice(0, 6).map((tx, i) => (
              <TransactionRow key={tx.id} tx={tx} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
