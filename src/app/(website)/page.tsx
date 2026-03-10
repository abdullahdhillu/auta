"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { MessageSquare, Zap, BarChart3, Reply } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Keyword-triggered DM responses",
      "Up to 100 automated replies",
      "Basic analytics dashboard",
      "Unlimited keyword responses",
      "Automated comment replies",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 1,000 automated replies",
      "Advanced analytics & insights",
      "AI-powered smart responses",
      "Priority support",
      "Custom response templates",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Everything in Pro",
      "Unlimited automated replies",
      "Dedicated account manager",
      "Custom AI training",
      "API access",
      "White-label options",
    ],
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Keyword-Triggered DMs",
    description:
      "Automatically respond when leads send a DM with specific keywords. Set up custom triggers for any word or phrase.",
  },
  {
    icon: Zap,
    title: "AI-Powered Responses",
    description:
      "Let AI craft intelligent, contextual replies that feel personal and drive conversions.",
  },
  {
    icon: Reply,
    title: "Comment Automation",
    description:
      "Trigger automations when users comment on your videos. Like and reply to comments seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track engagement metrics, response rates, and conversion data all in one place.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <main>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold italic text-foreground">
              Auta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Pricing
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground">
                Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="#">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Support</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" size="sm">
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button size="sm">Start</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
                <Button size="sm" className="w-full">
                  Start
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-background pb-0 pt-16 md:pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Turn Instagram messages into sales
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Auta automates your Instagram engagement. Respond to DMs with AI,
              reply to comments instantly, and convert followers into customers
              without lifting a finger.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="min-w-[120px]">
                Start
              </Button>
              <Button variant="outline" size="lg" className="min-w-[120px]">
                Learn
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative mt-12 md:mt-16">
            <div className="flex items-end justify-center gap-4 md:gap-8">
              {/* Left Image */}
              <div className="relative hidden h-[280px] w-[200px] overflow-hidden rounded-t-2xl shadow-lg sm:block md:h-[320px] md:w-[240px] lg:h-[380px] lg:w-[280px]">
                <Image
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=800&fit=crop"
                  alt="Person working at desk with plants"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Center Image */}
              <div className="relative h-[240px] w-[180px] overflow-hidden rounded-t-2xl shadow-lg sm:h-[300px] sm:w-[220px] md:h-[340px] md:w-[260px] lg:h-[400px] lg:w-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                  alt="Team collaborating together"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right Image */}
              <div className="relative hidden h-[280px] w-[200px] overflow-hidden rounded-t-2xl shadow-lg sm:block md:h-[320px] md:w-[240px] lg:h-[380px] lg:w-[280px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop"
                  alt="Professional on a call"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted to-transparent" />
          </div>
        </div>
      </section>

      <section id="features" className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Features
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything you need to automate Instagram
            </h2>
            <p className="mt-4 text-muted-foreground">
              Streamline your Instagram interactions and turn engagement into
              opportunity.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-background shadow-sm">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted-foreground">Plans</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the plan that fits your business
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-lg border bg-background p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  billingCycle === "monthly"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  billingCycle === "yearly"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative flex flex-col",
                  plan.popular && "border-primary ring-1 ring-primary",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {plan.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </span>
                    <span className="ml-1 text-muted-foreground">
                      per month
                    </span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Billed annually
                    </p>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
