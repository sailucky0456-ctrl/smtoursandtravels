export const PHONE = "+919110628058";
export const PHONE_DISPLAY = "+91 91106 28058";
export const WA_NUMBER = "919110628058";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const wa = (msg: string) =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Fleet" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;
