import { useState } from "react";
import { PHONE, wa } from "./constants";
import qrImg from "@/assets/payment-qr.png";

export function StickyDock() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setQrOpen(true)}
          aria-label="Pay with UPI QR"
          className="group grid h-14 w-14 place-items-center rounded-full bg-ink text-cream shadow-lift transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h1" />
          </svg>
        </button>
        <a
          href={wa("Hi SM Tours, I'd like to enquire about a booking.")}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          aria-label="WhatsApp"
          className="group grid h-14 w-14 place-items-center rounded-full bg-jade text-white shadow-lift transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M20.52 3.48A11.79 11.79 0 0 0 12.05 0C5.5 0 .19 5.31.19 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.84 11.84 0 0 0 5.66 1.44h.01c6.55 0 11.86-5.31 11.86-11.86 0-3.17-1.23-6.15-3.4-8.43ZM12.05 21.4h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.79.99 1.01-3.69-.23-.38a9.45 9.45 0 0 1-1.45-5.02c0-5.23 4.27-9.49 9.51-9.49 2.54 0 4.93.99 6.72 2.79a9.43 9.43 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.5 9.49Zm5.21-7.11c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.62.07-.29-.14-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49l-.55-.01a1.06 1.06 0 0 0-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.79 1.18 2.98.14.19 2.04 3.12 4.95 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z"/></svg>
        </a>
        <a
          href={`tel:${PHONE}`}
          aria-label="Call"
          className="group grid h-14 w-14 place-items-center rounded-full bg-saffron-deep text-cream shadow-lift transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        </a>
      </div>

      {qrOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 px-4 backdrop-blur-sm"
          onClick={() => setQrOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="UPI Payment QR"
        >
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-cream p-6 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-ink transition hover:bg-ink/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-saffron-deep">Secure Advance Payment</span>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink">Scan to Pay</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Pay with any UPI app — PhonePe, GPay, Paytm. Send the screenshot on WhatsApp to confirm your ride instantly.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl bg-white p-3 shadow-soft">
              <img src={qrImg} alt="UPI Payment QR — Sachin B Padasalagi" className="block w-full" />
            </div>
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-ink">
              Sachin B Padasalagi
            </p>
          </div>
        </div>
      )}
    </>
  );
}
