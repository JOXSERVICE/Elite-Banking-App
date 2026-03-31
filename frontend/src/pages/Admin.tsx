import { motion } from "framer-motion";
import { auditLogs, users } from "@/data/mockData";
import { Shield, Users, AlertTriangle, Info, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Admin() {
  const levelIcon = (level: string) => {
    if (level === "error") return <XCircle className="w-4 h-4 text-destructive" />;
    if (level === "warning") return <AlertTriangle className="w-4 h-4 text-warning" />;
    return <Info className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-2xl font-bold text-foreground">Admin Panel</h1>
        <p className="text-muted-foreground text-sm mt-1">System administration and audit logs</p>
      </motion.div>

      {/* User Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> User Management
          </h2>
          <Button className="gold-gradient text-primary-foreground hover:opacity-90" size="sm">
            Add User
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Name</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Email</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Role</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Last Login</th>
                <th className="text-right py-3 px-4 text-muted-foreground font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{user.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                  <td className="py-3 px-4">
                    <Badge variant={user.role === "Admin" ? "default" : "secondary"} className={user.role === "Admin" ? "gold-gradient text-primary-foreground border-0" : ""}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      user.status === "Active" ? "status-success" : "status-failed"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{user.lastLogin}</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Audit Logs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <h2 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-primary" /> Audit Logs
        </h2>
        <div className="space-y-2">
          {auditLogs.map((log) => (
            <div key={log.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/30 transition-colors">
              {levelIcon(log.level)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-foreground">{log.action}</span>
                  <span className="text-xs text-muted-foreground">by {log.user}</span>
                </div>
                <p className="text-xs text-muted-foreground">{log.details}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{log.timestamp}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
