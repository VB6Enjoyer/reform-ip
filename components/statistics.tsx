import { Card } from "@/components/ui/card"
import { TrendingDown, Users, DollarSign, AlertTriangle, Scale, Globe } from "lucide-react"

const statistics = [
  {
    icon: DollarSign,
    value: "$1 Trillion+",
    label: "Annual Deadweight Loss",
    description: "Economic inefficiency caused by monopoly pricing in patent-protected markets",
    source: "Boldrin & Levine (2008)",
    color: "text-accent",
  },
  {
    icon: Users,
    value: "10 Million",
    label: "Lives Lost Annually",
    description: "Deaths in developing countries due to lack of access to patented medicines",
    source: "WHO Global Health Reports",
    color: "text-accent",
  },
  {
    icon: TrendingDown,
    value: "25-40%",
    label: "Innovation Reduction",
    description: "Decrease in follow-on innovation due to patent thickets and blocking patents",
    source: "Bessen & Meurer (2008)",
    color: "text-accent",
  },
  {
    icon: Scale,
    value: "$4.5B",
    label: "Annual Litigation Costs",
    description: "Direct costs of patent litigation in the US alone, not including settlements",
    source: "American Intellectual Property Law Association",
    color: "text-accent",
  },
  {
    icon: AlertTriangle,
    value: "95%",
    label: "Patent Troll Cases",
    description: "Percentage of patent lawsuits filed by non-practicing entities seeking rent",
    source: "Stanford Law Review (2015)",
    color: "text-accent",
  },
  {
    icon: Globe,
    value: "70+ Years",
    label: "Copyright Duration",
    description: "Life of author plus 70 years - far exceeding any reasonable incentive period",
    source: "Berne Convention & US Copyright Law",
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
                      Source: {stat.source}
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
