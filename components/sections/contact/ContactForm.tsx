"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSE_OPTIONS } from "@/lib/contactData";

type FormState = {
  name: string;
  phone: string;
  course: string;
  message: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

/** Floating-label text input with focus glow */
function FloatInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div>
      <div
        className={[
          "relative rounded-[16px] border bg-white px-4 pb-3 pt-5 transition-all duration-200",
          focused
            ? "border-[#0B3C5D] shadow-[0_0_0_3px_rgba(11,60,93,0.10)]"
            : error
            ? "border-red-400"
            : "border-slate-200",
        ].join(" ")}
      >
        <label
          htmlFor={id}
          className={[
            "pointer-events-none absolute left-4 font-medium text-[#94A3B8] transition-all duration-200",
            lifted
              ? "top-2 text-[0.65rem] text-[#0B3C5D]"
              : "top-1/2 -translate-y-1/2 text-sm",
          ].join(" ")}
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          value={value}
          autoComplete="off"
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="mt-1 w-full bg-transparent text-sm font-medium text-[#1E293B] outline-none"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
        />
      </div>
      {error && (
        <p
          id={`${id}-err`}
          role="alert"
          className="mt-1 pl-1 text-xs text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/** Floating-label select with focus glow */
function FloatSelect({
  id,
  label,
  value,
  onChange,
  options,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: typeof COURSE_OPTIONS;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value !== "";
  return (
    <div>
      <div
        className={[
          "relative rounded-[16px] border bg-white px-4 pb-3 pt-5 transition-all duration-200",
          focused
            ? "border-[#0B3C5D] shadow-[0_0_0_3px_rgba(11,60,93,0.10)]"
            : error
            ? "border-red-400"
            : "border-slate-200",
        ].join(" ")}
      >
        <label
          htmlFor={id}
          className={[
            "pointer-events-none absolute left-4 font-medium text-[#94A3B8] transition-all duration-200",
            lifted
              ? "top-2 text-[0.65rem] text-[#0B3C5D]"
              : "top-1/2 -translate-y-1/2 text-sm",
          ].join(" ")}
        >
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="mt-1 w-full appearance-none bg-transparent text-sm font-medium text-[#1E293B] outline-none"
          aria-invalid={!!error}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
        >
          ▾
        </span>
      </div>
      {error && (
        <p role="alert" className="mt-1 pl-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: keyof FormState) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    if (!/^\d{10}$/.test(form.phone))
      e.phone = "Enter a valid 10-digit mobile number";
    if (!form.course) e.course = "Please select a programme";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div
      id="form"
      className="rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-[0_4px_24px_rgba(11,60,93,0.07)] md:p-9"
    >
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#27AE60]/15 text-3xl">
              ✓
            </div>
            <h2 className="font-serif text-xl font-bold text-[#1E293B]">
              You're all set!
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-7 text-[#64748B]">
              Our team will call you within 24 hours to confirm your free demo
              class. Check your messages.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setForm({ name: "", phone: "", course: "", message: "" });
              }}
              className="mt-6 text-sm font-semibold text-[#0B3C5D] hover:underline"
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-7">
              <h2 className="font-serif text-2xl font-bold text-[#1E293B]">
                Book your free demo class.
              </h2>
              <p className="mt-2 text-sm text-[#64748B]">
                Our team will contact you{" "}
                <strong className="text-[#1E293B]">within 24 hours.</strong> No
                obligation — just a helpful conversation.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              <FloatInput
                id="name"
                label="Your full name"
                value={form.name}
                onChange={set("name")}
                error={errors.name}
              />
              <FloatInput
                id="phone"
                label="Mobile number"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                error={errors.phone}
              />
              <FloatSelect
                id="course"
                label=""
                value={form.course}
                onChange={set("course")}
                options={COURSE_OPTIONS}
                error={errors.course}
              />

              {/* Optional message */}
              <div
                className={[
                  "rounded-[16px] border bg-white px-4 pb-3 pt-3 transition-all duration-200",
                  "focus-within:border-[#0B3C5D] focus-within:shadow-[0_0_0_3px_rgba(11,60,93,0.10)] border-slate-200",
                ].join(" ")}
              >
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold text-[#94A3B8]"
                >
                  Anything you'd like us to know?{" "}
                  <span className="font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  placeholder="e.g. current class, target exam year, specific doubts…"
                  className="w-full resize-none bg-transparent text-sm text-[#1E293B] outline-none placeholder:text-[#CBD5E1]"
                />
              </div>

              {/* Primary CTA */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={
                  !loading
                    ? {
                        scale: 1.025,
                        boxShadow: "0 12px 32px rgba(11,60,93,0.22)",
                      }
                    : {}
                }
                whileTap={{ scale: 0.98 }}
                className="mt-2 flex h-14 w-full items-center justify-center rounded-full bg-[#0B3C5D] text-base font-bold text-white disabled:opacity-70"
                style={{ boxShadow: "0 6px 24px rgba(11,60,93,0.22)" }}
              >
                {loading ? (
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                  </svg>
                ) : (
                  "Book Free Demo Now →"
                )}
              </motion.button>

              <p className="text-center text-xs text-[#94A3B8]">
                No payment required · Free counselling included · Response
                within 24 hours
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
