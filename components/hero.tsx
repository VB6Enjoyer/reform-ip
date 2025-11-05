"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/* The Hero component serves as the main landing section for the homepage.
 It features a prominent headline, a brief mission statement, calls to action,
 and key statistics to engage the user immediately. */
export function Hero() {
  // Helper function to smoothly scroll the page to the "Take Action" section.
  // This uses browser APIs, which is why the component is marked as "use client".
  const scrollToAction = () => {
    const element = document.getElementById("action")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground pt-20"
    >
      {/* Decorative background elements with low opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-accent rotate-12" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-accent -rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-accent rotate-45" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent rounded-full text-sm font-medium">
            {/* Decorative "live" indicator */}
            <span className="text-accent">●</span> Join the Movement
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Intellectual Property Laws Are <span className="text-accent">Holding Us Back</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 text-pretty leading-relaxed max-w-3xl mx-auto">
            Current patent and copyright regimes create massive economic deadweight loss, restrict innovation, and
            impose devastating human costs. It's time for reform.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 hover:cursor-pointer"
              onClick={scrollToAction}
            >
              Take Action Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-transparent hover:cursor-pointer"
              onClick={() => {
                const element = document.getElementById("statistics")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              See the Evidence
            </Button>
          </div>

          {/* Key statistics section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$25B+</div>
              <div className="text-sm text-primary-foreground/70">Annual Deadweight Loss</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">20 Years</div>
              <div className="text-sm text-primary-foreground/70">Average Patent Duration</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10M+</div>
              <div className="text-sm text-primary-foreground/70">Denied Access to Medicine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
