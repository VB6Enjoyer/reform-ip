"use client" // Marks this as a Next.js Client Component (can use hooks, browser APIs)

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Users, BookOpen, Scale, Newspaper, GraduationCap, Rss } from "lucide-react"

// Define the TypeScript type for a single resource item.
type Resource = {
  id: number
  name: string
  url: string
  description: string
  category: "Organization" | "Research" | "Legal" | "News" | "Education" | "Community" | "Blog"
  icon: typeof Globe // TODO Note: This could be typed more generically as `React.ElementType` or `LucideIcon` if you import it.
}

// Static catalog to render on the Resources page.
// TODO Consider moving to a data file or fetching from an API if it grows.
const resources: Resource[] = [
  {
    id: 1,
    name: "Electronic Frontier Foundation (EFF)",
    url: "https://www.eff.org",
    description:
      "Leading nonprofit defending civil liberties in the digital world, with extensive work on copyright reform, fair use, and patent trolls.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 2,
    name: "Public Knowledge",
    url: "https://www.publicknowledge.org/",
    description:
      "Advocacy organization working to defend rights in the digital age, focusing on copyright reform and access to knowledge.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 3,
    name: "Creative Commons",
    url: "https://creativecommons.org/",
    description:
      "Global nonprofit enabling sharing and reuse of creativity and knowledge through free legal tools, providing alternatives to traditional copyright.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 4,
    name: "Question Copyright",
    url: "https://questioncopyright.org/",
    description:
      "Organization dedicated to raising awareness about the problems with copyright law and promoting alternatives that better serve creators and the public.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 5,
    name: "Center for the Study of Innovative Freedom",
    url: "https://c4sif.org/",
    description:
      "Blog focused on research and arguments against intellectual property from a libertarian perspective.",
    category: "Blog",
    icon: Rss,
  },
  {
    id: 6,
    name: "The Public Domain",
    url: "https://www.thepublicdomain.org/",
    description:
      "James Boyle's comprehensive work on intellectual property and the public domain, available free online with extensive resources.",
    category: "Research",
    icon: BookOpen,
  },
  {
    id: 7,
    name: "Center for Economic and Policy Research",
    url: "https://cepr.net/topics/intellectual-property/",
    description:
      "Progressive think tank producing research on the economic impacts of intellectual property, particularly pharmaceutical patents.",
    category: "Research",
    icon: BookOpen,
  },
  {
    id: 8,
    name: "Knowledge Ecology International",
    url: "https://www.keionline.org/",
    description:
      "Organization focused on access to medicines and knowledge goods, tracking international IP policy and pharmaceutical patents.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 9,
    name: "Techdirt",
    url: "https://www.techdirt.com/",
    description:
      "Technology news site with extensive coverage of intellectual property issues, patent trolls, copyright abuse, and innovation policy.",
    category: "News",
    icon: Newspaper,
  },
  {
    id: 10,
    name: "Ars Technica",
    url: "https://arstechnica.com/",
    description:
      "Technology news site with in-depth coverage of IP law, patent litigation, copyright policy, and digital rights.",
    category: "News",
    icon: Newspaper,
  },
  {
    id: 11,
    name: "GNU Project",
    url: "https://www.gnu.org/",
    description:
      "Extensive collection of collaborative free software licensed under the General Public License (GPL).",
    category: "Community",
    icon: Newspaper,
  },
  {
    id: 12,
    name: "Stanford Center for Internet and Society",
    url: "https://cyberlaw.stanford.edu/",
    description:
      "Academic center conducting research and teaching on law and technology, including extensive work on IP reform.",
    category: "Education",
    icon: GraduationCap,
  },
  {
    id: 13,
    name: "Berkman Klein Center for Internet & Society",
    url: "https://cyber.harvard.edu/",
    description:
      "Harvard research center studying the Internet and society, with significant focus on copyright, patents, and access to knowledge.",
    category: "Education",
    icon: GraduationCap,
  },
  {
    id: 14,
    name: "IP Justice",
    url: "https://www.ipjustice.org/",
    description:
      "International civil liberties organization fighting for balanced intellectual property laws and against IP enforcement overreach.",
    category: "Legal",
    icon: Scale,
  },
  {
    id: 15,
    name: "Medicines, Law & Policy",
    url: "https://medicineslawandpolicy.org/",
    description:
      "Organization working to improve access to medicines by reforming patent laws and promoting generic competition.",
    category: "Legal",
    icon: Scale,
  },
  {
    id: 16,
    name: "Free Software Foundation",
    url: "https://www.fsf.org/",
    description:
      "Organization promoting computer user freedom and defending free software rights against restrictive copyright and patent claims.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 17,
    name: "Open Source Initiative",
    url: "https://opensource.org/",
    description:
      "Organization promoting and protecting open source software, demonstrating successful alternatives to proprietary IP models.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 18,
    name: "Reddit - r/Piracy",
    url: "https://www.reddit.com/r/Piracy/",
    description:
      "Community discussing copyright issues, digital rights, and access to information from a critical perspective.",
    category: "Community",
    icon: Globe,
  },
  {
    id: 19,
    name: "Creative Commons",
    url: "https://creativecommons.org/",
    description:
      "International non-profit organization devoted to educational access and expanding the range of creative works available for others to build upon legally and to share.",
    category: "Organization",
    icon: Users,
  },
  {
    id: 20,
    name: "Internet Archive",
    url: "https://archive.org/",
    description:
      "Online non-profit organization with a community library of billions of media and websites, often targeted by copyright claims.",
    category: "Organization",
    icon: Users,
  }
]

// Define a constant array of all possible categories for filtering.
const categories = ["All", "Organization", "Research", "Legal", "News", "Education", "Community", "Blog"] as const

/**
 * The main React component for the Resources page.
 * It displays a filterable list of external resources related to IP reform.
 */
export default function ResourcesPage() {
  // State to manage the currently selected filter category. Defaults to "All".
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All")

  // A helper function to retrieve the appropriate icon component for a given category.
  const getCategoryIcon = (category: Resource["category"]): typeof Globe => {
    switch (category) {
      case "Organization":
        return Users
      case "Research":
        return BookOpen
      case "Legal":
        return Scale
      case "News":
        return Newspaper
      case "Education":
        return GraduationCap
      case "Community":
        return Globe
      case "Blog":
        return Rss
    }
  }

  // Memoize the filtered list of resources. It re-calculates only when the selected category changes.
  const filteredResources =
    selectedCategory === "All" ? resources : resources.filter((r) => r.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <Globe size={20} />
              <span className="font-semibold">External Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Organizations & Resources Fighting for IP Reform
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Connect with organizations, research centers, news sources, and communities working to reform intellectual
              property laws and expand access to knowledge.
            </p>
          </div>

          {/* Category Filter */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>

          {/* Resources Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => {
              const Icon = getCategoryIcon(resource.category)
              return (
                <Card key={resource.id} className="p-6 hover:border-accent transition-colors flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded mb-2">
                        {resource.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-balance">{resource.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4 flex-1 text-pretty">{resource.description}</p>
                  <Button asChild className="bg-accent hover:bg-accent/90 w-full">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Visit Website
                    </a>
                  </Button>
                </Card>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
