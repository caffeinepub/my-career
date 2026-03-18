import { ChevronRight, Loader2, SkipForward } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { QuizAnswer, StudentInfo } from "../backend";
import { TOTAL_QUESTIONS, categories } from "../data/questions";
import { useActor } from "../hooks/useActor";

interface QuizPageProps {
  studentInfo: StudentInfo;
  onComplete: (answers: QuizAnswer[]) => void;
}

const CATEGORY_COLORS = [
  {
    border: "border-neon-purple/40",
    text: "text-neon-purple",
    bg: "bg-neon-purple/10",
    btnActive: "border-neon-purple bg-neon-purple/20 text-foreground",
    labelBg: "bg-neon-purple/10",
    labelText: "text-neon-purple",
  },
  {
    border: "border-neon-pink/40",
    text: "text-neon-pink",
    bg: "bg-neon-pink/10",
    btnActive: "border-neon-pink bg-neon-pink/20 text-foreground",
    labelBg: "bg-neon-pink/10",
    labelText: "text-neon-pink",
  },
  {
    border: "border-neon-cyan/40",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    btnActive: "border-neon-cyan bg-neon-cyan/20 text-foreground",
    labelBg: "bg-neon-cyan/10",
    labelText: "text-neon-cyan",
  },
  {
    border: "border-neon-lime/40",
    text: "text-neon-lime",
    bg: "bg-neon-lime/10",
    btnActive: "border-neon-lime bg-neon-lime/20 text-foreground",
    labelBg: "bg-neon-lime/10",
    labelText: "text-neon-lime",
  },
  {
    border: "border-neon-pink/40",
    text: "text-neon-pink",
    bg: "bg-neon-pink/10",
    btnActive: "border-neon-pink bg-neon-pink/20 text-foreground",
    labelBg: "bg-neon-pink/10",
    labelText: "text-neon-pink",
  },
  {
    border: "border-neon-cyan/40",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    btnActive: "border-neon-cyan bg-neon-cyan/20 text-foreground",
    labelBg: "bg-neon-cyan/10",
    labelText: "text-neon-cyan",
  },
];

export function QuizPage({ studentInfo, onComplete }: QuizPageProps) {
  const { actor, isFetching } = useActor();
  const [catIdx, setCatIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [collectedAnswers, setCollectedAnswers] = useState<QuizAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentCategory = categories[catIdx];
  const currentQuestion = currentCategory.questions[qIdx];
  const totalAnswered = catIdx * 10 + qIdx;
  const progressPercent = Math.round((totalAnswered / TOTAL_QUESTIONS) * 100);
  const isLastQuestion =
    catIdx === categories.length - 1 &&
    qIdx === currentCategory.questions.length - 1;
  const colors = CATEGORY_COLORS[catIdx];

  const advance = (newAnswers: QuizAnswer[]) => {
    setSelectedAnswer(null);
    if (isLastQuestion) {
      handleSubmit(newAnswers);
    } else if (qIdx === currentCategory.questions.length - 1) {
      setCatIdx(catIdx + 1);
      setQIdx(0);
    } else {
      setQIdx(qIdx + 1);
    }
  };

  const handleNext = () => {
    const newAnswers = selectedAnswer
      ? [
          ...collectedAnswers,
          {
            categoryName: currentCategory.name,
            question: currentQuestion.text,
            selectedAnswer,
          },
        ]
      : [...collectedAnswers];
    setCollectedAnswers(newAnswers);
    advance(newAnswers);
  };

  const handleSkip = () => {
    advance([...collectedAnswers]);
  };

  const handleSubmit = async (answers: QuizAnswer[]) => {
    setIsSubmitting(true);
    try {
      if (actor && !isFetching) {
        await actor.submitResponse(
          { ...studentInfo, age: BigInt(studentInfo.age) },
          answers,
        );
      }
    } catch (e) {
      console.error("Submission error (results still shown):", e);
    } finally {
      // Always show results regardless of backend success
      onComplete(answers);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-6 relative">
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.15 0.05 295 / 0.3), transparent)",
        }}
      />

      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${colors.bg} border ${colors.border}`}
            >
              {currentCategory.emoji}
            </div>
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}
              >
                Category {catIdx + 1} of {categories.length}
              </p>
              <p className="text-foreground/80 text-sm font-medium">
                {currentCategory.name}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-foreground font-heading font-bold text-lg">
              {totalAnswered + 1}
              <span className="text-muted-foreground font-normal text-sm">
                /{TOTAL_QUESTIONS}
              </span>
            </p>
            <p className="text-muted-foreground text-xs">
              Q{qIdx + 1} of {currentCategory.questions.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>{progressPercent}% Complete</span>
            <span>{TOTAL_QUESTIONS - totalAnswered} questions left</span>
          </div>
          <div className="h-3 rounded-full bg-muted/40 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.62 0.28 295), oklch(0.65 0.27 350), oklch(0.78 0.18 200))",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          {/* Category dots */}
          <div className="flex justify-between mt-2">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className={`flex-1 h-1 rounded-full mx-0.5 transition-all duration-500 ${
                  i < catIdx
                    ? "bg-neon-purple/70"
                    : i === catIdx
                      ? "bg-neon-pink/70"
                      : "bg-muted/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${catIdx}-${qIdx}`}
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`glass-card rounded-3xl p-6 md:p-8 border ${colors.border} mb-6`}
            >
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-6 leading-snug">
                {currentQuestion.text}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((option, i) => (
                  <motion.button
                    type="button"
                    data-ocid="quiz.toggle"
                    key={option}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() =>
                      setSelectedAnswer(
                        selectedAnswer === option ? null : option,
                      )
                    }
                    className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      selectedAnswer === option
                        ? colors.btnActive
                        : "border-border/40 bg-muted/20 text-foreground/80 hover:border-border hover:bg-muted/40"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mr-2 ${
                        selectedAnswer === option
                          ? `${colors.labelBg} ${colors.labelText}`
                          : "bg-muted/40 text-muted-foreground"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            data-ocid="quiz.secondary_button"
            onClick={handleSkip}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-border/40 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200 text-sm font-semibold disabled:opacity-50"
          >
            <SkipForward className="w-4 h-4" />
            Skip
          </button>

          <button
            type="button"
            data-ocid="quiz.primary_button"
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-3 py-3 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed neon-glow-purple"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Saving...
              </>
            ) : isLastQuestion ? (
              <>Submit &amp; See Results 🚀</>
            ) : (
              <>
                Next Question <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Loading overlay */}
        {isSubmitting && (
          <motion.div
            data-ocid="quiz.loading_state"
            className="fixed inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="glass-card rounded-3xl p-10 text-center max-w-sm">
              <Loader2 className="w-12 h-12 animate-spin text-neon-purple mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Analyzing Your Answers
              </h3>
              <p className="text-muted-foreground text-sm">
                Computing your career matches...
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
