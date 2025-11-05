import React from "react"
import { Card } from "@/components/ui/card"
import { TrendingDown, Users, DollarSign, AlertTriangle, Scale, Globe } from "lucide-react"

type Source = {
  name: string
  url?: string
}

const statistics: {
  icon: typeof DollarSign
  value: string
  label: string
  description: string
  sources: Source[]
  color: string
}[] = [
    {
      icon: DollarSign,
      value: "$25.5 Billion+",
      label: "Annual Deadweight Loss",
      description: "Economic inefficiency caused by monopoly pricing in patent-protected markets",
      sources: [
        {
          name: "Beard and Ford, Yale Journal of Law and Technology (2010)",
          url: "https://yjolt.org/quantifying-cost-substandard-patents-some-preliminary-evidence",
        },
      ],
      color: "text-accent",
    },
    {
      icon: Users,
      value: "10 Million+",
      label: "Lives Lost Annually",
      description: "Deaths in developing countries due to lack of access to patented medicines",
      sources: [
        {
          name: "General Assembly of the United Nations (2009)",
          url: "https://web.archive.org/web/20100703093050/http://www2.ohchr.org/english/bodies/hrcouncil/docs/11session/A.HRC.11.12_en.pdf",
        },
      ],
      color: "text-accent",
    },
    {
      icon: TrendingDown,
      value: "12%-20+%",
      label: "Innovation Reduction",
      description: "Decrease in follow-on innovation due to patent thickets and blocking patents",
      sources: [
        {
          name: "Bessen & Meurer (2008)",
          url: "https://emilkirkegaard.dk/en/wp-content/uploads/James-Bessen-and-Michael-J.-Meurer-Patent-Failure-How-Judges-Bureaucrats-and-Lawyers-Put-Innovators-at-Risk.pdf"
        },
        {
          name: "Boldrin & Levine (2008)",
          url: "https://cdn.nakamotoinstitute.org/docs/against-intellectual-monopoly.pdf"
        }],
      color: "text-accent",
    },
    {
      icon: Scale,
      value: "$80B+",
      label: "Annual Litigation Costs",
      description: "Direct costs of patent litigation in the US from patent trolls alone",
      sources: [
        {
          name: "Vuleta (2023)",
          url: "https://ia601506.us.archive.org/10/items/25-patent-litigation-statistics-high-profile-feuds-about-intellectual-property/EX2009%20-%20Patent%20Litigation%20Statistics.pdf"
        }
      ],
      color: "text-accent",
    },
    {
      icon: AlertTriangle,
      value: "64%",
      label: "Patent Troll Cases",
      description: "Percentage of patent lawsuits filed by non-practicing entities seeking rent in 2022. Up 500% since 2013.",
      sources: [
        {
          name: "Electronic Frontier Foundation (2022)",
          url: "https://www.eff.org/deeplinks/2022/12/seeing-patent-trolls-clearly-2022-review"
        },
        {
          name: "Vuleta (2023)",
          url: "https://ia601506.us.archive.org/10/items/25-patent-litigation-statistics-high-profile-feuds-about-intellectual-property/EX2009%20-%20Patent%20Litigation%20Statistics.pdf"
        }
      ],
      color: "text-accent",
    },
    {
      icon: Globe,
      value: "70+ Years",
      label: "Copyright Duration",
      description: "Life of author plus 50 or 70 years in most countries - far exceeding any reasonable incentive period",
      sources: [
        {
          name: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/List_of_copyright_duration_by_country",

        }
      ],
      color: "text-accent",
    },
  ]

export function Statistics() {
  return (
    <section id="statistics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The <span className="text-accent">Devastating Cost</span> of IP Monopolies
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Current intellectual property regimes impose massive economic and human costs on society. These statistics
            reveal the true price we pay for overly restrictive IP laws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className={`${stat.color} w-6 h-6`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{stat.description}</p>
                    <div className="text-xs text-muted-foreground italic border-l-2 border-accent pl-2">
                      Source{stat.sources.length > 1 ? "s" : ""}:{" "}
                      {stat.sources.map((source, i) => (
                        <React.Fragment key={i}>
                          {source.url ? (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-accent transition-colors"
                            >
                              {source.name}
                            </a>
                          ) : (
                            source.name
                          )}
                          {i < stat.sources.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-primary text-primary-foreground border-none">
            <h3 className="text-2xl font-bold mb-4 text-balance">Understanding Deadweight Loss</h3>
            <p className="text-primary-foreground/90 leading-relaxed mb-4">
              Deadweight loss represents the economic value destroyed when monopoly pricing (enabled by patents and
              copyrights) prevents mutually beneficial transactions. When a life-saving drug costs $1,000 but could be
              produced for $10, everyone who would pay between $10 and $1,000 is denied access—creating pure economic
              waste.
            </p>
            <p className="text-primary-foreground/90 leading-relaxed">
              This isn't just theory. Real people die, innovations are blocked, and society loses trillions in potential
              value—all to maintain artificial scarcity in information goods that could be freely copied at near-zero
              cost.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
