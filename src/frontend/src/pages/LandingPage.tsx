import { ArrowRight, Lock, Star, Target, Zap } from "lucide-react";
import { motion } from "motion/react";

interface LandingPageProps {
  onStart: () => void;
  onAdmin: () => void;
}

export function LandingPage({ onStart, onAdmin }: LandingPageProps) {
  const stats = [
    { icon: Star, label: "60 Questions", color: "text-neon-purple" },
    { icon: Zap, label: "6 Categories", color: "text-neon-pink" },
    { icon: Target, label: "100% Free", color: "text-neon-cyan" },
  ];

  return (
    <div className="min-h-screen stars-bg flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl bg-neon-purple pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl bg-neon-pink pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl bg-neon-cyan pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 text-neon-purple text-sm font-semibold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="animate-pulse-glow">✨</span>
          Career Discovery Quiz
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-heading font-extrabold text-7xl md:text-9xl tracking-tight mb-4 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="text-foreground">MY</span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.28 295), oklch(0.75 0.27 350), oklch(0.85 0.18 200))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CAREER
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-foreground/90 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover Your Perfect Career Path
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A smart quiz designed by career experts to help you find your true
          calling based on your talents, skills, and dreams.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-sm font-semibold text-foreground/80">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            type="button"
            data-ocid="landing.primary_button"
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-heading font-bold text-xl text-white transition-all duration-300 hover:scale-105 active:scale-95 neon-glow-purple"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
            }}
          >
            Start Your Journey
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Info cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {[
            {
              emoji: "🎯",
              title: "Personalized",
              desc: "Tailored to YOUR unique strengths and interests",
            },
            {
              emoji: "💡",
              title: "Expert Analysis",
              desc: "Career experts analyze your complete profile",
            },
            {
              emoji: "🏆",
              title: "Premium Report",
              desc: "Get your detailed Career Blueprint report",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-5 text-left hover:border-neon-purple/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{card.emoji}</div>
              <div className="font-heading font-bold text-foreground mb-1">
                {card.title}
              </div>
              <div className="text-sm text-muted-foreground">{card.desc}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-0 left-0 right-0 py-4 px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="mb-2 sm:mb-0">
          <span className="font-semibold text-foreground/70">MY CAREER</span> —
          Created by{" "}
          <span className="text-neon-purple font-semibold">
            Mr. Nilesh Sangtani
          </span>
        </div>
        <div className="flex items-center gap-4">
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
          <button
            type="button"
            data-ocid="landing.link"
            onClick={onAdmin}
            className="flex items-center gap-1 text-muted-foreground/50 hover:text-muted-foreground transition-colors text-xs"
          >
            <Lock className="w-3 h-3" />
            Admin
          </button>
        </div>
      </motion.footer>
    </div>
  );
}
