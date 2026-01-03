import { ShoppingBag, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const merchItems = [
  {
    id: 1,
    name: "234 Signature Cap",
    price: 15000,
    category: "Accessories",
    image: "/placeholder.svg?key=d8mo2",
    description: "Premium cotton with gold embroidered 234 logo.",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "WKND Heritage Hoodie",
    price: 45000,
    category: "Apparel",
    image: "/placeholder.svg?key=0faly",
    description: "Heavyweight fleece with emerald green accents.",
    tag: "Limited Edition",
  },
  {
    id: 3,
    name: "Global Tour Tote",
    price: 8000,
    category: "Accessories",
    image: "/placeholder.svg?key=8bcud",
    description: "Eco-friendly canvas for the global traveler.",
    tag: "New Arrival",
  },
  {
    id: 4,
    name: "Event Essentials Kit",
    price: 12000,
    category: "Bundles",
    image: "/placeholder.svg?key=nc4wl",
    description: "Everything you need for a weekend of vibes.",
    tag: "Exclusive",
  },
]

export default function MerchPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">The Collection</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent italic">
              WEAR THE
              <br />
              WKND
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Exclusive pieces designed for the global 234 community. Premium materials meet heritage aesthetics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/80 text-black font-bold h-14 px-8">
                Explore All
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/10 hover:bg-white/5 h-14 px-8 bg-transparent"
              >
                View Lookbook
              </Button>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 aspect-square group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 bg-card">
              <Image
                src="/placeholder.svg?key=5bgqw"
                alt="Merch Hero"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl max-w-xs animate-fade-up">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Limited Drop</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Heritage 234 Cap</h3>
                <p className="text-xs text-muted-foreground mb-4">Crafted from 100% premium gabardine.</p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-primary">₦15,000</span>
                  <button className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-black">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">ESSENTIAL PIECES</h2>
            <p className="text-muted-foreground">Curated drops for every vibe.</p>
          </div>
          <div className="flex gap-2">
            {["All", "Apparel", "Accessories", "Limited"].map((tab) => (
              <button
                key={tab}
                className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 hover:border-primary transition-all"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-card rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-black">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button className="w-full rounded-xl bg-white text-black hover:bg-primary hover:text-white font-bold h-12">
                    Quick Add +
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {item.category}
                </p>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-accent">₦{item.price.toLocaleString()}</span>
                  <Link href={`/merch/${item.id}`} className="text-muted-foreground hover:text-white">
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Shipping CTA */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-secondary via-background to-primary/20 rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 relative z-10 italic">
            WORLDWIDE SHIPPING
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
            From Lagos to London, New York to Tokyo. We bring the 234 WKND experience directly to your doorstep.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-accent hover:bg-accent/80 text-black font-bold h-16 px-12 relative z-10 text-lg"
          >
            Track Your Order
          </Button>
        </div>
      </section>
    </main>
  )
}
