import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NAV, PHONE, PHONE_DISPLAY, wa } from "./constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 grain" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="cream" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              Bangalore's trusted name for airport transfers, outstation trips,
              corporate travel and family tours. 24/7, on-time, transparent.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="rounded-full border border-cream/15 px-3 py-1 text-[11px] uppercase tracking-widest text-cream/60">★ 4.9 · 2k+ rides</span>
              <span className="rounded-full border border-cream/15 px-3 py-1 text-[11px] uppercase tracking-widest text-cream/60">Since 2018</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-saffron">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-cream/75 transition hover:text-saffron">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-saffron">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>Airport Transfers</li>
              <li>Outstation Trips</li>
              <li>Local Rentals</li>
              <li>Corporate Travel</li>
              <li>Tempo &amp; Mini Bus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-saffron">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-saffron">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={wa("Hi SM Tours")} target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="hover:text-saffron">WhatsApp Chat</a>
              </li>
              <li>Bangalore, Karnataka</li>
              <li>24 / 7 · 365 days</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SM Tours and Travels. All rights reserved.</p>
          <p className="font-display italic">Drive with trust. Arrive with a smile.</p>
        </div>
      </div>
    </footer>
  );
}
