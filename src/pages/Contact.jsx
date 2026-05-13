import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitTellzContactForm } from "@/lib/contactForm";
import { cn } from "@/lib/utils";

const interests = [
  "General inquiry",
  "New website",
  "Platform / product build",
  "AI & automation",
  "Support & retainer",
];

const CONTACT_EMAIL = "absamaard@gmail.com";

export default function Contact() {
  const [interest, setInterest] = useState(interests[0]);
  const [formKey, setFormKey] = useState(0);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!navigator.onLine) {
      toast.error("You are offline", { id: "contact-offline" });
      return;
    }
    setStatus("sending");
    setFeedback("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitTellzContactForm(formData, { interest });

    if (result.ok) {
      setStatus("success");
      setFeedback(result.message);
      form.reset();
      setInterest(interests[0]);
      setFormKey((k) => k + 1);
    } else {
      setStatus("error");
      setFeedback(result.message);
    }
  }

  function handleSendAnother() {
    setStatus("idle");
    setFeedback("");
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-12 sm:pt-16 md:pb-20 md:pt-20 light:border-slate-200 light:bg-slate-50">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-[0.35] light:hidden" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18] light:hidden" />
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-tellz-accent/15 blur-3xl light:bg-blue-400/20" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-tellz-glow/12 blur-3xl light:bg-violet-300/25" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-tellz-cyan light:text-blue-600"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-tellz-text sm:text-5xl md:text-6xl light:text-slate-900"
          >
            Tell us what you&apos;re building
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-tellz-muted md:text-xl light:text-slate-600"
          >
            Share a few details and we&apos;ll follow up with next steps.
            NDA-friendly · typical response within one business day.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-24 light:border-slate-200 light:bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.75rem] border border-white/10 bg-tellz-surface/60 p-8 shadow-xl shadow-black/15 backdrop-blur-md md:p-10 light:border-slate-200 light:bg-slate-50 light:shadow-lg light:shadow-slate-300/40"
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-start gap-4 py-2"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 light:border-emerald-200 light:bg-emerald-50">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-emerald-400 light:text-emerald-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-semibold text-emerald-100 light:text-emerald-900">
                      Message successfully sent
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-emerald-100/90 light:text-emerald-900/90">
                      {feedback ||
                        "Thank you — we received your message and will reply soon."}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-tellz-muted light:text-slate-600">
                  If you don&apos;t hear back within a business day, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-tellz-cyan underline-offset-4 hover:underline light:text-blue-600"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-1 rounded-xl"
                  onClick={handleSendAnother}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                key={formKey}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {status === "error" && feedback ? (
                  <div
                    className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 light:border-red-200 light:bg-red-50"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle
                      className="mt-0.5 size-5 shrink-0 text-red-400 light:text-red-600"
                      aria-hidden
                    />
                    <div>
                      <p className="font-semibold text-red-100 light:text-red-900">
                        Message failed to send
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-red-100/90 light:text-red-900/90">
                        {feedback}
                      </p>
                    </div>
                  </div>
                ) : null}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-tellz-text light:text-slate-900"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Ada Okafor"
                      className="rounded-xl"
                      disabled={status === "sending"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-tellz-text light:text-slate-900"
                    >
                      Work email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="rounded-xl"
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-company"
                    className="text-sm font-medium text-tellz-text light:text-slate-900"
                  >
                    Company{" "}
                    <span className="font-normal text-tellz-muted">
                      (optional)
                    </span>
                  </label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your organization"
                    className="rounded-xl"
                    disabled={status === "sending"}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-interest"
                    className="text-sm font-medium text-tellz-text light:text-slate-900"
                  >
                    What can we help with?
                  </label>
                  <Select
                    name="interest"
                    required
                    value={interest}
                    onValueChange={setInterest}
                    disabled={status === "sending"}
                  >
                    <SelectTrigger id="contact-interest" className="w-full">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {interests.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-tellz-text light:text-slate-900"
                  >
                    Project details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Goals, timeline, links, and anything else we should know."
                    disabled={status === "sending"}
                    className={cn(
                      "w-full resize-y rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow]",
                      "placeholder:text-muted-foreground",
                      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                      "text-tellz-text light:text-slate-900",
                      "disabled:pointer-events-none disabled:opacity-50",
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-2xl sm:w-auto"
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2
                        className="size-4 shrink-0 animate-spin"
                        aria-hidden
                      />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-8"
          >
            <div className="rounded-2xl border border-white/10 bg-tellz-bg/50 p-6 light:border-slate-200 light:bg-white">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-tellz-muted light:text-slate-500">
                Direct
              </h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex items-center gap-2 text-base font-medium text-tellz-text hover:text-tellz-cyan light:text-slate-900 light:hover:text-blue-600"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-tellz-bg/50 p-6 light:border-slate-200 light:bg-white">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-tellz-muted light:text-slate-500">
                Studio
              </h2>
              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-tellz-muted light:text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Lagos, Nigeria — partnering with teams worldwide.
              </p>
              <p className="mt-4 flex items-start gap-2 text-sm text-tellz-muted light:text-slate-600">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                WAT · Mon–Fri, 9:00–18:00
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-white/15 p-6 text-sm text-tellz-muted light:border-slate-300 light:text-slate-600">
              <p>
                Prefer to browse our work first?{" "}
                <Link
                  to="/projects"
                  className="font-medium text-tellz-cyan underline-offset-4 hover:underline light:text-blue-600"
                >
                  View projects
                </Link>
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
