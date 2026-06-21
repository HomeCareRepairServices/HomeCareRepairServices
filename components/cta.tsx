import Link from "next/link"
import { type ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig, whatsappLink } from "@/lib/site"

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.1em]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90",
        whatsapp: "bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5a]",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

type CtaLinkProps = ComponentProps<typeof Link> & VariantProps<typeof ctaVariants>

export function CtaLink({ className, variant, size, ...props }: CtaLinkProps) {
  return <Link className={cn(ctaVariants({ variant, size }), className)} {...props} />
}

export function CallButton({
  size = "md",
  className,
  label = "Call Now",
}: {
  size?: VariantProps<typeof ctaVariants>["size"]
  className?: string
  label?: string
}) {
  return (
    <a href={siteConfig.phoneHref} className={cn(ctaVariants({ variant: "primary", size }), className)}>
      <Phone />
      {label}
    </a>
  )
}

export function WhatsAppButton({
  size = "md",
  className,
  label = "WhatsApp Now",
  message,
}: {
  size?: VariantProps<typeof ctaVariants>["size"]
  className?: string
  label?: string
  message?: string
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(ctaVariants({ variant: "whatsapp", size }), className)}
    >
      <MessageCircle />
      {label}
    </a>
  )
}
