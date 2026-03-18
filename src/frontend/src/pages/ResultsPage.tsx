import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";
import type { QuizAnswer, StudentInfo } from "../backend";

interface ResultsPageProps {
  studentInfo: StudentInfo;
  answers: QuizAnswer[];
  onRestart: () => void;
}

interface CareerCluster {
  name: string;
  emoji: string;
  keywords: string[];
  description: string;
  paths: string[];
  degree: string;
  color: string;
  glowClass: string;
}

const CAREER_CLUSTERS: CareerCluster[] = [
  {
    name: "Technology & Engineering",
    emoji: "💻",
    keywords: [
      "Mathematics",
      "Technology",
      "Coding",
      "AI",
      "Machine Learning",
      "computers",
      "programming",
      "Logical-Mathematical",
      "app development",
      "gadgets",
      "Artificial Intelligence",
      "data",
      "Technical",
      "engineer",
      "software",
      "robotics",
      "algorithm",
    ],
    description:
      "You have a natural affinity for problem-solving, logic, and building digital systems. Your analytical mindset and love for technology set you apart.",
    paths: [
      "Software Engineer",
      "Data Scientist",
      "AI/ML Engineer",
      "Cybersecurity Analyst",
      "Robotics Engineer",
    ],
    degree: "B.Tech / B.E. in Computer Science, Electronics, or IT",
    color: "oklch(0.62 0.28 295)",
    glowClass: "neon-glow-purple",
  },
  {
    name: "Medicine & Healthcare",
    emoji: "🩺",
    keywords: [
      "Science",
      "Medicine",
      "biology",
      "Medical",
      "health",
      "hospital",
      "Healthcare",
      "Biotechnology",
      "doctor",
      "nurse",
      "pharma",
      "anatomy",
      "patient",
      "healing",
    ],
    description:
      "Your profile shows strong empathy and interest in sciences, making healthcare a natural fit. You are driven by the desire to heal and support others.",
    paths: [
      "Doctor (MBBS)",
      "Biomedical Researcher",
      "Pharmacist",
      "Physiotherapist",
      "Nutritionist",
    ],
    degree: "MBBS, B.Pharm, B.Sc Nursing, BAMS",
    color: "oklch(0.65 0.22 170)",
    glowClass: "neon-glow-cyan",
  },
  {
    name: "Business & Entrepreneurship",
    emoji: "📈",
    keywords: [
      "Commerce",
      "Accounts",
      "Business",
      "entrepreneurship",
      "selling",
      "startup",
      "financial",
      "MBA",
      "marketing",
      "Sales",
      "trading",
      "profit",
      "investment",
      "economy",
      "management",
    ],
    description:
      "You have the mindset of a builder — strategic, ambitious, and driven by results. You thrive in high-stakes environments and love turning ideas into ventures.",
    paths: [
      "Entrepreneur",
      "Business Analyst",
      "Marketing Manager",
      "Investment Banker",
      "Product Manager",
    ],
    degree: "BBA / B.Com / MBA",
    color: "oklch(0.78 0.18 85)",
    glowClass: "neon-glow-lime",
  },
  {
    name: "Creative Arts & Design",
    emoji: "🎨",
    keywords: [
      "Arts",
      "Drawing",
      "Creative",
      "Design",
      "drawing",
      "painting",
      "Visual-Spatial",
      "Graphic design",
      "artwork",
      "creative software",
      "designing",
      "creative studio",
      "illustration",
      "aesthetic",
    ],
    description:
      "Your visual intelligence and creative instincts make you a natural in the design world. You see beauty where others see blank space.",
    paths: [
      "Graphic Designer",
      "UX/UI Designer",
      "Architect",
      "Fashion Designer",
      "Art Director",
    ],
    degree: "B.Des, B.Arch, Fine Arts, NID/NIFT",
    color: "oklch(0.65 0.27 350)",
    glowClass: "neon-glow-pink",
  },
  {
    name: "Media, Film & Content Creation",
    emoji: "🎬",
    keywords: [
      "writing",
      "storytelling",
      "film",
      "video",
      "content",
      "YouTube",
      "social media",
      "influencer",
      "performing",
      "Entertainment",
      "journalism",
      "blogger",
      "script",
      "camera",
      "broadcast",
    ],
    description:
      "You are a natural storyteller with a voice that can captivate audiences. Your creativity and communication skills are your greatest assets.",
    paths: [
      "Content Creator",
      "Film Director",
      "Journalist",
      "Copywriter",
      "Social Media Manager",
    ],
    degree: "Mass Communication, Film Studies, Journalism, BA English",
    color: "oklch(0.72 0.20 55)",
    glowClass: "neon-glow-lime",
  },
  {
    name: "Law & Civil Services",
    emoji: "⚖️",
    keywords: [
      "Law",
      "justice",
      "Civil",
      "IAS",
      "IPS",
      "Military",
      "serve the nation",
      "History",
      "Geography",
      "government",
      "policy",
      "constitution",
      "rights",
      "order",
      "defense",
    ],
    description:
      "You have a strong sense of justice and the resilience needed for public service. Your leadership and conviction can drive real change in society.",
    paths: ["IAS/IPS Officer", "Lawyer", "Judge", "Policy Analyst", "Diplomat"],
    degree: "BA LLB, UPSC preparation, Political Science",
    color: "oklch(0.60 0.25 240)",
    glowClass: "neon-glow-purple",
  },
  {
    name: "Teaching & Education",
    emoji: "📚",
    keywords: [
      "Teaching",
      "education",
      "teacher",
      "mentor",
      "inspire",
      "EdTech",
      "inspire the next generation",
      "knowledge",
      "student",
      "classroom",
      "curriculum",
    ],
    description:
      "You have the rare gift of making others understand and inspiring them to grow. Your patience and passion for knowledge are transformative.",
    paths: [
      "School Teacher",
      "Professor",
      "EdTech Founder",
      "Corporate Trainer",
      "Career Counselor",
    ],
    degree: "B.Ed, BA/B.Sc + B.Ed, MA Education",
    color: "oklch(0.68 0.22 170)",
    glowClass: "neon-glow-cyan",
  },
  {
    name: "Social Work & Psychology",
    emoji: "🧠",
    keywords: [
      "Social work",
      "psychology",
      "Caring",
      "empathy",
      "helping",
      "NGO",
      "social awareness",
      "people skills",
      "Interpersonal",
      "counseling",
      "community",
      "welfare",
      "mental health",
    ],
    description:
      "Your deep empathy and people skills can genuinely transform lives. You feel called to support, listen, and uplift those who need it most.",
    paths: [
      "Psychologist",
      "Social Worker",
      "HR Manager",
      "NGO Director",
      "Counselor",
    ],
    degree: "BA/MA Psychology, MSW, BSW",
    color: "oklch(0.65 0.27 350)",
    glowClass: "neon-glow-pink",
  },
  {
    name: "Research & Science",
    emoji: "🔬",
    keywords: [
      "research",
      "experiments",
      "Science",
      "space",
      "inventing",
      "Naturalistic",
      "Research lab",
      "Space",
      "Advanced Science",
      "physics",
      "chemistry",
      "lab",
      "discovery",
      "innovation",
    ],
    description:
      "You are driven by curiosity and the desire to discover what others haven't yet found. Every question is a door waiting to be opened.",
    paths: [
      "Research Scientist",
      "Astronomer",
      "Biotechnologist",
      "Environmental Scientist",
      "Professor",
    ],
    degree: "B.Sc / M.Sc / PhD in chosen science",
    color: "oklch(0.62 0.28 295)",
    glowClass: "neon-glow-purple",
  },
  {
    name: "Sports & Fitness",
    emoji: "🏆",
    keywords: [
      "Sports",
      "Physical Education",
      "Bodily-Kinesthetic",
      "fitness",
      "sports coaching",
      "dance",
      "athlete",
      "gym",
      "training",
      "competition",
      "stamina",
      "outdoor",
    ],
    description:
      "Your physical energy and competitive spirit are your superpowers. You thrive under pressure and inspire others through discipline and grit.",
    paths: [
      "Professional Athlete",
      "Sports Coach",
      "Fitness Trainer",
      "Sports Journalist",
      "Physiotherapist",
    ],
    degree: "B.P.Ed, Sports Management, NIS Coaching",
    color: "oklch(0.78 0.18 85)",
    glowClass: "neon-glow-lime",
  },
  {
    name: "Music & Performing Arts",
    emoji: "🎵",
    keywords: [
      "Music",
      "musical instrument",
      "dancing",
      "acting",
      "singing",
      "performing arts",
      "theatre",
      "stage",
      "concert",
      "rhythm",
      "melody",
      "performance",
      "artist",
    ],
    description:
      "You have a soulful connection to expression through sound and performance. Your artistry moves hearts and creates experiences people never forget.",
    paths: [
      "Singer/Musician",
      "Music Composer",
      "Actor",
      "Choreographer",
      "Music Teacher",
    ],
    degree: "B.Mus, Performing Arts, Film & Theatre",
    color: "oklch(0.65 0.27 350)",
    glowClass: "neon-glow-pink",
  },
];

