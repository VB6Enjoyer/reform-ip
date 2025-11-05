"use client" // Marks this as a Next.js Client Component (can use hooks, browser APIs)

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Filter, ArrowUpDown, ExternalLink, BookOpen } from "lucide-react"
import { useState, useMemo } from "react"

// Domain model for a library work item shown on the page
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

// Static catalog to render on the Library page.
// TODO Consider moving to a data file or fetching from an API if it grows.
const works: Work[] = [
  {
    id: 1,
    title: "Against Intellectual Monopoly",
    author: "Michele Boldrin & David K. Levine",
    year: 2008,
    publisher: "Cambridge University Press",
    type: "Book",
    description:
      "Comprehensive economic analysis demonstrating that intellectual property laws reduce innovation and economic growth rather than promoting them. Provides historical and empirical evidence across multiple industries.",
    url: "https://cdn.nakamotoinstitute.org/docs/against-intellectual-monopoly.pdf",
  },
  {
    id: 2,
    title: "The Case Against Patents",
    author: "Michele Boldrin & David K. Levine",
    year: 2012,
    publisher: "Journal of Economic Perspectives",
    type: "Article",
    description:
      "Surveys historical evidence showing that industries flourished without patent protection, and that patent systems consistently fail to deliver promised innovation benefits.",
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
    url: "https://lessig.org/product/free-culture/",
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
    url: "https://thepublicdomain.org/thepublicdomain1.pdf",
  },
  {
    id: 5,
    title: "Patents and Copyrights: Do the Benefits Exceed the Costs?",
    author: "Julio H. Cole",
    year: 2001,
    publisher: "Journal of Libertarian Studies",
    type: "Article",
    description:
      "Utilitarian, cost-benefit critique of patents and copyrights. It argues that patents are artificial government-granted monopolies that often hinder innovation, encourage wasteful \"inventing around,\" and distort incentives. It concludes the costs of the patent system likely exceed its overstated benefits.",
    url: "https://mises.org/journal-libertarian-studies/patents-and-copyrights-do-benefits-exceed-costs"
  },
  {
    id: 6,
    title: "Patent Failure: How Judges, Bureaucrats, and Lawyers Put Innovators at Risk",
    author: "James Bessen & Michael J. Meurer",
    year: 2008,
    publisher: "Princeton University Press",
    type: "Book",
    description:
      "Empirical study showing that for most industries, patents decrease innovation incentives due to litigation costs, uncertainty, and blocking effects. Demonstrates the net negative value of the patent system.",
    url: "https://emilkirkegaard.dk/en/wp-content/uploads/James-Bessen-and-Michael-J.-Meurer-Patent-Failure-How-Judges-Bureaucrats-and-Lawyers-Put-Innovators-at-Risk.pdf"
  },
  {
    id: 7,
    title: "Copyright and Innovation: The Untold Story",
    author: "Michael A. Carrier",
    year: 2012,
    publisher: "Wisconsin Law Review",
    type: "Article",
    description:
      "Based on interviews with 31 tech and music executives, this paper documents how the recording industry's legal war on Napster created a 'venture capital wasteland,' stifling digital music innovation for a decade.",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2099876"
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
    author: "Margaret Chon",
    year: 2006,
    publisher: "Cardozo Law Review",
    type: "Article",
    description:
      "Argues that global IP regimes like TRIPS create a 'development divide' by imposing rules that harm developing nations. Proposes a 'substantive equality' principle, drawing from development economics, to ensure IP law is judged on its ability to meet basic human needs like health and education, not just on economic growth.",
    url: "https://www.jurisafrica.org/wp-content/uploads/2021/07/4vii-Margaret-Chon-Intellectual-Property-and-the-Development-Divide.pdf"
  },
  {
    id: 10,
    title: "Do Patents Facilitate Financing in the Software Industry?",
    author: "Ronald J. Mann",
    year: 2005,
    publisher: "Texas Law Review",
    type: "Article",
    description:
      "Finds that patents are irrelevant for securing early-stage software funding but become useful later as defensive assets for cross-licensing, according to interviews with VCs and entrepreneurs.",
    url: "https://scholarship.law.columbia.edu/faculty_scholarship/449"
  },
  {
    id: 11,
    title: "The Private and Social Costs of Patent Trolls",
    author: "James Bessen, Jennifer Ford & Michael J. Meurer",
    year: 2012,
    publisher: "Boston Univ. School of Law, Law and Economics Research Paper",
    type: "Article",
    description:
      "Empirical study measuring the stock market impact of patent troll lawsuits. Finds these suits destroyed half a trillion dollars in wealth from defendant firms, with annual costs exceeding $80 billion, and harm innovation.",
    url: "https://scholarship.law.bu.edu/faculty_scholarship/241"
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
    url: "https://repository.law.umich.edu/cgi/viewcontent.cgi?params=/context/articles/article/1608/&path_info=111HarvLRev621.pdf"
  },
  {
    id: 13,
    title: "Against Intellectual Property",
    author: "Stephan Kinsella",
    year: 2001,
    publisher: "Journal of Libertarian Studies",
    type: "Article",
    description:
      "An analysis into the legal and ethical problems of intellectual property rights, arguing that they depend on state coercion to create artificial scarcities, inhibit innovation and monopolize markets.",
    url: "https://cdn.mises.org/15_2_1.pdf"
  },
]

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("") // Local state for search query text
  const [filterType, setFilterType] = useState<string>("All") // Current type filter; "All" disables type filtering
  // Active sort field and order
  const [sortBy, setSortBy] = useState<"year" | "title" | "author">("year")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const types = ["All", "Book", "Article", "Essay", "Paper", "Report"] // Options for the type filter dropdown

  // Derive the displayed list from the full dataset based on search, filter, and sort.
  // Memoized to avoid unnecessary recomputation when dependencies don't change.
  const filteredAndSortedWorks = useMemo(() => {
    // 1) Filter by search text (case-insensitive) and by selected type
    const filtered = works.filter((work) => {
      // Match on title, author, or description
      const matchesSearch =
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = filterType === "All" || work.type === filterType // Either "All" or exact type match

      return matchesSearch && matchesType
    })

    // 2) Sort the filtered results by the chosen field and order
    filtered.sort((a, b) => {
      let comparison = 0

      if (sortBy === "year") {
        comparison = a.year - b.year // Numeric comparison for years
      } else if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title) // Locale-aware string comparison for titles
      } else if (sortBy === "author") {
        comparison = a.author.localeCompare(b.author) // Locale-aware string comparison for authors
      }

      return sortOrder === "asc" ? comparison : -comparison // Apply ascending or descending order
    })

    return filtered // Return the final list shown in the UI
  }, [searchQuery, filterType, sortBy, sortOrder])

  // Toggle sorting:
  // - Clicking the current field flips the order.
  // - Clicking a different field switches field and defaults to descending.
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
