"use client"

import { Clock, Phone, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SilverGlowCard } from "@/components/silver-glow-card"

const steps = [
  {
    icon: Phone,
    title: "Book by Call or WhatsApp",
    description: "Reach us fast and tell us your appliance issue. We confirm your visit instantly.",
  },
  {
    icon: Clock,
    title: "Same-Day Technician",
    description: "Our verified technician arrives on the same day, ready with tools and spare parts.",
  },
  {
    icon: CheckCircle2,
    title: "Pay After Work",
    description: "You pay only after the repair or installation is complete and you are satisfied.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How It Works"
          title="Fast, simple service in just three steps"
          description="From booking to finish, our process is designed to be easy, transparent and reliable for every home."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <SilverGlowCard className="h-full p-6">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                    <step.icon className="size-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </SilverGlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
