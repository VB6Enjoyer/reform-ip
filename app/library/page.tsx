"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Filter, ArrowUpDown, ExternalLink, BookOpen } from "lucide-react"
import { useState, useMemo } from "react"

type Work = {
  id: number
  title: string
  author: string
  year: number
  publisher: string
  type: "Book" | "Article" | "Essay" | "Paper" | "Report"
  description: string
  url?: string
}

const works: Work[] = [
  {
    id: 1,
    title: "Against Intellectual Monopoly",
    author: "Michele Boldrin & David K. Levine",
    year: 2008,
    publisher: "Cambridge University Press",
    type: "Book",
    description:
      "A comprehensive economic analysis arguing that intellectual property laws restrict innovation and economic growth. The authors present empirical evidence showing that patents and copyrights create monopolies that harm society more than they help.",
    url: "https://levine.sscnet.ucla.edu/general/intellectual/against.htm",
  },
  {
    id: 2,
    title: "The Case Against Patents",
    author: "Bessen & Meurer",
    year: 2008,
    publisher: "Journal of Economic Perspectives",
    type: "Article",
    description:
      "Empirical research demonstrating that for most industries, patents fail to provide net social benefits. The study shows that patent litigation costs exceed innovation benefits in many sectors.",
  },
  {
    id: 3,
    title: "Free Culture: How Big Media Uses Technology and the Law to Lock Down Culture",
    author: "Lawrence Lessig",
    year: 2004,
    publisher: "Penguin Press",
    type: "Book",
    description:
      "A seminal work examining how copyright law has been extended and strengthened to benefit large corporations at the expense of creativity, innovation, and the public domain.",
    url: "https://www.free-culture.cc/",
  },
  {
    id: 4,
    title: "The Public Domain: Enclosing the Commons of the Mind",
    author: "James Boyle",
    year: 2008,
    publisher: "Yale University Press",
    type: "Book",
    description:
      "An exploration of how intellectual property expansion threatens the public domain and limits access to knowledge, culture, and innovation. Boyle argues for a more balanced approach to IP.",
    url: "https://www.thepublicdomain.org/",
  },
  {
    id: 5,
    title: "Do Patents Discourage Innovation? Evidence from the Life Sciences",
    author: "Heidi L. Williams",
    year: 2013,
    publisher: "Journal of Political Economy",
    type: "Paper",
    description:
      "Empirical study showing that gene patents have significantly slowed follow-on innovation in genomics research, with a 20-30% reduction in subsequent scientific research and product development.",
  },
  {
    id: 6,
    title: "The Cost of Monopoly: Pharmaceutical Patents and Access to Medicine",
    author: "Dean Baker",
    year: 2016,
    publisher: "Center for Economic and Policy Research",
    type: "Report",
    description:
      "Analysis estimating that pharmaceutical patents cost the US economy over $400 billion annually and result in tens of thousands of preventable deaths due to lack of access to affordable medicines.",
  },
  {
    id: 7,
    title: "Copyright and Inequality",
    author: "Matthew Sag",
    year: 2019,
    publisher: "Washington University Law Review",
    type: "Article",
    description:
      "Examination of how copyright law exacerbates economic inequality by concentrating wealth among a small number of rights holders while limiting access to knowledge and culture for the broader public.",
  },
  {
    id: 8,
    title: "The Myth of the Sole Inventor",
    author: "Mark A. Lemley",
    year: 2012,
    publisher: "Michigan Law Review",
    type: "Article",
    description:
      "Historical analysis showing that most major inventions were developed simultaneously by multiple inventors, challenging the patent system's premise that exclusive rights are necessary to incentivize innovation.",
  },
  {
    id: 9,
    title: "Intellectual Property and the Development Divide",
    author: "Keith E. Maskus",
    year: 2000,
    publisher: "World Bank Publications",
    type: "Report",
    description:
      "Study examining how strong IP protection in developed countries creates barriers for developing nations, limiting technology transfer and access to essential medicines and educational materials.",
  },
  {
    id: 10,
    title: "The Innovation Delusion: How Our Obsession with the New Has Disrupted the Work That Matters Most",
    author: "Lee Vinsel & Andrew L. Russell",
    year: 2020,
    publisher: "Currency",
    type: "Book",
    description:
      "Critique of innovation-centric thinking and patent systems, arguing that maintenance and incremental improvement are undervalued compared to patentable 'breakthrough' innovations.",
  },
  {
    id: 11,
    title: "Patent Failure: How Judges, Bureaucrats, and Lawyers Put Innovators at Risk",
    author: "James Bessen & Michael J. Meurer",
    year: 2008,
    publisher: "Princeton University Press",
    type: "Book",
    description:
      "Detailed analysis of the US patent system showing how unclear property rights and excessive litigation costs harm innovation, particularly for small businesses and individual inventors.",
  },
  {
    id: 12,
    title: "The Tragedy of the Anticommons: Property in the Transition from Marx to Markets",
    author: "Michael Heller",
    year: 1998,
    publisher: "Harvard Law Review",
    type: "Article",
    description:
      "Introduces the concept of the 'anticommons' where too many property rights can lead to underuse of resources, directly applicable to patent thickets and copyright restrictions.",
  },
]

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<string>("All")
  const [sortBy, setSortBy] = useState<"year" | "title" | "author">("year")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const types = ["All", "Book", "Article", "Essay", "Paper", "Report"]

  const filteredAndSortedWorks = useMemo(() => {
    const filtered = works.filter((work) => {
      const matchesSearch =
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = filterType === "All" || work.type === filterType
      return matchesSearch && matchesType
    })

    filtered.sort((a, b) => {
      let comparison = 0
      if (sortBy === "year") {
        comparison = a.year - b.year
      } else if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title)
      } else if (sortBy === "author") {
        comparison = a.author.localeCompare(b.author)
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [searchQuery, filterType, sortBy, sortOrder])

  const toggleSort = (field: "year" | "title" | "author") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <BookOpen size={20} />
              <span className="font-semibold">IP Reform Library</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Essential Works on Intellectual Property Reform
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              A curated collection of books, articles, essays, and research papers examining the costs and consequences
              of intellectual property laws.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Search by title, author, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-muted-foreground" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 rounded-md border border-input bg-background"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <ArrowUpDown size={16} />
                Sort by:
              </span>
              <Button
                variant={sortBy === "year" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleSort("year")}
                className={sortBy === "year" ? "bg-accent hover:bg-accent/90" : ""}
              >
                Year {sortBy === "year" && (sortOrder === "asc" ? "↑" : "↓")}
              </Button>
              <Button
                variant={sortBy === "title" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleSort("title")}
                className={sortBy === "title" ? "bg-accent hover:bg-accent/90" : ""}
              >
                Title {sortBy === "title" && (sortOrder === "asc" ? "↑" : "↓")}
              </Button>
              <Button
                variant={sortBy === "author" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleSort("author")}
                className={sortBy === "author" ? "bg-accent hover:bg-accent/90" : ""}
              >
                Author {sortBy === "author" && (sortOrder === "asc" ? "↑" : "↓")}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Showing {filteredAndSortedWorks.length} of {works.length} works
            </p>
          </div>

          {/* Works List */}
          <div className="max-w-6xl mx-auto space-y-6">
            {filteredAndSortedWorks.map((work) => (
              <Card key={work.id} className="p-6 hover:border-accent transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {work.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{work.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-balance">{work.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      <span className="font-semibold">{work.author}</span> • {work.publisher}
                    </p>
                    <p className="text-sm leading-relaxed text-pretty">{work.description}</p>
                  </div>
                  {work.url && (
                    <Button asChild variant="outline" className="shrink-0 bg-transparent">
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}

            {filteredAndSortedWorks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No works found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
