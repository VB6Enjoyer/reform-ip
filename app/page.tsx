import { Hero } from "@/components/hero"
import { RealTimeImpact } from "@/components/real-time-impact"
import { Statistics } from "@/components/statistics"
import { Research } from "@/components/research"
import { CallToAction } from "@/components/call-to-action"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <RealTimeImpact />
      <Statistics />
      <Research />
      <CallToAction />
      <Footer />
    </main>
  )
}
