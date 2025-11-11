"use client";

import PromoCountdownHeader from "@/components/PromoCountdown";
import SuccessHeroSlider from "@/components/SuccessHeroSlider";
import ReviewsTicker from "@/components/ReviewsTicker";
import { WhopCheckoutEmbed, useCheckoutEmbedControls } from "@whop/checkout/react";
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
        title="Your spot is reserved for the next:"
        seconds={180}
      />

      {/* HERO SECTION */}
      <section className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center">
        {/* Left: Headline, subheadline, social proof, CTA */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Turn Hidden Clearance{" "}
            <span className="text-fuchsia-300">
              Into Daily Profit
            </span>{" "}
            — Without Guessing What to Buy
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/80">
            eMoney&apos;s <span className="font-semibold">Secret Clearance AI</span> scans
            thousands of store items and shows you{" "}
            <span className="font-semibold">what&apos;s already selling on eBay & Amazon</span>,
            so you&apos;re not gambling on random products.
          </p>

          {/* Above-the-fold social proof row */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs sm:text-sm">
              <span className="font-semibold text-fuchsia-300">5,000+</span> active resellers
              using eMoney every month
            </div>
            <div className="text-[11px] sm:text-xs text-white/60">
              ★★★★★ 4.9/5 average rating <br className="hidden sm:block" />
              <span className="text-white/50">
                Based on verified reviews from Discord & Whop
              </span>
            </div>
          </div>

          {/* Primary CTA + FUD reduction */}
          <div className="mt-5">
            <button
              onClick={startTrial}
              className="btn px-8 py-3 text-sm sm:text-base mt-1 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Start My 3-Day Free Trial 🔓
            </button>

            <p className="mt-2 text-[11px] sm:text-xs text-white/70">
              3 days full access • Then $50/month •{" "}
              <span className="font-semibold">Cancel in 2 clicks. No contracts, no hidden fees.</span>
            </p>
          </div>

          {/* Reduce FUD – common concerns */}
          <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 text-[11px] sm:text-xs">
            <p className="font-semibold text-white">
              Worried this won&apos;t work for you?
            </p>
            <ul className="mt-2 space-y-1 text-white/80">
              <li>• No experience required — beginner videos show you step-by-step.</li>
              <li>• No big budget needed — many members start with a few hundred dollars.</li>
              <li>• No guesswork — we only show items with real resale demand.</li>
            </ul>
          </div>
        </div>

        {/* Right: Strong emotional image / video frame */}
        <div className="md:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-black/60 p-3 shadow-[0_0_40px_rgba(236,72,153,0.35)]">
            {/* Replace this image src with a real dashboard / cart screenshot that shows emotion */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/hero/clearance-dashboard.png"
                alt="eMoney Secret Clearance AI dashboard showing profitable hidden clearance finds"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Small caption under image to make it feel real */}
            <div className="mt-3 flex items-center justify-between gap-2 text-[11px] sm:text-xs text-white/70">
              <p>
                Live view of{" "}
                <span className="font-semibold">Secret Clearance AI</span>{" "}
                highlighting hidden clearance deals in your area.
              </p>
              <p className="text-right text-emerald-300 font-semibold">
                Real tools. Real screenshots.
              </p>
            </div>
          </div>

          {/* Secondary social proof above the fold */}
          <div className="mt-4 text-center text-[11px] sm:text-xs text-white/65">
            “This paid for itself in my first week.” — Verified eMoney member
          </div>
        </div>
      </section>

      {/* SUCCESS PROOF SECTION */}
      <section className="mx-auto mt-10 w-full max-w-5xl">
        <h2 className="text-center text-xl sm:text-2xl font-semibold">
          Real Resellers. Real Clearance Glitches. Real Profits.
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          All wins below are from{" "}
          <span className="font-semibold">actual eMoney community members</span> sharing
          their results inside our Discord.
        </p>

        <div className="mt-5">
          <SuccessHeroSlider
            items={[
              { src: "/success/vanity.jpg", caption: "REDWAKE • $0.01 vanity → sold for $250" },
              { src: "/success/pokemon.jpg", caption: "RYAN • Pokémon haul → $180 profit" },
              { src: "/success/chairs.png.jpg", caption: "JEFFREY • clearance chairs → $250 profit" },
              { src: "/success/garage.jpg", caption: "DEBRA • garage door opener for $0.01" },
              { src: "/success/pennyitem.jpg", caption: "ILIA • $600 item down to $0.06" },
            ]}
          />
          <p className="mt-2 text-center text-[11px] text-white/60">
            Source: eMoney Discord #wins channel • Screenshots available inside the community
          </p>
        </div>

        <div className="mt-4">
          <ReviewsTicker />
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <div className="card p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">
            Here&apos;s What You Unlock In Your 3-Day Free Trial
          </h2>
          <p className="mt-2 text-center text-sm text-white/75">
            Expect to spend <span className="font-semibold">30–60 minutes per day</span> during
            your trial. Our goal is to help you find at least{" "}
            <span className="font-semibold">your first profitable flip</span> before your trial ends.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Secret Clearance AI</p>
              <ul className="space-y-1 text-white/80">
                <li>• Scan Walmart, Home Depot, Lowe’s & Target for hidden clearance.</li>
                <li>• Filter by profit, discount %, and distance from you.</li>
                <li>• See what&apos;s already selling on eBay & Amazon.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Step-By-Step Beginner Training</p>
              <ul className="space-y-1 text-white/80">
                <li>• Short videos that walk you from “zero” to “first flip.”</li>
                <li>• Exactly how to read price tags & hidden markdowns.</li>
                <li>• How to list & ship items without confusion.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Daily Deal Alerts & Community</p>
              <ul className="space-y-1 text-white/80">
                <li>• Live posts when new glitches & markdowns drop.</li>
                <li>• 5,000+ members sharing what&apos;s working right now.</li>
                <li>• Ask questions and get real answers, fast.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-sm">
              <p className="font-semibold mb-2">Beginner-Friendly Support</p>
              <ul className="space-y-1 text-white/80">
                <li>• Stuck? Post a screenshot & get feedback.</li>
                <li>• Learn from people actually reselling today, not theory.</li>
                <li>• Clear next steps so you always know what to do.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={startTrial}
              className="btn px-10 py-3 text-sm sm:text-base mt-1 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Claim My 3-Day Free Trial
            </button>
            <p className="mt-2 text-[11px] sm:text-xs text-white/70">
              No long-term commitment • Cancel anytime inside your account settings
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT SECTION */}
      <section className="mx-auto mt-12 w-full max-w-5xl">
        <div className="rounded-2xl border border-white/12 bg-black/60 p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">
            Why eMoney Is Different From Random &quot;Reselling Groups&quot;
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <h3 className="font-semibold mb-1">Data, Not Hype</h3>
              <p className="text-white/80">
                We show you live item data and resale demand. No guessing, no “hope marketing.”
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Beginner-Proof</h3>
              <p className="text-white/80">
                Training and tools designed for people with <span className="font-semibold">zero</span> prior
                experience — not just pros.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Real Community</h3>
              <p className="text-white/80">
                We live inside our Discord. Wins, failures, and updates are posted every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT SECTION */}
      <section className="mx-auto mt-12 w-full max-w-[720px]" id="checkout">
        <div className="card p-4 sm:p-5">
          <div className="text-center text-lg font-semibold">
            Start Your 3-Day Free Trial
          </div>
          <p className="mt-1 text-center text-xs sm:text-sm text-white/70">
            Instant access to Secret Clearance AI & the full eMoney community.
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
            Secured by Whop • Encrypted checkout • You can cancel at any time inside your account
          </p>
        </div>
      </section>

      {/* RISK-FREE GUARANTEE SECTION */}
      <section className="mx-auto mt-6 w-full max-w-[720px]">
        <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-center">
          <div className="text-lg font-semibold">Risk-Free Guarantee</div>
          <p className="mt-1 text-sm text-white/80">
            Try everything for 3 days. If you don&apos;t see how to find profitable clearance deals,
            simply cancel and you won&apos;t be charged again.
          </p>
        </div>
      </section>

      {/* FAQ / FINAL FUD REDUCTION */}
      <section className="mx-auto mt-10 w-full max-w-5xl">
        <h2 className="text-center text-xl sm:text-2xl font-semibold">
          Quick Answers To Common Questions
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">Do I need a lot of money to start?</p>
            <p className="text-white/80">
              No. Many members begin with a few hundred dollars and reinvest profits. We show you
              how to start small and scale up.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">I&apos;ve never resold anything before. Is this for me?</p>
            <p className="text-white/80">
              Yes. The training is beginner-friendly and the community is used to helping complete
              beginners get their first wins.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">What happens after my 3-day trial?</p>
            <p className="text-white/80">
              Your account rolls into the standard $50/month membership. You can cancel any time
              before or after, in just a couple of clicks.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
            <p className="font-semibold mb-1">Is this legal and allowed?</p>
            <p className="text-white/80">
              You&apos;re buying products from regular retail stores and reselling them on platforms
              like eBay and Amazon, which is a common and legal business model.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={startTrial}
            className="btn px-10 py-3 text-sm sm:text-base mt-1 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
          >
            I&apos;m Ready To Try eMoney
          </button>
          <p className="mt-2 text-[11px] sm:text-xs text-white/70">
            Remember: people buy with emotion, but stay when it works. Your trial is where you
            prove it to yourself.
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
        <a href="/privacy" className="underline underline-offset-2 hover:text-white">
          Privacy
        </a>
      </footer>
    </main>
  );
}
