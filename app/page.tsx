"use client";

import { WhopCheckoutEmbed, useCheckoutEmbedControls } from "@whop/checkout/react";
import { gaEvent } from "./(lib)/ga";
import {
  UserIcon, 
  ShoppingBagIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

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
        {/* LEFT */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold sm:text-5xl leading-tight">
            Build an Extra <span className="text-fuchsia-300">$2,000/Month</span>{" "}
            Flipping Hidden Clearance Deals
          </h1>
          <p className="mt-3 text-lg text-white/80">
            In our <span className="font-semibold">3-Day First Flip Challenge</span>,
            you’ll use our <span className="font-semibold">Clearance AI</span> +{" "}
            real community data to find, buy & flip your first profitable item.
          </p>

          {/* SOCIAL PROOF */}
          <div className="mt-5 flex flex-col items-center lg:items-start gap-2 text-sm text-white/70">
            <a
              href="https://whop.com/emoney/emoney"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-300 transition"
            >
              ⭐ <span className="font-semibold">4.8/5 verified rating</span> from
              real members on Whop
            </a>
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

          {/* FUD */}
          <p className="mt-3 text-xs text-white/70">
            No experience needed • No big budget • Cancel anytime
          </p>
        </div>

        {/* RIGHT – IMAGE */}
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

      {/* 3-STEP FLOW (replaces HOW IT WORKS) */}
      <section className="mx-auto mt-16 max-w-5xl">
        <div className="rounded-3xl border border-white/15 bg-black/40 px-6 py-6 sm:px-10 sm:py-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            {/* STEP 1 */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5">
                <UserIcon className="h-6 w-6 text-white/80" />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
                STEP 1
              </p>
              <p className="text-base font-semibold">Join Community</p>
            </div>

            {/* ARROW */}
            <div className="hidden sm:flex flex-1 justify-center">
              <span className="text-3xl text-white/40">➜</span>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5">
                <ShoppingBagIcon className="h-6 w-6 text-white/80" />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
                STEP 2
              </p>
              <p className="text-base font-semibold">Buy</p>
            </div>

            {/* ARROW */}
            <div className="hidden sm:flex flex-1 justify-center">
              <span className="text-3xl text-white/40">➜</span>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5">
                <BanknotesIcon className="h-6 w-6 text-white/80" />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
                STEP 3
              </p>
              <p className="text-base font-semibold">Sell</p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PEOPLE */}
      <section className="mx-auto mt-16 max-w-5xl text-center">
        <h2 className="text-2xl font-semibold">Real People. Real Profits.</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          {[
            {
              name: "Emmanuel",
              itemImg: "/success/82off.jpg",
              avatar: "/success/image2.jpeg",
              quote: "Got two tillers for 82% off, thats $800 profit 💯",
            },
            {
              name: "Ryan",
              itemImg: "/success/pokemoncar.jpg",
              avatar: "/success/image5.jpeg",
              quote:
                "Macys score. No limit on the ETBs, Tins or the ex boxes, easily $500 profit",
            },
            {
              name: "Jeff",
              itemImg: "/success/vacuum1.jpg",
              avatar: "/success/image3.jpeg",
              quote:
                "$80 vacuums in my first day, two already sold for $200 each",
            },
          ].map((x) => (
            <div
              key={x.name}
              className="rounded-2xl border border-white/10 bg-black/40 p-4 text-left flex flex-col"
            >
              <div className="w-full overflow-hidden rounded-xl bg-black/70 aspect-[4/3]">
                <img src={x.itemImg} className="h-full w-full object-cover" />
              </div>

              <div className="mt-3 flex items-center gap-2">
                <img
                  src={x.avatar}
                  alt={x.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-xs">
                  <p className="font-semibold text-white">{x.name}</p>
                  <p className="text-white/60 text-[11px]">
                    Verified eMoney member
                  </p>
                </div>
              </div>

              <p className="mt-2 text-xs text-white/75 italic">“{x.quote}”</p>

              <p className="mt-3 text-sm font-semibold text-center text-fuchsia-300"></p>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKOUT */}
      <section className="mx-auto mt-16 max-w-[700px]" id="checkout">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
          <h3 className="text-lg font-semibold">Start Your Free 3-Day Challenge</h3>
          <p className="mt-1 text-sm text-white/70">
            Access Clearance AI + Training + Community instantly.
          </p>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_QOk7Ldw02rMJH"
              theme="dark"
              fallback={<>Loading…</>}
              hidePrice={true}
            />
          </div>
          <p className="mt-3 text-xs text-white/60">
            Secured by Whop • Cancel anytime • You will not be charged today
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto mt-10 max-w-[700px] text-center text-xs text-white/50">
        © {new Date().getFullYear()} eMoney Reselling •{" "}
        <a href="/tos" className="underline hover:text-white">
          Terms
        </a>{" "}
        •{" "}
        <a href="/privacy" className="underline hover:text-white">
          Privacy
        </a>
      </footer>
    </main>
  );
}
