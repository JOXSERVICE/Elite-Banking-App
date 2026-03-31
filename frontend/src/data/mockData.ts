import { Transaction } from "@/components/TransactionRow";

export const accounts = [
  {
    id: "1",
    name: "Personal Savings",
    balance: "48,250.00",
    currency: "USD",
    type: "Savings",
    cardNumber: "•••• •••• •••• 4821",
    gradient: "bg-gradient-to-br from-primary/80 to-primary/40 text-primary-foreground",
  },
  {
    id: "2",
    name: "Corporate Account",
    balance: "124,800.50",
    currency: "USD",
    type: "Corporate",
    cardNumber: "•••• •••• •••• 7392",
    gradient: "bg-gradient-to-br from-secondary to-accent text-foreground",
  },
  {
    id: "3",
    name: "Fixed Deposit",
    balance: "75,000.00",
    currency: "USD",
    type: "Fixed Deposit",
    cardNumber: "•••• •••• •••• 1056",
    gradient: "bg-gradient-to-br from-muted to-secondary text-foreground",
  },
];

export const transactions: Transaction[] = [
  { id: "1", name: "Apple Inc.", category: "Subscription", amount: "$14.99", type: "debit", status: "success", date: "Mar 28, 2026", icon: "🍎" },
  { id: "2", name: "Salary Deposit", category: "Income", amount: "$8,500.00", type: "credit", status: "success", date: "Mar 25, 2026", icon: "💰" },
  { id: "3", name: "Amazon Purchase", category: "Shopping", amount: "$245.80", type: "debit", status: "success", date: "Mar 24, 2026", icon: "📦" },
  { id: "4", name: "Wire Transfer", category: "Transfer", amount: "$1,200.00", type: "debit", status: "pending", date: "Mar 23, 2026", icon: "🔄" },
  { id: "5", name: "Netflix", category: "Entertainment", amount: "$19.99", type: "debit", status: "success", date: "Mar 22, 2026", icon: "🎬" },
  { id: "6", name: "Freelance Payment", category: "Income", amount: "$3,200.00", type: "credit", status: "success", date: "Mar 20, 2026", icon: "💼" },
  { id: "7", name: "Uber", category: "Transport", amount: "$32.50", type: "debit", status: "failed", date: "Mar 19, 2026", icon: "🚗" },
  { id: "8", name: "Starbucks", category: "Food", amount: "$8.75", type: "debit", status: "success", date: "Mar 18, 2026", icon: "☕" },
  { id: "9", name: "Investment Return", category: "Investment", amount: "$520.00", type: "credit", status: "success", date: "Mar 17, 2026", icon: "📈" },
  { id: "10", name: "Gym Membership", category: "Health", amount: "$45.00", type: "debit", status: "success", date: "Mar 16, 2026", icon: "💪" },
];

export const spendingData = [
  { month: "Oct", spending: 3200, income: 8500 },
  { month: "Nov", spending: 4100, income: 9200 },
  { month: "Dec", spending: 3800, income: 8800 },
  { month: "Jan", spending: 4500, income: 11700 },
  { month: "Feb", spending: 3600, income: 9000 },
  { month: "Mar", spending: 4200, income: 11700 },
];

export const auditLogs = [
  { id: "1", user: "admin@apex.com", action: "Login", details: "Successful login from 192.168.1.1", timestamp: "2026-03-31 09:15:00", level: "info" as const },
  { id: "2", user: "john@apex.com", action: "Transfer", details: "Transferred $1,200 to external account", timestamp: "2026-03-31 10:30:00", level: "info" as const },
  { id: "3", user: "admin@apex.com", action: "User Update", details: "Updated role for user jane@apex.com", timestamp: "2026-03-30 14:22:00", level: "warning" as const },
  { id: "4", user: "jane@apex.com", action: "Failed Login", details: "3 failed attempts from 10.0.0.5", timestamp: "2026-03-30 08:45:00", level: "error" as const },
  { id: "5", user: "system", action: "Backup", details: "Daily backup completed successfully", timestamp: "2026-03-30 02:00:00", level: "info" as const },
];

export const users = [
  { id: "1", name: "John Doe", email: "john@apex.com", role: "Admin", status: "Active", lastLogin: "2026-03-31" },
  { id: "2", name: "Jane Smith", email: "jane@apex.com", role: "User", status: "Active", lastLogin: "2026-03-30" },
  { id: "3", name: "Bob Wilson", email: "bob@apex.com", role: "User", status: "Suspended", lastLogin: "2026-03-28" },
  { id: "4", name: "Alice Brown", email: "alice@apex.com", role: "Manager", status: "Active", lastLogin: "2026-03-31" },
];
