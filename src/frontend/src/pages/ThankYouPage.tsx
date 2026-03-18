import { CheckCircle, MessageCircle, RotateCcw, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface ThankYouPageProps {
  onRestart: () => void;
}

export function ThankYouPage({ onRestart }: ThankYouPageProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl bg-neon-purple pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full opacity-15 blur-3xl bg-neon-cyan pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl bg-neon-lime pointer-events-none" />

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.75)" }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full max-w-sm rounded-3xl p-7 text-center border border-neon-cyan/40"
              style={{
                background: "oklch(0.13 0.02 260)",
                boxShadow: "0 0 40px oklch(0.55 0.18 170 / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-5xl mb-4">💬</div>

              <h2 className="font-heading font-extrabold text-xl text-neon-cyan mb-4">
                Get Your Career Report
              </h2>

              <p className="text-foreground/90 text-sm leading-relaxed mb-3">
                To Get your career report, please WhatsApp on
              </p>
              <p className="font-heading font-bold text-2xl text-neon-lime mb-4">
                +91 98256 86709
              </p>

              <div className="glass-card rounded-2xl p-4 mb-5 border border-neon-pink/30">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  ⭐ This service is{" "}
                  <strong className="text-neon-pink">Premium</strong> and you
                  need to pay{" "}
                  <strong className="text-neon-lime">Rs. 5000</strong> for the
                  Results.
                </p>
              </div>

              <p className="text-foreground/70 text-sm mb-6">
                Mr. Nilesh would guide you with your Results further.
              </p>

              <p className="text-muted-foreground text-xs font-semibold tracking-wide">
                Thank You 🙏
              </p>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="mt-5 w-full py-3 rounded-2xl font-heading font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-xl text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-purple"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
          }}
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-3">
            Amazing! You&#39;re All Done! 🎉
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Your responses have been recorded successfully. Our career experts
            are now analyzing your unique profile to create your personalized
            Career Blueprint.
          </p>
        </motion.div>

        {/* Highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-3xl p-6 mb-6 border border-neon-cyan/30"
        >
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="font-heading font-bold text-xl text-neon-cyan mb-2">
            Your Career Blueprint is Being Prepared
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed mb-4">
            Our career experts are analyzing your complete profile to create
            your personalized Career Blueprint — with career recommendations,
            mentorship tips, and a step-by-step action plan.
          </p>

          <button
            type="button"
            data-ocid="thankyou.primary_button"
            onClick={() => setShowPopup(true)}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] neon-glow-cyan"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.18 170), oklch(0.65 0.18 200))",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Get Your Career Report on WhatsApp
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <div className="glass-card rounded-2xl p-4 border border-neon-pink/20">
            <p className="text-foreground/80 text-sm">
              ✨{" "}
              <strong className="text-neon-pink">
                Your results are being prepared personally for you.
              </strong>{" "}
              You will be contacted soon by Mr. Nilesh Sangtani.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-4 border border-neon-lime/20">
            <p className="text-muted-foreground text-xs">
              🆓{" "}
              <span className="text-neon-lime font-semibold">
                Playing this quiz is FREE.
              </span>{" "}
              Your personalized Career Blueprint report is a premium service
              designed to give you a real competitive edge in your career
              journey.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              {
                num: "60",
                label: "Questions Answered",
                color: "text-neon-purple",
              },
              {
                num: "6",
                label: "Categories Covered",
                color: "text-neon-pink",
              },
              { num: "1", label: "Unique Blueprint", color: "text-neon-cyan" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                className="glass-card rounded-2xl p-3 text-center border border-border/30"
              >
                <div
                  className={`font-heading font-extrabold text-2xl ${stat.color}`}
                >
                  {stat.num}
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8"
        >
          <button
            type="button"
            data-ocid="thankyou.secondary_button"
            onClick={onRestart}
            className="flex items-center gap-2 mx-auto text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Take Quiz Again
          </button>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 text-xs text-muted-foreground"
        >
          <span className="font-semibold text-foreground/60">MY CAREER</span> —
          Created by{" "}
          <span className="text-neon-purple font-semibold">
            Mr. Nilesh Sangtani
          </span>
          <br />
          <span>
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-neon-cyan hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </motion.footer>
      </div>
    </div>
  );
}
