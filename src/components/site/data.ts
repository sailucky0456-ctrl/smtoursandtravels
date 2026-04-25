import mysore from "@/assets/dest-mysore.jpg";
import coorg from "@/assets/dest-coorg.jpg";
import ooty from "@/assets/dest-ooty.jpg";
import tirupati from "@/assets/dest-tirupati.jpg";
import hampi from "@/assets/dest-hampi.jpg";
import nandi from "@/assets/dest-nandi.jpg";
import airport from "@/assets/dest-airport.jpg";
import wonderla from "@/assets/dest-wonderla.jpg";
import indiagate from "@/assets/dest-indiagate.jpeg";

import etios from "@/assets/car-etios.png";
import dzire from "@/assets/car-dzire.png";
import aura from "@/assets/car-aura.png";
import zest from "@/assets/car-zest.png";
import ciaz from "@/assets/car-ciaz.png";
import ertiga from "@/assets/car-ertiga.png";
import innova from "@/assets/car-innova.png";
import crysta from "@/assets/car-crysta.png";
import hycross from "@/assets/car-hycross.jpg";
import fortuner from "@/assets/car-fortuner.jpg";
import tempo from "@/assets/car-tempo.jpeg";
import minibus from "@/assets/car-minibus.jpg";

export type Destination = {
  slug: string;
  name: string;
  tag: string;
  km: string;
  hrs: string;
  img: string;
  blurb: string;
};

export const DESTINATIONS: Destination[] = [
  { slug: "mysore", name: "Mysore Palace", tag: "Family", km: "145 km", hrs: "3 hrs", img: mysore, blurb: "Royal halls, Brindavan gardens & a sweet plate of Mysore pak." },
  { slug: "coorg", name: "Coorg Hills", tag: "Weekend", km: "265 km", hrs: "5.5 hrs", img: coorg, blurb: "Coffee estates, mist over the valleys, Abbey Falls and silence." },
  { slug: "ooty", name: "Ooty Hills", tag: "Family", km: "275 km", hrs: "6.5 hrs", img: ooty, blurb: "The Nilgiri toy train, botanical gardens and cool eucalyptus air." },
  { slug: "tirupati", name: "Tirupati Temple", tag: "Pilgrimage", km: "250 km", hrs: "5 hrs", img: tirupati, blurb: "Early-morning darshan with a careful, well-rested driver." },
  { slug: "hampi", name: "Hampi Heritage", tag: "Group", km: "340 km", hrs: "6.5 hrs", img: hampi, blurb: "Vijayanagara ruins, boulder fields and unforgettable sunsets." },
  { slug: "nandi", name: "Nandi Hills", tag: "Weekend", km: "60 km", hrs: "1.5 hrs", img: nandi, blurb: "A pre-dawn pickup, a sea of clouds and a hot chai at the top." },
  { slug: "airport", name: "Bangalore Airport", tag: "Transfer", km: "40 km", hrs: "1 hr", img: airport, blurb: "Flight-tracked pickups, meet & greet, fixed transparent fare." },
  { slug: "wonderla", name: "Wonderla Bangalore", tag: "Family", km: "30 km", hrs: "45 min", img: wonderla, blurb: "Splash, scream and ride your way through India's top theme park." },
  { slug: "indiagate", name: "Delhi India Gate Tour", tag: "Tourist", km: "Custom", hrs: "Multi-day", img: indiagate, blurb: "Custom outstation tour to the capital — fully managed by SM Tours." },
];

export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  seats: string;
  perKm: string;
  img: string;
  bg: string;
};

