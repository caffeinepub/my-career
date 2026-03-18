import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import type { QuizAnswer, StudentInfo } from "./backend";
import { AdminPage } from "./pages/AdminPage";
import { LandingPage } from "./pages/LandingPage";
import { QuizPage } from "./pages/QuizPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ResultsPage } from "./pages/ResultsPage";

type Page = "landing" | "register" | "quiz" | "results" | "admin";

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);

  const handleRegisterSubmit = (info: StudentInfo) => {
    setStudentInfo(info);
    setPage("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    setQuizAnswers(answers);
    setPage("results");
  };

  const handleRestart = () => {
    setStudentInfo(null);
    setQuizAnswers([]);
    setPage("landing");
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.14 0.04 280)",
            border: "1px solid oklch(0.25 0.06 280)",
            color: "oklch(0.95 0.01 280)",
          },
        }}
      />
      <AnimatePresence mode="wait">
        {page === "landing" && (
          <LandingPage
            key="landing"
            onStart={() => setPage("register")}
            onAdmin={() => setPage("admin")}
          />
        )}
        {page === "register" && (
          <RegisterPage
            key="register"
            onSubmit={handleRegisterSubmit}
            onBack={() => setPage("landing")}
          />
        )}
        {page === "quiz" && studentInfo && (
          <QuizPage
            key="quiz"
            studentInfo={studentInfo}
            onComplete={handleQuizComplete}
          />
        )}
        {page === "results" && studentInfo && (
          <ResultsPage
            key="results"
            studentInfo={studentInfo}
            answers={quizAnswers}
            onRestart={handleRestart}
          />
        )}
        {page === "admin" && (
          <AdminPage key="admin" onBack={() => setPage("landing")} />
        )}
      </AnimatePresence>
    </div>
  );
}
