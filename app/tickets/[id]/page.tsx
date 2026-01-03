import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Ticket, Share2, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventDetailPage() {
  // In a real app, this would fetch data based on the dynamic [id] param
  const event = {
    id: 1,
    title: "HEAT WAVE (Seasoned with SALT)",
    location: "Eti Osa, Lagos",
    venue: "Amore Garden",
    date: "Dec 27, 2025",
    time: "8:00 PM GMT+1",
    price: 10000,
    currency: "NGN",
    image: "/images/screenshot-202026-01-01-20at-209.png",
    description:
      "Heat wave is back! But this time around the vibe is seasoned with salt! come ready to have fun! This is the ultimate end-of-year party experience featuring top DJs, live performances, and an unforgettable atmosphere.",
    longDescription:
      "Get ready for the most electrifying event of the year! Heat Wave returns with a special 'Seasoned with SALT' edition that promises to deliver an unforgettable experience. Featuring multiple stages, world-class DJs, and surprise guest performances, this event will take your celebration to the next level. Come prepared to dance, connect, and create memories that will last a lifetime.",
    capacity: 2000,
    ticketsSold: 1543,
    categories: ["Music Festival", "Party", "Live Performance"],
    organizer: "Camp Cyk Presents",
  }

  const ticketsRemaining = event.capacity - event.ticketsSold

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        {/* Hero Image Section */}
        <section className="relative h-[50vh] w-full overflow-hidden border-b border-border md:h-[60vh]">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          {/* Action Buttons Overlay */}
          <div className="absolute right-4 top-4 flex gap-2">
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content - Left Column */}
              <div className="space-y-6 lg:col-span-2">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {event.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">{event.title}</h1>
                  <p className="mt-2 text-lg text-muted-foreground">Presented by {event.organizer}</p>
                </div>

                <Card className="bg-card">
                  <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Date</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Time</p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                        <p className="text-sm text-muted-foreground">{event.venue}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Capacity</p>
                        <p className="text-sm text-muted-foreground">{ticketsRemaining} tickets remaining</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">About This Event</h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{event.description}</p>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{event.longDescription}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">What to Expect</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>World-class DJ performances throughout the night</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Multiple stages with different vibes and music genres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Premium food and beverage options available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Secure parking and professional event security</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Booking Card - Right Column (Sticky) */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20 bg-card">
                  <CardContent className="space-y-6 p-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Ticket Price</p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-foreground">
                          {event.currency} {event.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-primary/10 p-3">
                        <div className="flex items-center gap-2">
                          <Ticket className="h-5 w-5 text-primary" />
                          <span className="font-medium text-foreground">General Admission</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Only {ticketsRemaining} tickets left - Don't miss out!
                      </p>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-primary text-lg text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/tickets/${event.id}/checkout`}>Buy Tickets</Link>
                    </Button>

                    <div className="space-y-2 border-t border-border pt-4">
                      <p className="text-sm font-medium text-foreground">Event Highlights:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Instant ticket confirmation</li>
                        <li>✓ Mobile ticket access</li>
                        <li>✓ Secure payment processing</li>
                        <li>✓ Customer support available</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
