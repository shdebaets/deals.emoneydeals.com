"use client";

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
    <main className="page-bg min-h-screen px-5 pb-16 pt-10 text-white">
      {/* HERO */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          {/* HEADLINE */}
          <h1 className="text-4xl font-extrabold sm:text-5xl leading-tight">
            Build an Extra <span className="text-fuchsia-300">$1–3K/Month</span>{" "}
            Flipping Hidden Clearance Deals
          </h1>

          {/* SUBHEAD – WHY DIFFERENT */}
          <p className="mt-3 text-lg text-white/80">
            In our <span className="font-semibold">3-Day First Flip Challenge</span>,
            you’ll use our <span className="font-semibold">Clearance AI</span> +
            real community data to find, buy & flip your first item for profit.
          </p>

          {/* SOCIAL PROOF */}
          <div className="mt-5 flex flex-col items-center lg:items-start gap-2 text-sm text-white/70">
            <div>
              ⭐ <span className="font-semibold">4.9/5 verified rating</span> from
              real members
            </div>
            <div>
              👥 <span className="font-semibold">5,000+ active resellers</span> inside
              eMoney
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={startTrial}
            className="btn mt-6 px-10 py-3 text-base font-semibold hover:shadow-glow hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            Start Free 3-Day Challenge 🔓
          </button>

          {/* FUD REDUCTION */}
          <p className="mt-3 text-xs text-white/70">
            No experience needed • No big budget • Cancel anytime
          </p>
        </div>

        {/* RIGHT – EMOTIONAL IMAGE */}
        <div className="lg:w-1/2">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
            <img
              src="/images/first-flip-emotion.jpg"
              alt="Member celebrating first profitable flip"
              className="w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-md bg-black/70 px-3 py-1 text-[11px] font-semibold text-emerald-300">
              “Made $247 profit in 48 hours!”
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto mt-16 max-w-5xl text-center">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="font-semibold mb-1">Day 1 → Find</p>
            <p className="text-white/70">Use our AI to locate hidden clearance deals near you.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="font-semibold mb-1">Day 2 → Flip</p>
            <p className="text-white/70">Buy, list, and flip your first profitable item.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="font-semibold mb-1">Day 3 → Scale</p>
            <p className="text-white/70">Copy proven flips and start stacking consistent income.</p>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="mx-auto mt-16 max-w-5xl text-center">
        <h2 className="text-2xl font-semibold">Real People. Real Profits.</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { name: "Redwake", text: "$0.01 vanity → sold $250" },
            { name: "Ryan", text: "Pokémon haul → $180 profit" },
            { name: "Debra", text: "$600 item → $0.06 → flipped for hundreds" },
          ].map((x) => (
            <div
              key={x.name}
              className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm"
            >
              <p className="font-semibold text-fuchsia-300">{x.text}</p>
              <p className="text-white/60 text-xs mt-1">Verified eMoney member</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKOUT */}
      <section className="mx-auto mt-16 max-w-[700px]" id="checkout">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
          <h3 className="text-lg font-semibold">Start Your Free 3-Day Challenge</h3>
          <p className="mt-1 text-sm text-white/70">
            Access the Clearance AI + Community instantly.
          </p>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_QOk7Ldw02rMJH"
              theme="dark"
              fallback={<>Loading…</>}
            />
          </div>
          <p className="mt-3 text-xs text-white/60">
            Secured by Whop • Cancel anytime
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto mt-10 max-w-[700px] text-center text-xs text-white/50">
        © {new Date().getFullYear()} eMoney Reselling •{" "}
        <a href="/tos" className="underline hover:text-white">Terms</a> •{" "}
        <a href="/privacy" className="underline hover:text-white">Privacy</a>
      </footer>
    </main>
  );
}
