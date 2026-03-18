import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { StudentInfo } from "../backend";

interface RegisterPageProps {
  onSubmit: (info: StudentInfo) => void;
  onBack: () => void;
}

interface FormData {
  name: string;
  age: string;
  grade: string;
  stream: string;
  email: string;
  whatsapp: string;
}

const STREAMS = [
  "Science",
  "Commerce",
  "Humanities",
  "Arts",
  "Not Decided Yet",
];
const GRADES = ["9th", "10th", "11th", "12th", "Graduate", "Other"];

const STREAM_COLORS: Record<string, string> = {
  Science: "border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan",
  Commerce: "border-neon-lime/60 bg-neon-lime/10 text-neon-lime",
  Humanities: "border-neon-pink/60 bg-neon-pink/10 text-neon-pink",
  Arts: "border-yellow-400/60 bg-yellow-400/10 text-yellow-400",
  "Not Decided Yet":
    "border-muted-foreground/40 bg-muted/20 text-muted-foreground",
};

export function RegisterPage({ onSubmit, onBack }: RegisterPageProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    age: "",
    grade: "",
    stream: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (
      !form.age ||
      Number.parseInt(form.age) < 14 ||
      Number.parseInt(form.age) > 30
    )
      newErrors.age = "Age must be between 14 and 30";
    if (!form.grade) newErrors.grade = "Please select your grade";
    if (!form.stream) newErrors.stream = "Please select your stream";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const info: StudentInfo = {
      name: form.name.trim(),
      age: BigInt(Number.parseInt(form.age)),
      grade: form.grade,
      stream: form.stream,
      email: form.email.trim(),
      whatsapp: form.whatsapp.trim(),
    };
    onSubmit(info);
  };

  const inputClass =
    "bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-neon-purple/60 focus:ring-neon-purple/30 transition-all duration-200 h-12 text-base";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full opacity-15 blur-3xl bg-neon-pink pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full opacity-10 blur-3xl bg-neon-cyan pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <button
          type="button"
          data-ocid="register.link"
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="glass-card rounded-3xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 neon-glow-purple"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
              }}
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading font-extrabold text-3xl text-foreground mb-2">
              Tell Us About Yourself
            </h2>
            <p className="text-muted-foreground text-sm">
              Your information stays private and secure
            </p>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <Label className="text-foreground/80 font-semibold mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-neon-purple" /> Full Name{" "}
                <span className="text-neon-pink">*</span>
              </Label>
              <Input
                data-ocid="register.input"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && (
                <p
                  data-ocid="register.error_state"
                  className="text-destructive text-xs mt-1"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Age & Grade row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground/80 font-semibold mb-2 block">
                  Age <span className="text-neon-pink">*</span>
                </Label>
                <Input
                  data-ocid="register.input"
                  type="number"
                  placeholder="16"
                  min={14}
                  max={30}
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  className={inputClass}
                />
                {errors.age && (
                  <p className="text-destructive text-xs mt-1">{errors.age}</p>
                )}
              </div>
              <div>
                <Label className="text-foreground/80 font-semibold mb-2 block">
                  Grade <span className="text-neon-pink">*</span>
                </Label>
                <Select
                  value={form.grade}
                  onValueChange={(v) => setForm({ ...form, grade: v })}
                >
                  <SelectTrigger
                    data-ocid="register.select"
                    className={`${inputClass} w-full`}
                  >
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {GRADES.map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.grade && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.grade}
                  </p>
                )}
              </div>
            </div>

            {/* Stream */}
            <div>
              <Label className="text-foreground/80 font-semibold mb-3 block">
                Stream / Branch <span className="text-neon-pink">*</span>
              </Label>
              <div className="flex flex-wrap gap-2">
                {STREAMS.map((s) => (
                  <button
                    type="button"
                    data-ocid="register.toggle"
                    key={s}
                    onClick={() => setForm({ ...form, stream: s })}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                      form.stream === s
                        ? STREAM_COLORS[s]
                        : "border-border/50 bg-muted/20 text-muted-foreground hover:border-border"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.stream && (
                <p className="text-destructive text-xs mt-1">{errors.stream}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label className="text-foreground/80 font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-pink" /> Email ID{" "}
                <span className="text-neon-pink">*</span>
              </Label>
              <Input
                data-ocid="register.input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <Label className="text-foreground/80 font-semibold mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon-cyan" /> WhatsApp Number{" "}
                <span className="text-muted-foreground text-xs font-normal">
                  (optional)
                </span>
              </Label>
              <Input
                data-ocid="register.input"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className={inputClass}
              />
            </div>

            {/* Submit */}
            <button
              type="button"
              data-ocid="register.submit_button"
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-heading font-bold text-lg text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] neon-glow-purple mt-2"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.52 0.28 295), oklch(0.55 0.27 350))",
              }}
            >
              Begin Quiz
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
