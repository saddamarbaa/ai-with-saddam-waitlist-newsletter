"use server";

import { z } from "zod";

const emailSchema = z.email({ message: "Please enter a valid email address." });

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string };

export async function subscribe(email: string): Promise<SubscribeResult> {
  const parsed = emailSchema.safeParse(email);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid email" };
  }

  // TODO: connect to ConvertKit / Beehiiv / Mailchimp / Supabase
  console.log("[waitlist] new subscriber:", parsed.data);

  return { ok: true };
}