export const VEHICLES: Vehicle[] = [
  { slug: "etios", name: "Toyota Etios", type: "Sedan · AC", seats: "4 + 1", perKm: "₹11/km", img: etios, bg: "from-sky-100 to-sky-50" },
  { slug: "dzire", name: "Swift Dzire", type: "Sedan · AC", seats: "4 + 1", perKm: "₹11/km", img: dzire, bg: "from-blue-100 to-blue-50" },
  { slug: "aura", name: "Honda Aura", type: "Sedan · AC", seats: "4 + 1", perKm: "₹12/km", img: aura, bg: "from-slate-100 to-slate-50" },
  { slug: "zest", name: "Tata Zest", type: "Sedan · AC", seats: "4 + 1", perKm: "₹12/km", img: zest, bg: "from-rose-100 to-rose-50" },
  { slug: "ciaz", name: "Maruti Ciaz", type: "Premium · AC", seats: "4 + 1", perKm: "₹13/km", img: ciaz, bg: "from-amber-100 to-amber-50" },
  { slug: "ertiga", name: "Maruti Ertiga", type: "SUV · AC", seats: "6 + 1", perKm: "₹13/km", img: ertiga, bg: "from-emerald-100 to-emerald-50" },
  { slug: "innova", name: "Toyota Innova", type: "SUV · AC", seats: "7 + 1", perKm: "₹14/km", img: innova, bg: "from-orange-100 to-orange-50" },
  { slug: "crysta", name: "Innova Crysta", type: "Premium · AC", seats: "7 + 1", perKm: "₹16/km", img: crysta, bg: "from-yellow-100 to-yellow-50" },
  { slug: "hycross", name: "Hycross Hybrid", type: "Premium · AC", seats: "7 + 1", perKm: "₹20/km", img: hycross, bg: "from-teal-100 to-teal-50" },
  { slug: "fortuner", name: "Toyota Fortuner", type: "Luxury SUV", seats: "7 + 1", perKm: "₹26/km", img: fortuner, bg: "from-stone-200 to-stone-50" },
  { slug: "tempo", name: "Tempo Traveller", type: "Traveller · AC", seats: "12 + 1", perKm: "₹22/km", img: tempo, bg: "from-fuchsia-100 to-fuchsia-50" },
  { slug: "minibus", name: "Mini Bus", type: "Bus · AC", seats: "20 + 1", perKm: "₹35/km", img: minibus, bg: "from-indigo-100 to-indigo-50" },
];

export type Pkg = {
  name: string;
  price: string;
  duration: string;
  seats: string;
  highlights: string[];
  badge?: string;
};

export const PACKAGES: Pkg[] = [
  { name: "Bangalore → Mysore (Same Day)", price: "3,499", duration: "1 Day", seats: "4 / 7 / 12", highlights: ["Palace + Chamundi Hills", "Brindavan Gardens", "Driver, fuel & toll"], badge: "Most Booked" },
  { name: "Coorg 2-Day Getaway", price: "8,999", duration: "2 Days", seats: "4 / 7 / 12", highlights: ["Abbey Falls + Raja's Seat", "Coffee estate visit", "Hotel pickup & drop"] },
  { name: "Ooty Family Tour", price: "12,499", duration: "3 Days", seats: "7 / 12", highlights: ["Botanical gardens", "Doddabetta peak", "Toy-train assist"] },
  { name: "Tirupati Darshan Trip", price: "6,999", duration: "1 Day", seats: "4 / 7", highlights: ["Pre-dawn pickup", "VIP darshan support", "Snack & water on board"] },
  { name: "Airport Pickup · Premium", price: "999", duration: "Per Trip", seats: "4 / 7", highlights: ["Flight tracked", "Meet & greet", "60-min free wait"] },
  { name: "Hampi Heritage Tour", price: "10,999", duration: "2 Days", seats: "7 / 12", highlights: ["UNESCO ruins", "Sunset at Matanga", "All transfers"] },
];

export const REVIEWS = [
  { name: "Priya R.", trip: "Family trip to Coorg", quote: "Driver was on time, vehicle was spotless. Smooth ride for the whole family. Will book again — without a second thought." },
  { name: "Anand K.", trip: "Corporate client", quote: "We use SM Tours for client airport pickups. Always punctual, professional and well-maintained cars. They've never let us down." },
  { name: "Suresh M.", trip: "Tirupati pilgrimage", quote: "Booked an Innova for Tirupati darshan. Transparent pricing, no surprises. The driver knew the route and queue timings." },
  { name: "Meghana D.", trip: "Bangalore → Ooty", quote: "Three generations in one car for three days. Cool AC, polite driver, and they helped my grandmother at every stop." },
];
