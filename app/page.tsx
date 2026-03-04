const businessName = "NextGen Pest Solution"; // keep this as the Google listing name
const address = "Cromer NSW 2099, Australia";
const phone = "0415777555";
const email = "info@nextgenpestcontrol.com.au";

const services = [
  { title: "Residential Pest Control", desc: "Safe, effective treatments for homes with long-term prevention.", icon: "Home" },
  { title: "Termite Control", desc: "Inspections, treatment, and prevention plans to protect your property.", icon: "Shield" },
  { title: "Commercial Pest Control", desc: "Tailored programs for businesses with minimal disruption.", icon: "Building2" },
  { title: "Rodent Control", desc: "Targeted solutions to remove and prevent rats and mice.", icon: "Mouse" },
  { title: "General Pest Treatments", desc: "Cockroaches, ants, spiders, wasps, and more.", icon: "Bug" },
  { title: "End-of-Lease Treatments", desc: "Fast, compliant treatments for rentals and property managers.", icon: "KeyRound" }
];

const testimonials = [
  { name: "Tayla D.", rating: 5, text: "Super professional and friendly. I wouldn’t go anywhere else for pest control." },
  { name: "Audrey K.", rating: 5, text: "Very helpful, polite, and thorough. Explained everything clearly." },
  { name: "Mitchell W.", rating: 5, text: "Detail-oriented service and really reassuring process. Booking again." }
];

const galleryImages = [
  { src: "/images/vehicle.svg", alt: "Branded pest control vehicle" },
  { src: "/images/technician.svg", alt: "Technician performing inspection" },
  { src: "/images/home-exterior.svg", alt: "Home perimeter treatment" },
  { src: "/images/commercial.svg", alt: "Commercial site pest management" },
  { src: "/images/termite.svg", alt: "Termite inspection and protection" },
  { src: "/images/family-safe.svg", alt: "Family and pet-safe approach" }
];

const serviceAreas = [
  "Cromer", "Dee Why", "Frenchs Forest", "Brookvale", "Manly", "Belrose",
  "Northern Beaches", "North Shore", "Hills District", "Sydney CBD", "Inner West"
];

const googleMapsLink =
  "https://www.google.com/maps/place/NextGen+Pest+Solution/@-33.7955575,150.9129203,15z/data=!4m7!3m6!1s0x6b13383bcb171051:0x983f83764d0212cb!8m2!3d-33.7955575!4d150.9319747!15sCgxwZXN0IGNvbnRyb2xaDiIMcGVzdCBjb250cm9skgEUcGVzdF9jb250cm9sX3NlcnZpY2WaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhDUldRd1dqRk5WVEZNWWxWa1ZGUlhOVlZWVlRCMFZFZDBNMUpZWXhBQuABAPoBBAgAEC8!16s%2Fg%2F11xlhnjh6l?entry=tts&g_ep=EgoyMDI2MDIyNS4wIPu8ASoASAFQAw%3D%3D&skid=b26f0705-0703-4404-a267-820668a9575f";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Bug,
  Building2,
  CheckCircle2,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  KeyRound,
  Leaf,
  MessageCircle,
  MousePointer2,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  UserCheck
} from "lucide-react";

const iconMap = {
  Home,
  Shield,
  Building2,
  Mouse: MousePointer2,
  Bug,
  KeyRound
};

const trustBadges = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Family & Pet Safe", icon: Leaf },
  { label: "5-Star Rated", icon: Star },
  { label: "Fast Response", icon: Timer }
];

const faqItems = [
  {
    q: "Are your treatments safe for kids and pets?",
    a: "Yes. We use carefully selected products and apply them with safety-first methods, with clear aftercare guidance."
  },
  {
    q: "Do you offer termite inspections?",
    a: "Absolutely. We provide detailed termite inspections, treatment options, and long-term prevention planning."
  },
  {
    q: "How quickly can you come out?",
    a: "We prioritize urgent issues and aim for the next available slot, often same day or next day across Sydney."
  },
  {
    q: "What pests do you treat?",
    a: "We treat common pests including ants, cockroaches, spiders, wasps, rodents, and more."
  },
  {
    q: "Do you provide commercial maintenance programs?",
    a: "Yes. We design recurring commercial programs with minimal disruption and clear reporting."
  },
  {
    q: "How long does treatment last?",
    a: "It depends on the pest and environment, but we focus on durable results with practical prevention steps."
  },
  {
    q: "Do I need to leave the house?",
    a: "In most cases no, but we will always advise beforehand if a short vacate period is recommended."
  },
  {
    q: "Do you service apartments and strata properties?",
    a: "Yes. We work with tenants, owners, and strata managers for single units and multi-site properties."
  }
];

