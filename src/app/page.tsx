import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { site } from "@/config/site";
import { SubscribeForm } from "@/components/subscribe-form";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
        <h1 className="sr-only">{site.name}</h1>

        <Reveal delay={0} className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
            <Image
              src={site.heroImage}
              alt={site.heroAlt}
              width={1536}
              height={864}
              priority
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-8">
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
