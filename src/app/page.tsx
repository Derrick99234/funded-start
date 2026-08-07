import Image from "next/image";
import MobileNav from "@/components/mobile-nav";

const navLinks = [
  { label: "I'm an Investor", href: "#" },
  { label: "I'm a Founder", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Evidence", href: "#" },
];

const problemCards = [
  {
    icon: "rocket_launch",
    iconBg: "bg-brand-navy/10",
    iconText: "text-brand-navy",
    title: "For Founders",
    body: "Accessing early-stage capital is a significant hurdle. Traditional routes often involve long, opaque processes that distract from building the product. We provide a streamlined path to community-backed funding.",
  },
  {
    icon: "trending_up",
    iconBg: "bg-brand-emerald/10",
    iconText: "text-brand-emerald",
    title: "For Investors",
    body: "Early-stage African startup opportunities are typically gated behind high minimums and exclusive networks. We democratize access, allowing you to back promising ventures with smaller ticket sizes.",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    numberBg: "bg-brand-navy",
    title: "Discover",
    body: "Browse vetted, early-stage African startups seeking community backing.",
  },
  {
    number: "02",
    numberBg: "bg-brand-emerald",
    title: "Invest",
    body: "Contribute alongside others with accessible minimum ticket sizes.",
  },
  {
    number: "03",
    numberBg: "bg-brand-navy",
    title: "Grow Together",
    body: "Share in the upside as the company builds and scales its vision.",
  },
];

const whyCards = [
  {
    icon: "payments",
    iconBg: "bg-brand-navy/10",
    iconText: "text-brand-navy",
    title: "Small tickets",
    body: "Invest an amount appropriate to your own risk appetite.",
  },
  {
    icon: "group_add",
    iconBg: "bg-brand-emerald/10",
    iconText: "text-brand-emerald",
    title: "More investors",
    body: "A startup can raise capital from a broad community rather than relying on a single large investor.",
  },
  {
    icon: "pie_chart",
    iconBg: "bg-brand-emerald/10",
    iconText: "text-brand-emerald",
    title: "Shared risk",
    body: "Individuals can potentially spread their investments across multiple early-stage businesses.",
  },
  {
    icon: "travel_explore",
    iconBg: "bg-brand-navy/10",
    iconText: "text-brand-navy",
    title: "Access to opportunities",
    body: "Discover early-stage African businesses that may otherwise be difficult for individual investors to access.",
  },
];

const stats = [
  {
    value: "$3.3B",
    color: "text-brand-emerald",
    label: "African Startup Funding in 2022",
  },
  {
    value: "82%",
    color: "text-brand-navy",
    label: "Of funding goes to just 4 countries",
  },
  {
    value: "<10%",
    color: "text-brand-emerald",
    label: "Founders raise their desired seed rounds",
  },
];

const evidenceCards = [
  {
    org: "Partech Partners",
    title: "Africa Tech Venture Capital Report",
    body: "Comprehensive overview of the African tech ecosystem's funding landscape and growth trends.",
    date: "Jan 2023",
  },
  {
    org: "IFC",
    title: "Venture Capital in Africa",
    body: "Analysis of the opportunities and challenges in early-stage financing across the continent.",
    date: "Nov 2022",
  },
  {
    org: "World Bank",
    title: "Financing African Startups",
    body: "Examining the structural barriers preventing adequate capital flow to innovative African firms.",
    date: "Mar 2023",
  },
  {
    org: "Briter Bridges",
    title: "The Missing Middle",
    body: "Highlighting the crucial funding gap between seed stage and Series A for African entrepreneurs.",
    date: "Jul 2023",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <nav className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto h-20">
          <a className="flex items-center gap-2" href="#">
            <Image
              className="h-10 w-auto object-contain"
              src="/Fundedstart stitch logo.png"
              alt="FundedStart logo featuring a dark navy blue letter F merging into an upward pointing emerald green arrow"
              width={512}
              height={154}
            />
          </a>
          <div className="hidden md:flex gap-gutter items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-brand-emerald text-white hover:bg-brand-emerald-hover px-sm py-xs rounded font-label-md text-label-md transition-transform duration-150 hover:scale-95">
              Join Waitlist
            </button>
            <MobileNav />
          </div>
        </div>
      </nav>

      <header className="w-full px-margin-mobile md:px-margin-desktop py-xl md:py-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-xl">
        <div className="flex-1 flex flex-col gap-md text-center md:text-left">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-brand-navy leading-tight">
            Bet on Africa&apos;s next generation of great companies.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
            Invest in promising African startups at the early stages, while
            giving founders the capital they need to build what comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center md:justify-start pt-sm">
            <button className="bg-brand-emerald text-white hover:bg-brand-emerald-hover px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
              I&apos;m an Investor
            </button>
            <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
              I&apos;m a Founder
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-surface-container-high rounded-xl rotate-3 scale-105 opacity-50"></div>
          <Image
            className="relative z-10 w-full h-auto rounded-xl shadow-lg border border-outline-variant object-cover aspect-[4/3]"
            src="/Fundedstart stitch hero.jpg"
            alt="A modern, abstract 3D illustration showing ascending charts, a glowing green upward arrow, and stylized nodes connecting, representing growth and venture capital investment in a bright, clean corporate style"
            width={512}
            height={279}
          />
        </div>
      </header>

      <section className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              Great ideas don&apos;t always fail because they&apos;re bad
              ideas. Sometimes they run out of money before they get the chance
              to prove themselves.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter mb-lg">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center mb-sm`}
                >
                  <span className={`material-symbols-outlined ${card.iconText}`}>
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-brand-navy mb-xs">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-headline-md text-headline-md text-brand-emerald">
              We&apos;re building the bridge between the two.
            </p>
          </div>
        </div>
      </section>

      <section className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/30 -z-10 -translate-y-1/2"></div>
            {howItWorksSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm z-10"
              >
                <div
                  className={`w-16 h-16 rounded-full ${step.numberBg} text-on-primary flex items-center justify-center font-headline-md text-headline-md mb-sm shadow-md`}
                >
                  {step.number}
                </div>
                <h3 className="font-headline-md text-headline-md text-brand-navy mb-xs">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-xl bg-primary-container text-on-primary rounded-xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg shadow-lg">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md mb-xs">
                The Power of the Crowd
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                Small contributions aggregate into significant runway for
                founders.
              </p>
            </div>
            <div className="bg-surface/10 border border-surface/20 rounded-lg p-md flex flex-wrap items-center justify-center gap-sm max-w-full">
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-fixed">
                200
              </span>
              <span className="font-body-md text-body-md text-surface-variant">
                people
              </span>
              <span className="material-symbols-outlined text-surface-variant">
                close
              </span>
              <span className="font-headline-md text-headline-md text-secondary-fixed">
                ₦100k
              </span>
              <span className="material-symbols-outlined text-surface-variant">
                drag_handle
              </span>
              <span className="font-display-lg text-display-lg text-tertiary-fixed-dim">
                ₦20M
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              You don&apos;t need millions to invest in Africa&apos;s future.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We&apos;re creating a way for more people to participate in the
              growth of African startups without needing to be a traditional
              venture capitalist.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter mb-lg">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center mb-sm`}
                >
                  <span
                    className={`material-symbols-outlined ${card.iconText} text-[20px]`}
                  >
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-brand-navy mb-xs">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-sm">
            <p className="font-caption text-caption text-outline">
              Early-stage startup investing is high risk. You can lose some or
              all of your investment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              The funding gap is real.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-lg mb-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`font-display-lg text-display-lg ${stat.color} mb-xs`}
                >
                  {stat.value}
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant max-w-[200px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md">
            {evidenceCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col h-full"
              >
                <div className="font-label-md text-label-md text-brand-navy opacity-70 mb-xs">
                  {card.org}
                </div>
                <h4 className="font-headline-md text-headline-md text-[18px] leading-snug text-brand-navy mb-sm">
                  {card.title}
                </h4>
                <p className="font-body-md text-body-md text-[14px] text-on-surface-variant mb-md flex-grow">
                  {card.body}
                </p>
                <div className="flex justify-between items-center mt-auto pt-sm border-t border-outline-variant/30">
                  <span className="font-caption text-caption text-outline">
                    {card.date}
                  </span>
                  <a
                    className="font-label-md text-label-md text-brand-emerald hover:underline flex items-center gap-1"
                    href="#"
                  >
                    Read Article{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              We&apos;re building this with founders and investors — not for
              them.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We&apos;re validating the problem before building the solution.
              We&apos;re speaking with African founders and individual investors
              to understand what prevents promising businesses from accessing
              early-stage capital.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter">
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm text-center">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">
                For Founders
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Are you building an African startup? Tell us about your business,
                funding needs and challenges accessing capital.
              </p>
              <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full">
                Founder Survey
              </button>
            </div>
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm text-center">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">
                For Investors
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Would you invest in an early-stage African startup? Tell us how
                you would think about investing in promising African businesses.
              </p>
              <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full">
                Investor Survey
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl md:py-[120px] bg-background text-center">
        <div className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-brand-navy mb-sm">
            The next great African company could already exist.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
            It just needs the opportunity to survive long enough to become one.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center">
            <button className="bg-brand-emerald text-white hover:bg-brand-emerald-hover px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
              Join the Investor Waitlist
            </button>
            <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
              Join the Founder Waitlist
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-primary dark:bg-primary-container">
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto gap-lg">
          <div className="flex flex-col items-center md:items-start gap-sm">
            <div className="font-display-lg text-headline-md font-bold text-on-primary dark:text-on-primary-container">
              FundedStart
            </div>
            <p className="text-on-primary-container font-caption text-caption">
              © 2024 FundedStart. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-md">
            {["Regulatory Disclaimer", "Privacy Policy", "Terms", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  className="text-surface-variant dark:text-outline-variant font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-80 hover:opacity-100"
                  href="#"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
