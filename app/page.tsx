import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredEvents = [
    {
      id: 1,
      title: "HEAT WAVE: SEASONED",
      location: "Lagos, NG",
      date: "DEC 27",
      price: "$100",
      image: "/luxury-rave-party-poster.jpg",
      tag: "CULTURAL",
    },
    {
      id: 2,
      title: "Camp Cyk",
      location: "Lagos Island, Lagos",
      date: "Dec 22, 2025 6:00 AM GMT+1",
      price: "NGN 7,875",
      image: "/placeholder.svg?key=po92q",
      tag: "FEATURED",
    },
    {
      id: 3,
      title: "Afro Nation Portugal",
      location: "Algarve, Portugal",
      date: "Jul 10, 2026 6:00 PM GMT+1",
      price: "EUR 250",
      image: "/placeholder.svg?key=42lga",
      tag: "FEATURED",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
          {/* Enhanced Background with Multiple Layers */}
          <div className="absolute inset-0 z-0">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-amber-900/20" />

            {/* Radial gradient for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_40%)] opacity-15 blur-[100px]" />

            {/* Secondary radial gradient */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle,var(--accent)_0%,transparent_60%)] opacity-10 blur-[80px]" />

            {/* Additional depth with scattered light effects */}
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[radial-gradient(circle,var(--primary)_0%,transparent_50%)] opacity-8 blur-[60px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <div className="flex flex-col items-center text-center animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                Global Experience Platform
              </span>
              <h1 className="text-balance text-6xl font-black tracking-tighter text-white sm:text-8xl lg:text-9xl leading-[0.85] uppercase">
                The New
                <br />
                Standard Of
                <br />
                <span className="text-accent italic">Nights.</span>
              </h1>
              <p className="mt-8 max-w-xl text-pretty text-sm font-medium leading-relaxed text-muted-foreground uppercase tracking-widest opacity-80">
                Curating the world's most exclusive cultural events. From
                underground raves to high-art festivals.
              </p>
              <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-16 px-12 rounded-full bg-primary text-black font-bold transition-transform hover:scale-105"
                >
                  <Link href="/tickets">Access Tickets</Link>
                </Button>
                <Link
                  href="/about"
                  className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  Explore Heritage
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-white" />
          </div>
        </section>

        <section className="px-4 py-32 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase sm:text-5xl leading-none">
                  Selected
                  <br />
                  Experiences
                </h2>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground leading-loose">
                  Our editors' hand-picked selection of the most anticipated
                  events worldwide this season.
                </p>
              </div>
              <Button
                asChild
                variant="link"
                className="text-primary font-black uppercase tracking-widest h-auto p-0 group"
              >
                <Link href="/tickets" className="flex items-center gap-2">
                  View full calendar
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event, i) => (
                <div
                  key={event.id}
                  className={cn(
                    "group relative animate-fade-up",
                    i === 1 && "md:translate-y-20"
                  )}
                >
                  <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-secondary/20">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-[9px] font-black text-accent uppercase tracking-widest mb-4">
                        {event.tag || "FEATURED"}
                      </span>
                      <h3 className="text-2xl font-black text-white leading-none uppercase tracking-tighter mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {event.location}
                        </span>
                        <span>•</span>
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between px-2">
                    <span className="text-xl font-black text-primary">
                      {event.price}
                    </span>
                    <Button
                      variant="outline"
                      className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all bg-transparent"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Experience Something Unforgettable?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Join thousands of event-goers who trust 234 WKND for their ticket
              needs. Secure, fast, and reliable.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/tickets">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
