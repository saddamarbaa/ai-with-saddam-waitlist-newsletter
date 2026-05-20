"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribe } from "@/app/actions";

const schema = z.object({
  email: z.email({ message: "Please enter a valid email." }),
});

type FormValues = z.infer<typeof schema>;

export function SubscribeForm() {
  const [isPending, startTransition] = useTransition();
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      const res = await subscribe(values.email);
      if (res.ok) {
        setSubmittedEmail(values.email);
        toast.success("You're on the waitlist!", {
          description: "Welcome aboard — keep an eye on your inbox.",
        });
        reset();
      } else {
        toast.error("Something went wrong", { description: res.error });
      }
    });
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submittedEmail ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center gap-3 rounded-xl border border-brand/30 bg-brand/5 px-4 py-3 text-left"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden />
          <div className="text-sm">
            <p className="font-semibold text-foreground">You&apos;re in.</p>
            <p className="text-muted-foreground">
              We&apos;ll send the next issue to{" "}
              <span className="font-medium text-foreground">{submittedEmail}</span>.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full"
        >
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-stretch">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Type your email..."
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="h-11 flex-1 rounded-lg border-brand/40 px-4 text-sm focus-visible:border-brand focus-visible:ring-brand/30 sm:rounded-r-none"
              {...register("email")}
            />
            <Button
              type="submit"
              disabled={isPending}
              size="lg"
              className="h-11 rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90 active:translate-y-px sm:rounded-l-none"
            >
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Subscribing
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
          {errors.email ? (
            <p
              id="email-error"
              className="mt-2 text-left text-xs text-destructive"
            >
              {errors.email.message}
            </p>
          ) : null}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
