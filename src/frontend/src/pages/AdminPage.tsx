import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  RefreshCw,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { QuizResponse } from "../backend";
import {
  useGetAllResponses,
  useGetTotalResponses,
  useGetUniqueStudentCount,
} from "../hooks/useQueries";

interface AdminPageProps {
  onBack: () => void;
}

const ADMIN_PASSWORD = "MyCareer@Admin2024";

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError("Incorrect password. Access denied.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 neon-glow-pink"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.27 350), oklch(0.52 0.28 295))",
            }}
          >
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-foreground mb-1">
            Admin Access
          </h2>
          <p className="text-muted-foreground text-sm">
            Enter your admin password to continue
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Input
              data-ocid="admin.input"
              type={showPassword ? "text" : "password"}
              placeholder="Admin password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="bg-muted/50 border-border/50 text-foreground h-12 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {error && (
            <p
              data-ocid="admin.error_state"
              className="text-destructive text-sm text-center"
            >
              {error}
            </p>
          )}

          <button
            type="button"
            data-ocid="admin.submit_button"
            onClick={handleLogin}
            className="w-full py-3 rounded-2xl font-heading font-bold text-base text-white transition-all hover:scale-[1.02] active:scale-[0.98] neon-glow-pink"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.27 350), oklch(0.52 0.28 295))",
            }}
          >
            Access Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ResponseRow({
  response,
  index,
}: { response: QuizResponse; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { studentInfo, answers, submittedAt } = response;

  const submittedDate = new Date(
    Number(submittedAt / 1_000_000n),
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const byCategory: Record<string, typeof answers> = {};
  for (const answer of answers) {
    if (!byCategory[answer.categoryName]) byCategory[answer.categoryName] = [];
    byCategory[answer.categoryName].push(answer);
  }

  return (
    <motion.div
      data-ocid={`admin.item.${index}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5) }}
      className="glass-card rounded-2xl border border-border/30 overflow-hidden"
    >
      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm bg-neon-purple/20 text-neon-purple border border-neon-purple/30 shrink-0">
            {index}
          </div>
          <div className="min-w-0">
            <p className="font-heading font-bold text-foreground truncate">
              {studentInfo.name}
            </p>
            <p className="text-muted-foreground text-xs">
              Age {studentInfo.age.toString()} · {studentInfo.grade} ·{" "}
              {studentInfo.stream}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-xs text-neon-cyan">
                {studentInfo.email}
              </span>
              {studentInfo.whatsapp && (
                <span className="text-xs text-neon-lime">
                  {studentInfo.whatsapp}
                </span>
              )}
              <span className="text-xs text-muted-foreground">
                📅 {submittedDate}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-muted-foreground">Answered</p>
            <p className="font-heading font-bold text-neon-pink text-sm">
              {answers.length} / 60
            </p>
          </div>
          <button
            type="button"
            data-ocid="admin.toggle"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border/40 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border transition-all text-xs font-semibold"
          >
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
            {expanded ? "Hide" : "View"} Answers
          </button>
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-border/30 p-4 space-y-4"
        >
          {Object.entries(byCategory).map(([catName, catAnswers]) => (
            <div key={catName}>
              <h4 className="font-heading font-bold text-sm text-neon-purple mb-2">
                {catName}
              </h4>
              <div className="space-y-2">
                {catAnswers.map((a) => (
                  <div key={a.question} className="rounded-xl bg-muted/20 p-3">
                    <p className="text-foreground/80 text-xs mb-1">
                      {a.question}
                    </p>
                    <p className="text-neon-cyan text-xs font-semibold">
                      {a.selectedAnswer ?? (
                        <span className="text-muted-foreground italic">
                          Skipped
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {answers.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-4">
              All questions were skipped.
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export function AdminPage({ onBack }: AdminPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: responses, isLoading, error, refetch } = useGetAllResponses();
  const { data: total } = useGetTotalResponses();
  const { data: uniqueCount } = useGetUniqueStudentCount();

  if (!isAuthenticated) {
    return (
      <div className="relative">
        <button
          type="button"
          data-ocid="admin.link"
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm z-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <AdminLogin onLogin={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              data-ocid="admin.link"
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div>
              <h1 className="font-heading font-extrabold text-2xl text-foreground">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground text-xs">
                MY CAREER — Response Management
              </p>
            </div>
          </div>
          <button
            type="button"
            data-ocid="admin.button"
            onClick={() => refetch()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/40 bg-muted/20 text-muted-foreground hover:text-foreground transition-all text-sm"
          >
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-2xl p-5 border border-neon-purple/30">
            <Users className="w-6 h-6 text-neon-purple mb-2" />
            <p className="font-heading font-extrabold text-3xl text-foreground">
              {total?.toString() ?? "..."}
            </p>
            <p className="text-muted-foreground text-xs">Total Plays</p>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-neon-cyan/30">
            <div className="text-2xl mb-2">👤</div>
            <p className="font-heading font-extrabold text-3xl text-foreground">
              {uniqueCount?.toString() ?? "..."}
            </p>
            <p className="text-muted-foreground text-xs">Unique Students</p>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-neon-pink/30 col-span-2 sm:col-span-1">
            <div className="text-2xl mb-2">📊</div>
            <p className="font-heading font-extrabold text-3xl text-foreground">
              {responses?.length ?? "..."}
            </p>
            <p className="text-muted-foreground text-xs">Loaded Records</p>
          </div>
        </div>

        {/* Responses */}
        {isLoading && (
          <div
            data-ocid="admin.loading_state"
            className="flex flex-col items-center justify-center py-16 gap-4"
          >
            <Loader2 className="w-10 h-10 animate-spin text-neon-purple" />
            <p className="text-muted-foreground">Loading responses...</p>
          </div>
        )}

        {error && (
          <div
            data-ocid="admin.error_state"
            className="glass-card rounded-2xl p-6 border border-destructive/40 text-center"
          >
            <p className="text-destructive font-semibold">
              Failed to load responses.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="text-neon-cyan text-sm mt-2 hover:underline"
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && !error && responses && responses.length === 0 && (
          <div
            data-ocid="admin.empty_state"
            className="glass-card rounded-2xl p-12 text-center border border-border/30"
          >
            <div className="text-5xl mb-4">📭</div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              No Submissions Yet
            </h3>
            <p className="text-muted-foreground">
              Share the quiz link with students to start collecting responses.
            </p>
          </div>
        )}

        {!isLoading && responses && responses.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-bold text-lg text-foreground">
                All Submissions
              </h2>
              <span className="text-muted-foreground text-sm">
                {responses.length} entries
              </span>
            </div>
            {responses.map((response, i) => (
              <ResponseRow
                key={`${response.studentInfo.email}-${i}`}
                response={response}
                index={i + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
