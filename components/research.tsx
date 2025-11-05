import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, FileText, GraduationCap, Library } from "lucide-react"
import Link from "next/link"

const researchPapers = [
  {
    title: "Against Intellectual Monopoly",
    authors: "Michele Boldrin & David K. Levine",
    year: "2008",
    publication: "Cambridge University Press",
    summary:
      "Comprehensive economic analysis demonstrating that intellectual property laws reduce innovation and economic growth rather than promoting them. Provides historical and empirical evidence across multiple industries.",
    link: "https://cdn.nakamotoinstitute.org/docs/against-intellectual-monopoly.pdf",
    impact: "Foundational work challenging the economic justification for IP",
  },
  {
    title: "Patent Failure: How Judges, Bureaucrats, and Lawyers Put Innovators at Risk",
    authors: "James Bessen & Michael J. Meurer",
    year: "2008",
    publication: "Princeton University Press",
    summary:
      "Empirical study showing that for most industries, patents decrease innovation incentives due to litigation costs, uncertainty, and blocking effects. Demonstrates the net negative value of the patent system.",
    link: "https://emilkirkegaard.dk/en/wp-content/uploads/James-Bessen-and-Michael-J.-Meurer-Patent-Failure-How-Judges-Bureaucrats-and-Lawyers-Put-Innovators-at-Risk.pdf",
    impact: "Quantifies the actual costs of the patent system",
  },
  {
    title: "The Case Against Patents",
    authors: "Michele Boldrin & David K. Levine",
    year: "2012",
    publication: "Journal of Economic Perspectives",
    summary:
      "Surveys historical evidence showing that industries flourished without patent protection, and that patent systems consistently fail to deliver promised innovation benefits.",
    link: "https://pubs.aeaweb.org/doi/pdfplus/10.1257/jep.27.1.3",
    impact: "Historical evidence against patent necessity",
  },
  {
    title: "Copyright and Innovation: The Untold Story",
    authors: "Michael A. Carrier",
    year: "2012",
    publication: "Wisconsin Law Review",
    summary:
      "Based on interviews with 31 tech and music executives, this paper documents how the recording industry's legal war on Napster created a 'venture capital wasteland,' stifling digital music innovation for a decade.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2099876",
    impact: "Shows the chilling effect of copyright litigation on venture capital and innovation",
  },
  {
    title: "Do Patents Facilitate Financing in the Software Industry?",
    authors: "Ronald J. Mann",
    year: "2005",
    publication: "Texas Law Review",
    summary:
      "Finds that patents are irrelevant for securing early-stage software funding but become useful later as defensive assets for cross-licensing, according to interviews with VCs and entrepreneurs.",
    link: "https://scholarship.law.columbia.edu/faculty_scholarship/449",
    impact: "Empirical evidence showing patents are defensive tools, not prerequisites for startup funding",
  },
  {
    title: "The Private and Social Costs of Patent Trolls",
    authors: "James Bessen, Jennifer Ford & Michael J. Meurer",
    year: "2012",
    publication: "Boston Univ. School of Law, Law and Economics Research Paper",
    summary:
      "Empirical study measuring the stock market impact of patent troll lawsuits. Finds these suits destroyed half a trillion dollars in wealth from defendant firms, with annual costs exceeding $80 billion, and harm innovation.",
    link: "https://scholarship.law.bu.edu/faculty_scholarship/241",
    impact: "Quantifies the massive economic harm of patent trolls",
  },
]

const additionalResources = [
  {
    title: "The Pharmaceutical Industry and Global Health",
    organization: "World Health Organization",
    description: "Reports on access to medicines and the impact of patent protection on global health outcomes",
    icon: GraduationCap,
  },
  {
    title: "Innovation Without Patents",
    organization: "Open Source Initiative",
    description:
      "Case studies of successful innovation in software, pharmaceuticals, and other fields without patent protection",
    icon: FileText,
  },
  {
    title: "Economic Analysis of IP Reform",
    organization: "Federal Reserve Bank Research",
    description: "Economic modeling and empirical studies on the effects of intellectual property policy",
    icon: BookOpen,
  },
]

export function Research() {
  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-accent">Scholarly Evidence</span> for Reform
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Leading economists, legal scholars, and researchers have documented the failures of current IP regimes. This
            isn't ideology—it's evidence-based policy analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 mb-16">
          {researchPapers.map((paper, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all border-l-4 border-l-accent">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-balance">{paper.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-3 text-sm text-muted-foreground">
                    <span className="font-medium">{paper.authors}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                    <span>•</span>
                    <span className="italic">{paper.publication}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{paper.summary}</p>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {paper.impact}
                    </div>

                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">Read Now</a>
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            <Link href="/library" className="gap-3">
              <Library size={22} />
              Explore the Full Library
            </Link>
          </Button>
        </div>

        {/*<div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Research Resources</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold mb-2 text-balance">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                  <div className="text-xs font-medium text-accent">{resource.organization}</div>
                </Card>
              )
            })}
          </div>
        </div>*/}
      </div>
    </section>
  )
}