const CATEGORY_STRENGTH_LABELS: Record<string, string> = {
  "Education & Academics": "Academic Foundation",
  "Talents & Abilities": "Natural Talents",
  "Skills & Interests": "Core Skills",
  "Personality & Mindset": "Personality Traits",
  "Family & Background": "Background Influence",
  "Future Vision": "Future Clarity",
};

function computeCareerScores(answers: QuizAnswer[]) {
  const scores: Record<string, number> = {};
  for (const cluster of CAREER_CLUSTERS) {
    scores[cluster.name] = 0;
  }

  for (const answer of answers) {
    const text =
      `${answer.question} ${answer.selectedAnswer ?? ""}`.toLowerCase();
    for (const cluster of CAREER_CLUSTERS) {
      for (const keyword of cluster.keywords) {
        if (text.includes(keyword.toLowerCase())) {
          scores[cluster.name] += 1;
        }
      }
    }
  }

  // Find max score for normalization
  const maxScore = Math.max(...Object.values(scores), 1);

  return CAREER_CLUSTERS.map((cluster) => ({
    cluster,
    score: scores[cluster.name],
    percent: Math.min(100, Math.round((scores[cluster.name] / maxScore) * 100)),
  })).sort((a, b) => b.score - a.score);
}

function detectStrengths(answers: QuizAnswer[]): string[] {
  const catCounts: Record<string, number> = {};
  for (const a of answers) {
    if (a.selectedAnswer) {
      catCounts[a.categoryName] = (catCounts[a.categoryName] ?? 0) + 1;
    }
  }
  return Object.entries(catCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([cat]) => CATEGORY_STRENGTH_LABELS[cat] ?? cat);
}

