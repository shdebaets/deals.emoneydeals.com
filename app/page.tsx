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
    <main className="page-bg min-h-screen px-4 pb-16 pt-12 text-white">
      {/* Countdown / urgency */}
      <PromoCountdownHeader
        title="Your spot in the 3-Day Flip Challenge is reserved for:"
        seconds={180}
      />

      {/* HERO SECTION – 3-DAY FLIP CHALLENGE */}
      <section className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center">
        {/* Left: Headline, subheadline, social proof, CTA */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Join the{" "}
            <span className="text-fuchsia-300">3-Day Flip Challenge</span> and
            Get Your First Profitable Clearance Flip
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/80">
            In the next <span className="font-semibold">3 days</span>, we&apos;ll
            help you use our{" "}
            <span className="font-semibold">Secret Clearance AI software</span>{" "}
            and <span className="font-semibold">5,000+ member community</span>{" "}
            to: find a hidden clearance deal, buy it, and list it for profit.
          </p>

          {/* Above-the-fold social proof row */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs sm:text-sm">
              <span className="font-semibold text-fuchsia-300">5,000+</span>{" "}
              active resellers inside eMoney
            </div>
            <div className="text-[11px] sm:text-xs text-white/60">
              ★★★★★ 4.9/5 average rating <br className="hidden sm:block" />
              <span className="text-white/50">
                Based on verified reviews from Discord &amp; Whop
              </span>
            </div>
          </div>

          {/* Primary CTA + FUD reduction */}
          <div className="mt-5">
            <button
              onClick={startTrial}
              className="btn px-8 py-3 text-sm sm:text-base mt-1 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Start the 3-Day Flip Challenge 🔓
            </button>

            <p className="mt-2 text-[11px] sm:text-xs text-white/70">
              3 days full access • Then $50/month •{" "}
              <span className="font-semibold">
                Cancel in 2 clicks. No contracts, no hidden fees.
              </span>
            </p>
          </div>

          {/* Reduce FUD – common concerns */}
          <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 text-[11px] sm:text-xs">
            <p className="font-semibold text-white">
              Worried this won&apos;t work for you?
            </p>
            <ul className="mt-2 space-y-1 text-white/80">
              <li>• No experience required — we start from absolute zero.</li>
              <li>• No big budget needed — many members start with a few hundred dollars.</li>
              <li>• No guesswork — see items with real resale demand before you buy.</li>
            </ul>
          </div>
        </div>

        {/* Right: Strong emotional image / video frame (placeholder) */}
        <div className="md:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-black/60 p-3 shadow-[0_0_40px_rgba(236,72,153,0.35)]">
            {/* TODO: replace src with real hero image or video thumbnail */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/hero-challenge-placeholder.jpg"
                alt="Placeholder for 3-Day Flip Challenge hero image"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Small caption under image to make it feel real */}
            <div className="mt-3 flex items-center justify-between gap-2 text-[11px] sm:text-xs text-white/70">
              <p>
                Replace this with a{" "}
                <span className="font-semibold">real screenshot or photo</span>{" "}
                from your clearance software or wins.
              </p>
              <p className="text-right text-emerald-300 font-semibold">
                Real tools. Real flips.
              </p>
            </div>
          </div>

          {/* Secondary social proof above the fold */}
          <div className="mt-4 text-center text-[11px] sm:text-xs text-white/65">
            “This paid for itself in my first week.” — Verified eMoney member
          </div>
        </div>
      </section>

      {/* HOW THE 3-DAY FLIP CHALLENGE WORKS */}
      <section className="mx-auto mt-10 w-full max-w-5xl">
        <h2 className="text-center text-xl sm:text-2xl font-semibold">
          How the 3-Day Flip Challenge Works
        </h2>
        <p className="mt-2 text-center text-sm text-white/75">
          People buy with emotion, but they stay when it works. The goal of this
          challenge is simple:{" "}
          <span className="font-semibold">
            help you get your first profitable flip in 3 days
          </span>
          .
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
            <p className="text-xs font-semibold text-white/60 mb-1">
              DAY 1
            </p>
            <p className="font-semibold mb-1">
              Find Your First Hidden Clearance Deal
            </p>
            <p className="text-white/80">
              Use Secret Clearance AI to scan stores near you. We&apos;ll show
              you items already selling online so you&apos;re not guessing.
            </p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
            <p className="text-xs font-semibold text-white/60 mb-1">
              DAY 2
            </p>
            <p className="font-semibold mb-1">
              Go In-Store, Buy, and List the Item
            </p>
            <p className="text-white/80">
              Grab the item in-store, then follow our listing guides to put it
              on eBay or Amazon with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
            <p className="text-xs font-semibold text-white/60 mb-1">
              DAY 3
            </p>
            <p className="font-semibold mb-1">
              Watch &amp; Learn From Real Flips
            </p>
            <p className="text-white/80">
              See how other members are pricing, selling, and scaling — so you
              know exactly what to do next when your item sells.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS PROOF SECTION – STATIC, NOT CAROUSEL */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <h2 className="text-center text-xl sm:text-2xl font-semibold">
          Real Wins From the eMoney Community
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          These are{" "}
          <span className="font-semibold">actual members</span> sharing their
          wins inside our Discord #wins channel.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* SUCCESS CARD 1 */}
          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              {/* TODO: replace src with real screenshot / photo */}
              <img
                src="/images/success-1-placeholder.jpg"
                alt="Success story placeholder 1"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">Member: REDWAKE</p>
            <p className="text-sm font-semibold">
              $0.01 vanity &rarr; sold for $250
            </p>
            <p className="mt-1 text-xs text-white/70">
              Source: Discord #wins • clearance glitch found using our tools.
            </p>
          </div>

          {/* SUCCESS CARD 2 */}
          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              {/* TODO: replace src with real screenshot / photo */}
              <img
                src="/images/success-2-placeholder.jpg"
                alt="Success story placeholder 2"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">Member: RYAN</p>
            <p className="text-sm font-semibold">
              Pokémon haul &rarr; $180 profit
            </p>
            <p className="mt-1 text-xs text-white/70">
              Bought from hidden clearance, flipped online in a single weekend.
            </p>
          </div>

          {/* SUCCESS CARD 3 */}
          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              {/* TODO: replace src with real screenshot / photo */}
              <img
                src="/images/success-3-placeholder.jpg"
                alt="Success story placeholder 3"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">Member: JEFFREY</p>
            <p className="text-sm font-semibold">
              Clearance chairs &rarr; $250 profit
            </p>
            <p className="mt-1 text-xs text-white/70">
              Used our software to locate marked-down inventory few people
              noticed.
            </p>
          </div>

          {/* SUCCESS CARD 4 */}
          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              {/* TODO: replace src with real screenshot / photo */}
              <img
                src="/images/success-4-placeholder.jpg"
                alt="Success story placeholder 4"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">Member: DEBRA</p>
            <p className="text-sm font-semibold">
              Garage door opener for $0.01
            </p>
            <p className="mt-1 text-xs text-white/70">
              Found using hidden clearance data; flipped for a big margin.
            </p>
          </div>

          {/* SUCCESS CARD 5 */}
          <div className="rounded-2xl border border-white/12 bg-black/55 p-3">
            <div className="overflow-hidden rounded-xl">
              {/* TODO: replace src with real screenshot / photo */}
              <img
                src="/images/success-5-placeholder.jpg"
                alt="Success story placeholder 5"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">Member: ILIA</p>
            <p className="text-sm font-semibold">
              $600 item down to $0.06
            </p>
            <p className="mt-1 text-xs text-white/70">
              Penny item located via our tools, then flipped online for
              hundreds in profit.
            </p>
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] text-white/60">
          You&apos;ll see full screenshots and context for these wins inside the
          community.
        </p>

        <div className="mt-4">
          <ReviewsTicker />
        </div>
      </section>

      {/* WHAT YOU GET IN THE 3-DAY FLIP CHALLENGE */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <div className="card p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">
            What You Get Inside the 3-Day Flip Challenge
          </h2>
          <p className="mt-2 text-center text-sm text-white/75">
            Expect to spend{" "}
            <span className="font-semibold">30–60 minutes per day</span>. Our
            aim is to help you get at least{" "}
            <span className="font-semibold">
              your first profitable flip before the trial ends
            </span>
            .
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Secret Clearance AI Access</p>
              <ul className="space-y-1 text-white/80">
                <li>• Scan Walmart, Lowe&apos;s, Target, and more for hidden clearance.</li>
                <li>• Filter by profit, discount %, and distance from you.</li>
                <li>• See items with proven resale demand, not guesses.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Step-by-Step Beginner Training</p>
              <ul className="space-y-1 text-white/80">
                <li>• Short videos to get you from &quot;no clue&quot; to &quot;first flip&quot;.</li>
                <li>• Exactly how to read tags &amp; markdowns.</li>
                <li>• How to list &amp; ship items without confusion.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Live Community &amp; Deal Alerts</p>
              <ul className="space-y-1 text-white/80">
                <li>• See real deals members are grabbing every day.</li>
                <li>• Learn from wins and mistakes in real time.</li>
                <li>• Ask questions and get answers from active resellers.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Beginner-Friendly Support</p>
              <ul className="space-y-1 text-white/80">
                <li>• Post screenshots when you&apos;re unsure what to buy.</li>
                <li>• Get feedback on your listings.</li>
                <li>• Clear next steps so you never feel stuck.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={startTrial}
              className="btn px-10 py-3 text-sm sm:text-base mt-1 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Join the 3-Day Flip Challenge
            </button>
            <p className="mt-2 text-[11px] sm:text-xs text-white/70">
              Starts as soon as you sign up • Cancel anytime inside your
              account.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <div className="rounded-2xl border border-white/12 bg-black/60 p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">
            Why This Challenge Is Different From Random “Reselling Groups”
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <h3 className="font-semibold mb-1">Data, Not Hype</h3>
              <p className="text-white/80">
                We show real item data and demand. No vague “buy this, maybe it
                sells” calls.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Beginner-First Design</h3>
              <p className="text-white/80">
                Everything is built so complete beginners can follow along and
                get a win in 3 days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Real, Active Community</h3>
              <p className="text-white/80">
                5,000+ resellers posting real wins, questions, and support — not
                a ghost town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section className="mx-auto mt-12 w-full max-w-[720px]" id="checkout">
        <div className="card p-4 sm:p-5">
          <div className="text-center text-lg font-semibold">
            Start Your 3-Day Free Trial &amp; Flip Challenge
          </div>
          <p className="mt-1 text-center text-xs sm:text-sm text-white/70">
            Instant access to Secret Clearance AI, training, and the full
            eMoney community.
          </p>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_QOk7Ldw02rMJH"
              theme="dark"
              fallback={<>loading…</>}
            />
          </div>
          <p className="mt-3 text-center text-[11px] sm:text-xs text-white/60">
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
            Try everything for 3 days. If you don&apos;t feel confident you can
            find profitable clearance flips, cancel and you won&apos;t be
            charged again.
          </p>
        </div>
      </section>

      {/* FAQ / FINAL FUD REDUCTION */}
      <section className="mx-auto mt-10 w-full max-w-5xl">
        <h2 className="text-center text-xl sm:text-2xl font-semibold">
          Quick Answers Before You Join
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">
              Do I need a lot of money to start?
            </p>
            <p className="text-white/80">
              No. Many members begin with a few hundred dollars and reinvest
              profits. We help you start lean and grow safely.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">
              I&apos;ve never resold anything. Is this for me?
            </p>
            <p className="text-white/80">
              Yes. The challenge is designed for beginners — clear steps,
              simple videos, and real examples from other members.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">
              What happens after my 3-day trial?
            </p>
            <p className="text-white/80">
              Your account rolls into the standard $50/month membership. You can
              cancel anytime in just a couple of clicks.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">
              Is reselling like this legal?
            </p>
            <p className="text-white/80">
              Yes. You&apos;re buying products from regular retail stores and
              reselling them on platforms like eBay and Amazon, which is a
              normal and legal business model.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={startTrial}
            className="btn px-10 py-3 text-sm sm:text-base mt-1 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
          >
            Accept the 3-Day Flip Challenge
          </button>
          <p className="mt-2 text-[11px] sm:text-xs text-white/70">
            Expect to follow simple steps. The challenge is there to prove this
            can work for you — not just for “lucky” people.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto mt-10 w-full max-w-[720px] text-center text-[11px] sm:text-xs text-white/50">
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
