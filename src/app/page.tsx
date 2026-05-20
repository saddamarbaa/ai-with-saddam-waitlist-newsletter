import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { site } from "@/config/site";
import { SubscribeForm } from "@/components/subscribe-form";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-[600px] flex-col items-center text-center">
        <Reveal delay={0}>
          <div className="overflow-hidden rounded-2xl bg-brand shadow-sm ring-1 ring-black/5">
            <Image
              src={site.profileImage}
              alt={site.name}
              width={280}
              height={280}
              priority
              className="size-[220px] object-cover sm:size-[280px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {site.name}
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="mt-3">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-3">
          <p className="text-sm font-medium text-foreground/70">
            By {site.bylineName} ·{" "}
            <span className="font-semibold text-foreground">
              Over {site.subscriberCount} subscribers
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.32} className="mt-7 w-full max-w-md">
          <SubscribeForm />
        </Reveal>

        <Reveal delay={0.4} className="mt-4 max-w-md">
          <p className="text-xs leading-relaxed text-muted-foreground">
            By subscribing, you agree to our{" "}
            <Link
              href={site.links.terms}
              className="underline underline-offset-2 hover:text-foreground"
            >
              Terms of Use
            </Link>
            , and acknowledge our{" "}
            <Link
              href={site.links.info}
              className="underline underline-offset-2 hover:text-foreground"
            >
              Information Collection Notice
            </Link>{" "}
            and{" "}
            <Link
              href={site.links.privacy}
              className="underline underline-offset-2 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={0.48} className="mt-8">
          <Link
            href={site.links.learnMore}
            className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground transition hover:text-brand"
          >
            Learn More
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