const RANK_BADGES = [
  {
    label: "#1 Best Match",
    gradient:
      "linear-gradient(135deg, oklch(0.75 0.22 85), oklch(0.65 0.25 60))",
    text: "text-amber-300",
  },
  {
    label: "#2 Strong Match",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.08 220), oklch(0.65 0.10 200))",
    text: "text-slate-300",
  },
  {
    label: "#3 Good Match",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 45), oklch(0.58 0.22 35))",
    text: "text-orange-300",
  },
];

export function ResultsPage({
  studentInfo,
  answers,
  onRestart,
}: ResultsPageProps) {
  const scored = useMemo(() => computeCareerScores(answers), [answers]);
  const top3 = scored.slice(0, 3);
  const strengths = useMemo(() => detectStrengths(answers), [answers]);
  const firstName = studentInfo.name.split(" ")[0];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(0.62 0.28 295)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(0.65 0.27 350)" }}
        />
        <div
          className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: "oklch(0.65 0.22 170)" }}
        />
      </div>

      <div className="relative z-10 px-4 py-10 max-w-3xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 text-neon-purple text-sm font-semibold mb-4"
          >
            <span>✨</span> Your Career Report is Ready!
          </motion.div>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-3">
            Hey {firstName},
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.62 0.28 295), oklch(0.65 0.27 350), oklch(0.78 0.18 200))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Here Are Your Top Careers!
            </span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Based on your {answers.length} answers across 6 life categories, our
            AI has matched you with the most suitable career paths.
          </p>
        </motion.div>

        {/* Top 3 Career Cards */}
        <div className="space-y-6 mb-10">
          {top3.map((item, idx) => (
            <motion.div
              key={item.cluster.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.3 + idx * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              data-ocid={`results.card.${idx + 1}`}
            >
              <div
                className="glass-card rounded-3xl overflow-hidden border"
                style={{ borderColor: `${item.cluster.color}40` }}
              >
                {/* Card Header */}
                <div
                  className="relative p-6 pb-4"
                  style={{
                    background: `linear-gradient(135deg, ${item.cluster.color}15, transparent)`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                        style={{
                          background: `${item.cluster.color}20`,
                          border: `1px solid ${item.cluster.color}40`,
                        }}
                      >
                        {item.cluster.emoji}
                      </div>
                      <div>
                        <h2 className="font-heading font-extrabold text-xl md:text-2xl text-foreground">
                          {item.cluster.name}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {item.cluster.degree}
                        </p>
                      </div>
                    </div>
                    <div
                      className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold text-white"
                      style={{ background: RANK_BADGES[idx].gradient }}
                    >
                      {RANK_BADGES[idx].label}
                    </div>
                  </div>

                  {/* Match percentage bar */}
                  <div className="mb-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">
                        Career Match
                      </span>
                      <span
                        className="font-bold"
                        style={{ color: item.cluster.color }}
                      >
                        {item.percent}%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-muted/30 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${item.cluster.color}, ${item.cluster.color}99)`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{
                          delay: 0.5 + idx * 0.2,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-6 pb-6 space-y-4">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {item.cluster.description}
                  </p>

                  {/* Key Strengths */}
                  {strengths.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Key Strengths Detected
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {strengths.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                            style={{
                              background: `${item.cluster.color}15`,
                              color: item.cluster.color,
                              border: `1px solid ${item.cluster.color}30`,
                            }}
                          >
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Career Paths */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Career Paths
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.cluster.paths.map((path, pi) => (
                        <div
                          key={path}
                          className="flex items-center gap-2 text-sm text-foreground/85"
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                            style={{
                              background: `${item.cluster.color}20`,
                              color: item.cluster.color,
                            }}
                          >
                            {pi + 1}
                          </span>
                          {path}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Degree */}
                  <div
                    className="rounded-xl p-3 flex items-center gap-3"
                    style={{
                      background: `${item.cluster.color}10`,
                      border: `1px solid ${item.cluster.color}25`,
                    }}
                  >
                    <span className="text-xl">🎓</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Recommended Degree
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {item.cluster.degree}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="glass-card rounded-3xl p-6 border border-neon-cyan/30 mb-8"
          data-ocid="results.section"
        >
          <h3 className="font-heading font-extrabold text-xl text-foreground mb-4">
            🚀 What's Next?
          </h3>
          <div className="space-y-4">
            {[
              {
                emoji: "🔍",
                title: "Research Your Top Career",
                desc: `Dive deep into ${top3[0]?.cluster.name ?? "your top match"} — explore the daily work, salary ranges, and growth opportunities online.`,
              },
              {
                emoji: "📞",
                title: "Talk to a Professional",
                desc: "Find someone already working in your top career and have a 15-minute conversation. Real insights beat any article.",
              },
              {
                emoji: "📝",
                title: "Plan Your Next Step",
                desc: `Focus on the right subjects, entrance exams, and skills for ${top3[0]?.cluster.degree ?? "your chosen degree path"}.`,
              },
            ].map((tip, _i) => (
              <div key={tip.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-lg shrink-0">
                  {tip.emoji}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {tip.title}
                  </p>
                  <p className="text-muted-foreground text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Play Again Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Want to explore different answers and see how your results change?
          </p>
          <Button
            data-ocid="results.primary_button"
            onClick={onRestart}
            className="px-8 py-3 rounded-2xl font-heading font-bold text-base text-white neon-glow-purple h-auto"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
            }}
          >
            🔄 Play Again
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-muted-foreground text-xs space-y-1 pb-6"
        >
          <p className="font-heading font-bold text-sm text-foreground/60">
            MY CAREER
          </p>
          <p>
            Created by{" "}
            <span className="text-neon-purple">Mr. Nilesh Sangtani</span>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
