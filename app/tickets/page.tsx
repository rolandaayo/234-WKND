import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function TicketsPage() {
  const events = [
    {
      id: 1,
      title: "HEAT WAVE (Seasoned with SALT)",
      location: "Eti Osa, Lagos",
      date: "Dec 27, 2025 8:00 PM GMT+1",
      price: "NGN 10,000",
      image: "/images/screenshot-202026-01-01-20at-209.png",
      description: "Heat wave is back! But this time around the vibe is seasoned with salt! come ready to have fun!",
    },
    {
      id: 2,
      title: "Camp Cyk",
      location: "Lagos Island, Lagos",
      date: "Dec 22, 2025 6:00 AM GMT+1",
      price: "NGN 7,875",
      image: "/green-neon-jeleel-concert-poster.jpg",
      description: "Jeleel and cykers live in lagos. get ready for an unforgettable night of stacked performances",
    },
    {
      id: 3,
      title: "Afro Nation Portugal",
      location: "Algarve, Portugal",
      date: "Jul 10, 2026 6:00 PM GMT+1",
      price: "EUR 250",
      image: "/afro-beats-festival-beach-sunset.jpg",
      description: "The biggest afrobeats festival returns to Portugal with international headliners",
    },
    {
      id: 4,
      title: "Detty December Festival",
      location: "Victoria Island, Lagos",
      date: "Dec 30, 2025 10:00 PM GMT+1",
      price: "NGN 15,000",
      image: "/detty-december-party-lights.jpg",
      description: "Ring in the new year with the ultimate party experience featuring top DJs and performers",
    },
    {
      id: 5,
      title: "Jazz in the Park",
      location: "Hyde Park, London",
      date: "Jun 15, 2026 5:00 PM GMT",
      price: "GBP 45",
      image: "/outdoor-jazz-concert-park.jpg",
      description: "Experience smooth jazz under the stars with world-renowned artists in a beautiful outdoor setting",
    },
    {
      id: 6,
      title: "Burna Boy Live in Concert",
      location: "O2 Arena, London",
      date: "Aug 20, 2026 8:00 PM GMT",
      price: "GBP 75",
      image: "/burna-boy-concert-stage.jpg",
      description: "African Giant brings his electrifying performance to London for one night only",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative px-4 pt-48 pb-20 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] -z-10" />
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-20">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-primary mb-6 block">
                  The Global Registry
                </span>
                <h1 className="text-6xl font-black tracking-tighter text-white sm:text-8xl leading-none uppercase">
                  Upcoming
                  <br />
                  Destinations
                </h1>
              </div>
              <p className="max-w-xs text-[11px] font-bold uppercase tracking-widest text-muted-foreground leading-loose">
                Filter by continent or genre to find your next unforgettable cultural moment.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group relative flex flex-col lg:flex-row gap-12 items-center animate-fade-up"
                >
                  {/* Image with depth effect */}
                  <div className="relative w-full lg:w-[450px] aspect-square shrink-0 overflow-hidden rounded-[2rem] bg-secondary/10 shadow-2xl">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem] pointer-events-none" />
                  </div>

                  {/* Content with elegant spacing */}
                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-primary">
                          Live Experience
                        </span>
                        <div className="h-[1px] w-12 bg-white/10" />
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        {event.title}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-8">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                          Location
                        </span>
                        <p className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-green-primary" /> {event.location}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                          Date & Time
                        </span>
                        <p className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                          <Calendar className="h-3 w-3 text-green-primary" /> {event.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-medium leading-loose text-muted-foreground max-w-xl uppercase tracking-wider opacity-70">
                      {event.description}
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/5 gap-8">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                          Entry Fee
                        </span>
                        <p className="text-3xl font-black text-accent">{event.price}</p>
                      </div>
                      <Button
                        size="lg"
                        className="h-16 px-12 rounded-full bg-green-primary text-black font-bold hover:bg-white hover:text-black transition-all group shadow-xl"
                      >
                        Secure Access
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