const mapEmbedUrl = "https://www.google.com/maps?q=-33.7955575,150.9319747&z=15&output=embed";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "2099",
      addressCountry: "AU"
    },
    telephone: phone,
    email,
    areaServed: serviceAreas,
    url: "https://nextgenpestcontrol.com.au"
  };

  return (
    <main className="text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="font-heading text-lg font-semibold tracking-tight text-slate-900">
            {businessName}
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">Services</a>
            <a href="#areas" className="transition hover:text-slate-900">Areas</a>
            <a href="#reviews" className="transition hover:text-slate-900">Reviews</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-6 pb-18 pt-18 lg:px-10 lg:pt-24">
        <div className="float-soft absolute -left-16 top-10 h-56 w-56 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="float-soft absolute -right-12 top-16 h-52 w-52 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="fade-up lg:col-span-7">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
              <Sparkles size={14} />
              Sydney Pest Experts
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Modern, Eco-Friendly Pest Control Across Sydney
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Safe for families and pets, fast response when you need it, and certified technicians focused on long-term protection.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500"
              >
                <MessageCircle size={16} />
                Get a Fast Quote
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-emerald-100 px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                <BadgeCheck size={16} />
                Book Service
              </a>
            </div>
          </div>

          <div className="slide-in card-soft relative rounded-3xl p-6 lg:col-span-5">
            <p className="text-sm font-semibold text-slate-500">Why clients stay with us</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {["Clear, upfront pricing", "Detailed inspection reports", "Low-tox, modern treatment methods", "Friendly local support"].map(
                (point) => (
                  <p key={point} className="flex items-center gap-3 rounded-xl bg-white p-3">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                    {point}
                  </p>
                )
              )}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Serving homes and businesses from Northern Beaches to Sydney CBD.
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="card-soft flex items-center gap-3 rounded-2xl px-4 py-3">
                <Icon className="text-emerald-700" size={18} />
                <span className="text-sm font-medium text-slate-700">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Premium Services, Built for Real Results</h2>
          <p className="mt-3 text-slate-600">
            Targeted treatment plans for homes, rentals, and commercial properties.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Shield;
            return (
              <article
                key={service.title}
                className="card-soft group rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  Learn more
                  <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-slate-600">
            We combine local experience with modern systems to deliver clean, reliable pest management.
          </p>
          <div className="mt-7 space-y-3">
            {[
              "Certified technicians",
              "Tailored treatments",
              "Eco-friendly approach",
              "Thorough inspections + prevention",
              "Clear communication + upfront pricing"
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-slate-700">
                <UserCheck className="text-emerald-700" size={18} />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="card-soft rounded-3xl p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Our Process</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {["Inspect", "Treat", "Prevent", "Follow-up"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-emerald-700">Step {index + 1}</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">What Clients Say</h2>
            <p className="mt-3 text-sm text-slate-500">Based on customer feedback</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <blockquote
              key={testimonial.name}
              className="card-soft rounded-3xl p-6"
              style={{ animation: `fadeUp 600ms ease ${idx * 140}ms both` }}
            >
              <div className="mb-4 flex gap-1 text-amber-500" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700">“{testimonial.text}”</p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Recent Work</h2>
          <p className="mt-3 text-slate-600">Swappable gallery images configured from a single data block above.</p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure:not(:first-child)]:mt-4">
          {galleryImages.map((image, idx) => (
            <figure key={image.src} className="card-soft relative overflow-hidden rounded-3xl p-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={idx % 2 ? 520 : 420}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx < 2}
              />
              <figcaption className="p-3 text-sm text-slate-600">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Local Team, Modern Methods</h2>
          <p className="mt-4 text-slate-600">
            {businessName} is a Sydney-based team focused on responsive service, safe products, and long-lasting results.
            We combine practical field experience with modern treatment planning so every visit is thorough, transparent,
            and built for prevention.
          </p>
        </div>
        <aside className="card-soft rounded-3xl p-6 lg:col-span-5">
          <h3 className="text-xl font-semibold text-slate-900">Meet the Team</h3>
          <p className="mt-2 text-sm text-slate-600">
            Friendly, licensed professionals who explain each step and tailor every treatment to your property.
          </p>
          <div className="mt-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 p-5 text-sm text-slate-700">
            Local support. Cleaner methods. Consistent follow-through.
          </div>
        </aside>
      </section>

      <section id="areas" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Areas We Cover</h2>
            <p className="mt-4 text-slate-600">
              Based in {address}, we service Sydney-wide with a strong focus on Northern Beaches and surrounding suburbs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                  {area}
                </span>
              ))}
            </div>
            <a href={googleMapsLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
              Open full map listing
              <ChevronRight size={16} />
            </a>
          </div>
          <div className="card-soft overflow-hidden rounded-3xl p-2">
            <iframe
              title={`${businessName} location map`}
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              className="h-[340px] w-full rounded-2xl border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-4">
          {faqItems.map((faq) => (
            <details key={faq.q} className="card-soft group rounded-2xl p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Request a Fast Quote</h2>
            <p className="mt-3 text-slate-600">Sydney-wide service with Northern Beaches focus.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <strong>Phone:</strong>{" "}
                <a className="font-semibold text-emerald-700" href={`tel:${phone.replace(/\s/g, "")}`}>
                  {phone}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a className="font-semibold text-emerald-700" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
              <p>
                <strong>Address:</strong> {address}
              </p>
            </div>
          </div>

          <form className="card-soft rounded-3xl p-6" action="#" method="post">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none ring-emerald-300 transition focus:ring" />

              <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                Phone
              </label>
              <input id="phone" name="phone" required className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none ring-emerald-300 transition focus:ring" />

              <label className="text-sm font-medium text-slate-700" htmlFor="suburb">
                Suburb
              </label>
              <input id="suburb" name="suburb" className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none ring-emerald-300 transition focus:ring" />

              <label className="text-sm font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea id="message" name="message" rows={4} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none ring-emerald-300 transition focus:ring" />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
              >
                Request a Fast Quote
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-900">{businessName}</p>
            <p>{address}</p>
            <p>{phone} | {email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Instagram" className="rounded-full border border-slate-300 p-2 transition hover:border-slate-500">
              <Instagram size={16} />
            </Link>
            <Link href="#" aria-label="Facebook" className="rounded-full border border-slate-300 p-2 transition hover:border-slate-500">
              <Facebook size={16} />
            </Link>
          </div>
          <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
