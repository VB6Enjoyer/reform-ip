"use client"

import { useEffect, useState } from "react"

interface CounterData {
  label: string
  annualValue: number
  unit: string
  description: string
  source: string
  url?: string
}

const COUNTERS: CounterData[] = [
  {
    label: "Deaths from Lack of Medicine Access",
    annualValue: 10_000_000,
    unit: "lives",
    description: "People who died this year due to lack of access to patented medicines",
    source: "General Assembly of the United Nations (2009)",
    url: "https://web.archive.org/web/20100703093050/http://www2.ohchr.org/english/bodies/hrcouncil/docs/11session/A.HRC.11.12_en.pdf"
  },
  {
    label: "Economic Deadweight Loss",
    annualValue: 25_500_000_000, // $25 billion annual deadweight loss estimate
    unit: "USD",
    description: "(Conservative) economic value destroyed by IP monopolies this year",
    source: "Beard and Ford (2010)",
    url: "https://yjolt.org/quantifying-cost-substandard-patents-some-preliminary-evidence"
  },
  {
    label: "Students Denied Educational Materials",
    annualValue: 365_500_000,
    unit: "students",
    description: "Students unable to access or forced to pirate copyrighted educational materials this year",
    source: "Estimate from various sources",
    url: "https://docs.google.com/document/d/1K5lSiuJuaexcvS0zI3oQ_AE42VKFb6DJoVLdFOob6wU/edit?usp=sharing"
  },
  {
    label: "Patent Applications Filed",
    annualValue: 3_600_000, // ~3.6M patent applications filed globally per year
    unit: "applications",
    description: "New patent monopolies created this year, restricting innovation",
    source: "World Intellectual Property Organization",
    url: "https://www.wipo.int/en/ipfactsandfigures/patents"
  },
]

function formatNumber(num: number, unit: string): string {
  if (unit === "USD") {
    if (num >= 1_000_000_000) {
      return `$${(num / 1_000_000_000).toFixed(2)}B`
    }
    if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(2)}M`
    }
    return `$${num.toLocaleString()}`
  }

  /*if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2)}M`
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`
  }*/
  return num.toLocaleString()
}

function Counter({ data }: { data: CounterData }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Calculate how much time has passed this year
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const msInYear = 365.25 * 24 * 60 * 60 * 1000
    const msSinceYearStart = now.getTime() - startOfYear.getTime()
    const yearProgress = msSinceYearStart / msInYear

    // Calculate initial count based on year progress
    const initialCount = data.annualValue * yearProgress

    // Calculate increment per second
    const incrementPerSecond = data.annualValue / (365.25 * 24 * 60 * 60)

    setCount(initialCount)

    // Update counter every 100ms for smooth animation
    const interval = setInterval(() => {
      setCount((prev) => prev + incrementPerSecond / 10)
    }, 100)

    return () => clearInterval(interval)
  }, [data.annualValue])

  return (
    <div className="relative group">
      <div className="bg-card border-2 border-border hover:border-accent transition-all duration-300 rounded-lg p-6 h-full">
        <div className="text-5xl md:text-6xl font-bold text-accent mb-3 font-mono tabular-nums">
          {formatNumber(Math.floor(count), data.unit)}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">{data.label}</h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{data.description}</p>
        <div className="text-xs text-muted-foreground/70 italic">
          Source:{" "}
          {data.url ? (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              {data.source}
            </a>
          ) : (
            data.source
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

export function RealTimeImpact() {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium">
              <span className="text-accent">●</span> Live Impact Counter
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The Cost of IP <span className="text-accent">Right Now</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              These counters show the real-time impact of intellectual property restrictions in{" "}
              {new Date().getFullYear()}. Every second, the human and economic toll continues to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {COUNTERS.map((counter, index) => (
              <Counter key={index} data={counter} />
            ))}
          </div>

          <div className="bg-destructive/10 border-l-4 border-destructive rounded-lg p-6 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              These numbers are based on peer-reviewed research and official statistics.
            </p>
            <p className="text-muted-foreground">
              The actual impact may be significantly higher due to underreporting and indirect effects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
