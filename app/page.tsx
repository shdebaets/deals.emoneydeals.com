"use client";

import PromoCountdownHeader from "@/components/PromoCountdown";
import ReviewsTicker from "@/components/ReviewsTicker";
import {
  WhopCheckoutEmbed,
  useCheckoutEmbedControls,
} from "@whop/checkout/react";
import { gaEvent } from "./(lib)/ga";

export default function Checkout() {
  const ref = useCheckoutEmbedControls();

  function startTrial() {
    gaEvent("start_trial");
    window.scrollTo({
      top: document.getElementById("checkout")?.offsetTop ?? 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="page-bg min-h-screen px-4 pb-16 pt-5 text-white">
      {/* TOP BAR: LOGO + CTA */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <img
            src="/images/emoney-logo-light.svg"
            alt="eMoney Reselling"
            className="h-8 w-auto"
          />
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-white/50 sm:inline">
            Reselling Challenge
          </span>
        </div>
        <button
          onClick={startTrial}
          className="btn px-4 py-2 text-xs sm:text-sm cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
        >
          Join the 3-Day First Flip Challenge
        </button>
      </header>

      {/* COUNTDOWN / URGENCY */}
      <div className="mx-auto mt-4 w-full max-w-6xl">
        <PromoCountdownHeader
          title="Your reserved spot in the 3-Day First Flip Challenge expires in:"
          seconds={180}
        />
      </div>

      {/* HERO – DREAM OUTCOME + WHAT'S IN IT FOR ME */}
      <section className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-start">
        {/* LEFT: HEADLINE, SUBHEAD, SOCIAL PROOF, CTA, FUD REDUCTION */}
        <div className="lg:w-1/2">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-fuchsia-300/80">
            SOCIAL PROOF #1
          </p>

          {/* HEADLINE TIED TO OUTCOME */}
          <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Make an Extra{" "}
            <span className="text-fuchsia-300">$1–3K/month</span>{" "}
            <span className="block text-2xl text-white/90 sm:text-3xl md:text-4xl">
              by Flipping Hidden Clearance Deals
            </span>
          </h1>

          {/* SUBHEAD: WHY WE'RE DIFFERENT */}
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            This isn&apos;t random “side hustle” advice. The{" "}
            <span className="font-semibold">3-Day First Flip Challenge</span>{" "}
            uses{" "}
            <span className="font-semibold">data from our Secret Clearance AI</span>{" "}
            and a <span className="font-semibold">5,000+ member community</span>{" "}
            to show you exactly:
            <span className="font-semibold">
              {" "}
              what to buy, where it is, and how to flip it for profit.
            </span>
          </p>

          {/* SOCIAL PROOF ABOVE THE FOLD – 2 TYPES */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* Type 1: Community size */}
            <div className="rounded-full border border-white/12 bg-black/40 px-4 py-2 text-xs sm:text-sm">
              <span className="font-semibold text-fuchsia-300">5,000+</span> active
              resellers inside eMoney
            </div>

            {/* Type 2: Ratings with source */}
            <div className="text-[11px] text-white/65 sm:text-xs">
              ★★★★★{" "}
              <span className="font-semibold">4.9/5 average rating</span>
              <br className="hidden sm:block" />
              <span className="text-white/45">
                Verified reviews from Whop &amp; Discord screenshots
              </span>
            </div>
          </div>

          {/* PRIMARY CTA */}
          <div className="mt-5">
            <button
              onClick={startTrial}
              className="btn mt-1 cursor-pointer px-8 py-3 text-sm sm:text-base hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Start the 3-Day First Flip Challenge (Free Trial)
            </button>

            {/* REDUCE FUD – SHORT HEADLINE UNDER BUTTON */}
            <p className="mt-2 text-[11px] text-white/75 sm:text-xs">
              <span className="font-semibold">No experience. No big budget.</span>{" "}
              3 days full access, then $50/month •
              <span className="font-semibold"> Cancel anytime in 2 clicks.</span>
            </p>
          </div>

          {/* COMMON CONCERNS – BULLET FUD BOX */}
          <div className="mt-4 rounded-xl border border-white/12 bg-black/45 p-3 text-[11px] sm:text-xs">
            <p className="font-semibold text-white">
              Most people worry about three things:
            </p>
            <ul className="mt-2 space-y-1 text-white/80">
              <li>
                <span className="font-semibold">“I&apos;ve never resold.”</span>{" "}
                The challenge is built for complete beginners.
              </li>
              <li>
                <span className="font-semibold">“I don&apos;t have much cash.”</span>{" "}
                Many members start with just a few hundred dollars.
              </li>
              <li>
                <span className="font-semibold">“What if it doesn&apos;t work?”</span>{" "}
                Try it for 3 days. If you&apos;re not confident this can get you
                toward $1–3K/month, cancel.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: STRONG EMOTIONAL IMAGE / VIDEO FRAME */}
        <div className="lg:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-black/70 p-3 shadow-[0_0_45px_rgba(236,72,153,0.45)]">
            {/* Strong emotional image – replace with real media */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/hero-first-flip-emotion.jpg"
                alt="Member excited after first profitable flip"
                className="h-full w-full object-cover"
              />
              {/* Simple familiar badge overlay */}
              <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                First flip: $247 profit in 48 hours
              </div>
            </div>

            {/* Caption to reinforce proof */}
            <div className="mt-3 flex flex-col gap-1 text-[11px] text-white/75 sm:text-xs">
              <p>
                Replace this with a{" "}
                <span className="font-semibold">
                  real screenshot or photo from your Discord #wins channel
                </span>{" "}
                or payout.
              </p>
              <p className="font-semibold text-emerald-300">
                People buy with emotion — use this spot to show the moment your
                members realize “this actually works.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER – SIMPLE SCROLLING REVIEWS */}
      <section className="mx-auto mt-8 w-full max-w-6xl">
        <ReviewsTicker />
      </section>

      {/* SECTION 2 – HOW THE CHALLENGE WORKS (STACKS ON HERO) */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          In 3 Days, We Go From “No Clue” to “First Flip”
        </h2>
        <p className="mt-2 text-center text-sm text-white/75">
          <span className="font-semibold">You&apos;ll only see headlines.</span>{" "}
          So each day has one simple goal:
          <span className="font-semibold">
            {" "}
            find, buy, and flip your first profitable item.
          </span>
        </p>

        <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
            <p className="mb-1 text-xs font-semibold text-white/60">
              DAY 1 · FIND
            </p>
            <p className="mb-1 font-semibold">
              Lock in 1–3 Proven-to-Sell Deals Near You
            </p>
            <ul className="space-y-1 text-white/80">
              <li>• Use Secret Clearance AI to scan nearby stores.</li>
              <li>• Only see items with real online demand.</li>
              <li>• Save 1–3 deals you&apos;ll go buy tomorrow.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
            <p className="mb-1 text-xs font-semibold text-white/60">
              DAY 2 · BUY &amp; LIST
            </p>
            <p className="mb-1 font-semibold">Turn Shelf Space Into a Listing</p>
            <ul className="space-y-1 text-white/80">
              <li>• Grab the item in-store using our tags guide.</li>
              <li>• Copy-and-paste our listing templates.</li>
              <li>• Get your first item live on eBay or Amazon.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
            <p className="mb-1 text-xs font-semibold text-white/60">
              DAY 3 · SCALE
            </p>
            <p className="mb-1 font-semibold">
              Build a Simple Plan for $1–3K/month
            </p>
            <ul className="space-y-1 text-white/80">
              <li>• Watch how real members stack flips.</li>
              <li>• Map your weekly “extra income” targets.</li>
              <li>• Know your next 3 moves after the trial.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 – COMMUNITY WINS (REAL PROOF) */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          Real People Turning Clearance into Extra Income
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          Plug your <span className="font-semibold">real screenshots</span> in
          here. Each card should be a{" "}
          <span className="font-semibold">specific flip with price + profit</span>{" "}
          so it feels undeniable.
        </p>

        <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {/* Keep examples; you’ll swap the images + text with real data */}
          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/success-1-placeholder.jpg"
                alt="Success story 1"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60">Member: REDWAKE</p>
            <p className="font-semibold">$0.01 vanity → $250 profit</p>
            <p className="mt-1 text-[11px] text-white/70">
              Source: Discord #wins (screenshot available inside the group).
            </p>
          </div>

          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/success-2-placeholder.jpg"
                alt="Success story 2"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60">Member: RYAN</p>
            <p className="font-semibold">Pokémon haul → $180 profit</p>
            <p className="mt-1 text-[11px] text-white/70">
              Source: Verified Whop review + Discord screenshots.
            </p>
          </div>

          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/success-3-placeholder.jpg"
                alt="Success story 3"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60">Member: JEFFREY</p>
            <p className="font-semibold">Clearance chairs → $250 profit</p>
            <p className="mt-1 text-[11px] text-white/70">
              Source: Discord #wins channel.
            </p>
          </div>

          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/success-4-placeholder.jpg"
                alt="Success story 4"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60">Member: DEBRA</p>
            <p className="font-semibold">Garage door opener for $0.01</p>
            <p className="mt-1 text-[11px] text-white/70">
              Source: Verified Discord post (full screenshot inside).
            </p>
          </div>

          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/success-5-placeholder.jpg"
                alt="Success story 5"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60">Member: ILIA</p>
            <p className="font-semibold">$600 item → $0.06 → hundreds profit</p>
            <p className="mt-1 text-[11px] text-white/70">
              Source: Penny item found via our tools, verified in chat.
            </p>
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] text-white/60">
          Inside the challenge, you&apos;ll see the{" "}
          <span className="font-semibold">full unblurred posts</span> and exact
          items people are flipping.
        </p>
      </section>

      {/* SECTION 4 – WHAT YOU GET */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <div className="card p-5 sm:p-6">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Everything You Need to Prove This Can Be Your $1–3K/month Stream
          </h2>
          <p className="mt-2 text-center text-sm text-white/75">
            Keep it simple:{" "}
            <span className="font-semibold">
              30–60 minutes per day for 3 days
            </span>{" "}
            to go from “I&apos;m curious” to “I made my first flip.”
          </p>

          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
              <p className="mb-2 font-semibold">Secret Clearance AI Access</p>
              <ul className="space-y-1 text-white/80">
                <li>• Scan Walmart, Lowe&apos;s, Target, and more.</li>
                <li>• Filter by profit, discount %, and distance.</li>
                <li>• Only see items with proven resale demand.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
              <p className="mb-2 font-semibold">Step-by-Step 3-Day Plan</p>
              <ul className="space-y-1 text-white/80">
                <li>• One simple checklist per day.</li>
                <li>• Short videos you can watch on your phone.</li>
                <li>• Clear “do this next” instructions.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
              <p className="mb-2 font-semibold">Live Community &amp; Deal Alerts</p>
              <ul className="space-y-1 text-white/80">
                <li>• See what others are buying today.</li>
                <li>• Model your flips after their wins.</li>
                <li>• Stay plugged into opportunities.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
              <p className="mb-2 font-semibold">Beginner Support</p>
              <ul className="space-y-1 text-white/80">
                <li>• Drop screenshots when you&apos;re unsure.</li>
                <li>• Get feedback on deals &amp; listings.</li>
                <li>• Never feel stuck or alone in the process.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={startTrial}
              className="btn mt-1 cursor-pointer px-10 py-3 text-sm sm:text-base hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Join the Challenge &amp; Start Your Free Trial
            </button>
            <p className="mt-2 text-[11px] text-white/70 sm:text-xs">
              Instant access after checkout • Cancel anytime inside your account
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY WE'RE DIFFERENT (RECAP) */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <div className="rounded-2xl border border-white/12 bg-black/60 p-5 sm:p-6">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Why This Feels Simple (When Most Side Hustles Feel Overwhelming)
          </h2>

          <div className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <h3 className="mb-1 font-semibold">Familiar, Not Fancy</h3>
              <p className="text-white/80">
                Straightforward layout, clear buttons, and simple steps. No weird
                UX — just what you&apos;re used to from sites that work.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Data Over Hype</h3>
              <p className="text-white/80">
                Real item data and real screenshots. No vague “trust us”
                promises — you see the proof inside.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">One Clear Outcome</h3>
              <p className="text-white/80">
                Everything points to one thing:{" "}
                <span className="font-semibold">
                  helping you prove you can make $1–3K/month by starting with
                  one flip this week.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section className="mx-auto mt-12 w-full max-w-[720px]" id="checkout">
        <div className="card p-4 sm:p-5">
          <div className="text-center text-lg font-semibold">
            Start Your 3-Day Free Trial &amp; First Flip Challenge
          </div>
          <p className="mt-1 text-center text-xs text-white/70 sm:text-sm">
            Immediate access to Secret Clearance AI, the 3-Day plan, and the
            full eMoney community.
          </p>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_QOk7Ldw02rMJH"
              theme="dark"
              fallback={<>loading…</>}
            />
          </div>
          <p className="mt-3 text-center text-[11px] text-white/60 sm:text-xs">
            Secured by Whop • Encrypted checkout • Cancel anytime inside your
            account
          </p>
        </div>
      </section>

      {/* RISK-FREE GUARANTEE */}
      <section className="mx-auto mt-6 w-full max-w-[720px]">
        <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-center">
          <div className="text-lg font-semibold">Risk-Free Guarantee</div>
          <p className="mt-1 text-sm text-white/80">
            Try everything for 3 days. If you don&apos;t feel confident this can
            be your path to an extra{" "}
            <span className="font-semibold">$1–3K/month</span> from reselling,
            cancel before the trial ends and you won&apos;t be charged again.
          </p>
        </div>
      </section>

      {/* FAQ / FINAL FUD REDUCTION */}
      <section className="mx-auto mt-10 w-full max-w-5xl">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          Quick Answers Before You Join
        </h2>

        <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="mb-1 font-semibold">
              Do I need a lot of money to start?
            </p>
            <p className="text-white/80">
              No. Many members begin with a few hundred dollars and reinvest.
              The challenge is about{" "}
              <span className="font-semibold">
                starting small and building toward $1–3K/month.
              </span>
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="mb-1 font-semibold">
              I&apos;ve never resold anything. Is this for me?
            </p>
            <p className="text-white/80">
              Yes. The plan assumes you&apos;re a complete beginner with no
              selling or tech experience.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="mb-1 font-semibold">
              What happens after my 3-day trial?
            </p>
            <p className="text-white/80">
              Your account rolls into the standard $50/month membership so you
              can keep using the tools and community. You can cancel anytime
              inside your account in a couple of clicks.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="mb-1 font-semibold">
              Is this actually legal and allowed?
            </p>
            <p className="text-white/80">
              Yes. You&apos;re buying items from regular retail stores and
              reselling them on platforms like eBay and Amazon — a normal,
              widely used business model.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={startTrial}
            className="btn mt-1 cursor-pointer px-10 py-3 text-sm sm:text-base hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
          >
            Accept the 3-Day First Flip Challenge
          </button>
          <p className="mt-2 text-[11px] text-white/70 sm:text-xs">
            Expect to skim headlines and follow simple steps. The challenge is
            there to prove this can work for you — not just for “lucky” people.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto mt-10 w-full max-w-[720px] text-center text-[11px] text-white/50 sm:text-xs">
        © {new Date().getFullYear()} eMoney Reselling •{" "}
        <a href="/tos" className="underline underline-offset-2 hover:text-white">
          Terms
        </a>{" "}
        •{" "}
        <a
          href="/privacy"
          className="underline underline-offset-2 hover:text-white"
        >
          Privacy
        </a>
      </footer>
    </main>
  );
}
