import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { accounts } from "@/data/mockData";

export default function Transfer() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [fromAccount, setFromAccount] = useState(accounts[0].id);
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 1500);
  };

  const selectedFrom = accounts.find((a) => a.id === fromAccount);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-2xl font-bold text-foreground">Transfer Funds</h1>
        <p className="text-muted-foreground text-sm mt-1">Send money between accounts or to others</p>
      </motion.div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              step >= s ? "gold-gradient text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}>
              {step > s ? "✓" : s}
            </div>
            {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? "bg-primary" : "bg-border"} transition-colors`} />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-card p-6 space-y-5">
            <div className="space-y-2">
              <Label className="text-foreground">From Account</Label>
              <select
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
                className="w-full h-11 rounded-lg bg-secondary/50 border border-border px-3 text-foreground outline-none focus:border-primary"
              >
                {accounts.map((a) => (
                  <option key={a.id} value={a.id}>{a.name} — {a.currency} {a.balance}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Recipient Account Number</Label>
              <Input
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                placeholder="Enter account number or IBAN"
                className="bg-secondary/50 border-border focus:border-primary h-11"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Amount (USD)</Label>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                type="number"
                className="bg-secondary/50 border-border focus:border-primary h-11 text-xl font-heading font-bold"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Note (optional)</Label>
              <Input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note..."
                className="bg-secondary/50 border-border focus:border-primary h-11"
              />
            </div>
            <Button
              onClick={() => setStep(2)}
              disabled={!toAccount || !amount}
              className="w-full h-11 gold-gradient text-primary-foreground font-semibold hover:opacity-90"
            >
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-card p-6 space-y-5">
            <h3 className="font-heading text-lg font-semibold text-foreground">Confirm Transfer</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground text-sm">From</span>
                <span className="text-foreground text-sm font-medium">{selectedFrom?.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground text-sm">To</span>
                <span className="text-foreground text-sm font-medium">{toAccount}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground text-sm">Amount</span>
                <span className="text-foreground text-lg font-heading font-bold gold-text">${amount}</span>
              </div>
              {note && (
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Note</span>
                  <span className="text-foreground text-sm">{note}</span>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 border-border hover:border-primary/50">
                Back
              </Button>
              <Button
                onClick={handleConfirm}
                disabled={isProcessing}
                className="flex-1 gold-gradient text-primary-foreground font-semibold hover:opacity-90"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Confirm
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Transfer Successful!</h3>
            <p className="text-muted-foreground text-sm">
              <span className="gold-text font-bold text-lg">${amount}</span> has been sent successfully.
            </p>
            <Button
              onClick={() => { setStep(1); setAmount(""); setToAccount(""); setNote(""); }}
              className="gold-gradient text-primary-foreground hover:opacity-90"
            >
              Make Another Transfer
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
