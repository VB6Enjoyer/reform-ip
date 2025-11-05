"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Share2, Users, FileText, Megaphone } from "lucide-react"
import { useState } from "react"

// CTA cards
const actions = [
  {
    icon: Mail,
    title: "Contact Your Representatives",
    description:
      "Email or call your elected officials to demand IP reform. We provide templates and contact information.",
    action: "Get Templates",
    unavailable: true
  },
  {
    icon: FileText,
    title: "Sign the Petition",
    description: "Add your voice to thousands calling for patent and copyright reform. Every signature matters.",
    action: "Sign Now",
    unavailable: true
  },
  {
    icon: Share2,
    title: "Share the Evidence",
    description: "Spread awareness on social media. Share statistics and research to educate others.",
    action: "Share",
    unavailable: true
  },
  {
    icon: Users,
    title: "Join Local Groups",
    description: "Connect with activists in your area working on IP reform and related issues.",
    action: "Find Groups",
    unavailable: true
  },
  {
    icon: Megaphone,
    title: "Organize Events",
    description: "Host educational events, debates, or protests to raise awareness in your community.",
    action: "Get Resources",
    unavailable: true
  },
  {
    icon: Phone,
    title: "Support Reform Organizations",
    description: "Donate to or volunteer with organizations actively working on IP policy reform.",
    action: "Learn More",
    unavailable: true
  },
]

export function CallToAction() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO Handle form submission
    console.log("Form submitted:", { email, message })
  }

  return (
    <section id="action" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-accent">Take Action</span> Today
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Change happens when people act. Here's how you can join the movement for intellectual property reform and
            help create a more innovative, equitable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:border-accent/50 border-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-balance">{action.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{action.description}</p>
                <Button
                  disabled={action.unavailable}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                >
                  {action.unavailable ? "Coming soon" : action.action}
                </Button>
              </Card>
            )
          })}
        </div>
        {/*
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-primary text-primary-foreground border-none">
            <h3 className="text-2xl font-bold mb-4 text-center">Stay Informed</h3>
            <p className="text-primary-foreground/90 mb-6 text-center leading-relaxed">
              Join our mailing list to receive updates on IP reform efforts, new research, and opportunities to take
              action.
            </p>


            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us why you support IP reform (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-h-24"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
                Join the Movement
              </Button>
            </form>

            <p className="text-xs text-primary-foreground/60 text-center mt-4">
              We respect your privacy. Your information will never be shared.
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent rounded-full">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-semibold">
              <span className="text-accent">12,847</span> people have joined this week
            </span>
          </div>
        </div>*/}
      </div>
    </section >
  )
}
