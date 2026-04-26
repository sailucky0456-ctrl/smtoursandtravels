// Destination images
import mysore from "@/assets/dest-mysore.jpg";
import coorg from "@/assets/dest-coorg.jpg";
import ooty from "@/assets/dest-ooty.jpg";
import chikmagalur from "@/assets/dest-chikmagalur.jpg";
import pondicherry from "@/assets/dest-pondicherry.jpg";
import goa from "@/assets/dest-goa.jpg";
import kodaikanal from "@/assets/dest-kodaikanal.jpg";
import munnar from "@/assets/dest-munnar.jpg";
import wayanad from "@/assets/dest-wayanad.jpg";
import hampi from "@/assets/dest-hampi.jpg";
import tirupati from "@/assets/dest-tirupati.jpg";
import yercaud from "@/assets/dest-yercaud.jpg";
import sakleshpur from "@/assets/dest-sakleshpur.jpg";
import gokarna from "@/assets/dest-gokarna.jpg";

// Vehicle images (clean studio photography)
import dzire from "@/assets/car-dzire-new.jpg";
import etios from "@/assets/car-etios-new.jpg";
import amaze from "@/assets/car-amaze.jpg";
import crysta from "@/assets/car-crysta-new.jpg";
import ertiga from "@/assets/car-ertiga-new.jpg";
import carens from "@/assets/car-carens.jpg";
import hycross from "@/assets/car-hycross.jpg";
import fortuner from "@/assets/car-fortuner-new.jpg";
import tempo from "@/assets/car-tempo-new.jpg";
import minibus from "@/assets/car-minibus-new.jpg";
import luxurySedan from "@/assets/car-luxury-sedan.jpg";

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
  { slug: "coorg", name: "Coorg", tag: "Hills", km: "265 km", hrs: "5.5 hrs", img: coorg, blurb: "Coffee plantations, misty green hills and quiet scenic roads." },
  { slug: "mysore", name: "Mysore", tag: "Heritage", km: "145 km", hrs: "3 hrs", img: mysore, blurb: "Royal palace, heritage architecture and dazzling night lights." },
  { slug: "ooty", name: "Ooty", tag: "Hills", km: "275 km", hrs: "6.5 hrs", img: ooty, blurb: "Tea estates, the Nilgiri toy train and cool mountain air." },
  { slug: "chikmagalur", name: "Chikmagalur", tag: "Hills", km: "245 km", hrs: "5 hrs", img: chikmagalur, blurb: "Foggy mountain roads, coffee estates and Western Ghats views." },
  { slug: "pondicherry", name: "Pondicherry", tag: "Coastal", km: "320 km", hrs: "6 hrs", img: pondicherry, blurb: "French colony streets, mustard yellow facades and a calm beach promenade." },
  { slug: "goa", name: "Goa", tag: "Beach", km: "560 km", hrs: "10 hrs", img: goa, blurb: "Beach sunsets, swaying palms and that easy coastline vacation vibe." },
  { slug: "kodaikanal", name: "Kodaikanal", tag: "Hills", km: "460 km", hrs: "8 hrs", img: kodaikanal, blurb: "Star-shaped lake, pine forests and gentle misty hills." },
  { slug: "munnar", name: "Munnar", tag: "Hills", km: "490 km", hrs: "9 hrs", img: munnar, blurb: "Endless tea gardens carpeting the rolling green hills." },
  { slug: "wayanad", name: "Wayanad", tag: "Nature", km: "275 km", hrs: "6 hrs", img: wayanad, blurb: "Forest waterfalls, deep greenery and untouched landscapes." },
  { slug: "hampi", name: "Hampi", tag: "Heritage", km: "340 km", hrs: "6.5 hrs", img: hampi, blurb: "Ancient stone ruins, boulder fields and a UNESCO heritage skyline." },
  { slug: "tirupati", name: "Tirupati", tag: "Pilgrimage", km: "250 km", hrs: "5 hrs", img: tirupati, blurb: "Temple hills and a spiritual landmark — early-morning darshan ready." },
  { slug: "yercaud", name: "Yercaud", tag: "Hills", km: "215 km", hrs: "4.5 hrs", img: yercaud, blurb: "Lake, manicured gardens and a relaxed hill-station vibe." },
  { slug: "sakleshpur", name: "Sakleshpur", tag: "Nature", km: "220 km", hrs: "4 hrs", img: sakleshpur, blurb: "Iconic stone rail bridges and lush Western Ghats greenery." },
  { slug: "gokarna", name: "Gokarna", tag: "Beach", km: "485 km", hrs: "9 hrs", img: gokarna, blurb: "Calm crescent beaches, cliffs and clear ocean views." },
];

export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  seats: string;
  perKm: string;
  img: string;
  bg: string;
  note?: string;
};

export const VEHICLES: Vehicle[] = [
  { slug: "dzire", name: "Swift Dzire", type: "Sedan", seats: "4 Passengers", perKm: "₹11/km", img: dzire, bg: "from-zinc-100 to-zinc-50", note: "AC Available" },
  { slug: "etios", name: "Toyota Etios", type: "Sedan", seats: "4 Passengers", perKm: "₹11/km", img: etios, bg: "from-zinc-100 to-zinc-50", note: "Comfort Ride" },
  { slug: "amaze", name: "Honda Amaze", type: "Sedan", seats: "4 Passengers", perKm: "₹12/km", img: amaze, bg: "from-zinc-100 to-zinc-50", note: "Premium Sedan" },
  { slug: "crysta", name: "Innova Crysta", type: "SUV / MPV", seats: "7 Passengers", perKm: "₹16/km", img: crysta, bg: "from-zinc-100 to-zinc-50", note: "Most Popular" },
  { slug: "ertiga", name: "Maruti Ertiga", type: "MPV", seats: "7 Passengers", perKm: "₹13/km", img: ertiga, bg: "from-zinc-100 to-zinc-50", note: "Family Friendly" },
  { slug: "carens", name: "Kia Carens", type: "MPV", seats: "6/7 Passengers", perKm: "₹15/km", img: carens, bg: "from-zinc-100 to-zinc-50", note: "Spacious Ride" },

  { slug: "hycross", name: "Toyota Hycross", type: "Premium SUV", seats: "7 Passengers", perKm: "₹22/km", img: hycross, bg: "from-zinc-100 to-zinc-50", note: "Hybrid" },
  { slug: "fortuner", name: "Toyota Fortuner", type: "Luxury SUV", seats: "7 Passengers", perKm: "₹26/km", img: fortuner, bg: "from-zinc-100 to-zinc-50", note: "Premium Luxury" },
  { slug: "tempo", name: "Tempo Traveller", type: "Traveller", seats: "12 Passengers", perKm: "₹22/km", img: tempo, bg: "from-zinc-100 to-zinc-50", note: "Group Travel" },
  { slug: "minibus", name: "Mini Bus", type: "Bus", seats: "16+ Passengers", perKm: "₹35/km", img: minibus, bg: "from-zinc-100 to-zinc-50", note: "Large Groups" },
  { slug: "luxury-sedan", name: "Luxury Sedan", type: "Executive Ride", seats: "4 Passengers", perKm: "₹28/km", img: luxurySedan, bg: "from-zinc-100 to-zinc-50", note: "Business Travel" },
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
