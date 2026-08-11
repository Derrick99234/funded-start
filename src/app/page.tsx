import Image from "next/image";
import MobileNav from "@/components/mobile-nav";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Founders", href: "#for-founders" },
  { label: "For Investors", href: "#for-investors" },
  { label: "Why FundedStart", href: "#why" },
  { label: "Our Thesis", href: "#thesis" },
];

const problemCardsData = [
  {
    title: "Build the first product",
  },
  {
    title: "Hire the first team",
  },
  {
    title: "Acquire customers",
  },
  {
    title: "Run operations",
  },
  {
    title: "Validate the market",
  },
  {
    title: "Reach the milestones investors look for",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    numberBg: "bg-brand-navy",
    title: "Apply",
    body: "Founders submit their businesses and fundraising requirements.",
  },
  {
    number: "02",
    numberBg: "bg-brand-emerald",
    title: "Review",
    body: "Startups undergo appropriate due diligence, screening, and compliance processes.",
  },
  {
    number: "03",
    numberBg: "bg-brand-navy",
    title: "Raise",
    body: "Approved opportunities are presented to investors through the platform.",
  },
  {
    number: "04",
    numberBg: "bg-brand-emerald",
    title: "Invest",
    body: "Individuals participate with amounts appropriate to their own risk appetite.",
  },
  {
    number: "05",
    numberBg: "bg-brand-navy",
    title: "Build",
    body: "Founders use the capital to reach the milestones that move their businesses forward.",
  },
  {
    number: "06",
    numberBg: "bg-brand-emerald",
    title: "Grow",
    body: "As companies grow, investors participate in their potential future value.",
  },
];

const investorBenefits = [
  {
    icon: "trending_down",
    iconBg: "bg-brand-navy/10",
    iconText: "text-brand-navy",
    title: "Start small",
    body: "Invest within your own means and risk tolerance.",
  },
  {
    icon: "pie_chart",
    iconBg: "bg-brand-emerald/10",
    iconText: "text-brand-emerald",
    title: "Diversify",
    body: "Spread your exposure across multiple early-stage companies rather than making one concentrated bet.",
  },
  {
    icon: "travel_explore",
    iconBg: "bg-brand-emerald/10",
    iconText: "text-brand-emerald",
    title: "Discover",
    body: "Access opportunities that may otherwise be difficult for individual investors to find.",
  },
  {
    icon: "trending_up",
    iconBg: "bg-brand-navy/10",
    iconText: "text-brand-navy",
    title: "Participate",
    body: "Share in the potential upside as the companies you invest in grow.",
  },
];

const founderBenefits = [
  {
    number: "01",
    title: "Raise",
    body: "Present your company and fundraising opportunity.",
  },
  {
    number: "02",
    title: "Get discovered",
    body: "Reach investors beyond your immediate network.",
  },
  {
    number: "03",
    title: "Build",
    body: "Use the capital to develop your product, acquire customers, and reach your next milestone.",
  },
  {
    number: "04",
    title: "Grow",
    body: "Build toward the traction that can unlock larger institutional funding.",
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

const trustElements = [
  "Curated startup opportunities",
  "Transparent company information",
  "Investor education",
  "Appropriate risk disclosures",
  "Strong due diligence",
  "Secure technology",
  "Regulatory oversight",
];

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased">
      <nav className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto h-20">
          <a className="flex items-center gap-2" href="#">
            <Image
              className="h-12 w-auto object-contain"
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

      <header className="w-full px-margin-mobile md:px-margin-desktop py-xl md:py-[80px] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-xl">
        <div className="flex-1 flex flex-col gap-md text-center md:text-left">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-brand-navy leading-tight animate-fade-in">
            Every African founder deserves a chance to build.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Africa has no shortage of bold ideas or ambitious founders. What too many founders lack is the early capital to turn an idea into a great company. FundedStart is building a new way for African founders to raise early-stage capital from everyday investors who believe in the future of African innovation.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto md:mx-0 text-sm animate-fade-in" style={{ animationDelay: "400ms" }}>
            Launching in Nigeria, with a vision for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center md:justify-start pt-sm animate-fade-in" style={{ animationDelay: "600ms" }}>
            <button className="bg-brand-emerald text-white hover:bg-brand-emerald-hover px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              I&apos;m an Investor
            </button>
            <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              I&apos;m a Founder
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-surface-container-high rounded-xl rotate-3 scale-105 opacity-50"></div>
          <Image
            className="relative z-10 w-full h-auto rounded-xl shadow-lg border border-outline-variant object-cover aspect-[4/3]"
            src="/Funded Start hero africa mappng.png"
            alt="A modern, abstract 3D illustration showing ascending charts, a glowing green upward arrow, and stylized nodes connecting, representing growth and venture capital investment in a bright, clean corporate style"
            width={512}
            height={279}
          />
        </div>
      </header>

      <section id="problem" className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              The Problem
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              Great companies need capital before they have traction.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              The traditional funding journey creates a difficult gap. Founders are expected to prove that their idea works before they can access the capital they need to prove that it works.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Before product-market fit, they need money to:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md mb-xl max-w-4xl mx-auto">
            {problemCardsData.map((item, idx) => (
              <div
                key={item.title}
                className="bg-surface p-md rounded-lg border border-outline-variant shadow-sm text-center hover:shadow-md hover:border-brand-emerald transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="font-body-md text-body-md text-brand-navy">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
              For many founders, the problem isn&apos;t a lack of ambition. They simply run out of runway before they get the chance to prove themselves.
            </p>
          </div>
        </div>
      </section>

      <section id="funding-gap" className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              The Funding Gap
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              Capital arrives too late.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Today, an early-stage African founder often has three options:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter mb-xl">
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0ms" }}>
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">Bootstrap.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Put in their own money and hope it lasts.
              </p>
            </div>
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">Friends & Family.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Raise from the people closest to them, but only if they have access to a network with capital.
              </p>
            </div>
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">Venture Capital.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Seek institutional investors, but often after demonstrating the traction required to attract them.
              </p>
            </div>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
              There is a missing layer between the founder with an ambitious idea and the institutional investor looking for proven growth.
            </p>
            <p className="font-headline-md text-headline-md text-brand-emerald">
              FundedStart is building that layer.
            </p>
          </div>
        </div>
      </section>

      <section id="why-now" className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              Why Now
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              Capital is the new bottleneck, not Technology
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Three things are changing Africa&apos;s startup landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter mb-xl">
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">AI</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Building and launching software is becoming dramatically cheaper.
              </p>
            </div>
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">Infrastructure</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cloud, data centres, fintech infrastructure and internet access are expanding across the continent.
              </p>
            </div>
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">Regulation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The foundations for digital financial products and regulated crowdfunding are developing.
              </p>
            </div>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
              More people can build. More businesses can be created. But the funding infrastructure hasn&apos;t evolved at the same pace.
            </p>
            <p className="font-headline-md text-headline-md text-brand-emerald">
              That&apos;s the gap FundedStart exists to bridge.
            </p>
          </div>
        </div>
      </section>

      <section id="the-idea" className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              The Idea
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              What if the next great African company could be funded by thousands of people, not just a handful of investors?
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Most people cannot invest ₦20 million in a startup. But many people could invest ₦20,000. And when enough people participate, small individual investments can become meaningful early-stage capital.
            </p>
            <div className="bg-primary-container text-on-primary rounded-xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg shadow-lg w-full mb-lg">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-xs">
                  The Power of the Crowd
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container">
                  Small contributions aggregate into significant runway for founders.
                </p>
              </div>
              <div className="bg-surface/10 border border-surface/20 rounded-lg p-md flex flex-wrap items-center justify-center gap-sm w-full md:w-auto">
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
            <div className="grid md:grid-cols-2 gap-gutter">
              <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm">
                <p className="font-body-lg text-body-lg text-brand-navy font-semibold mb-sm">
                  One founder gets the capital needed to build.
                </p>
              </div>
              <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm">
                <p className="font-body-lg text-body-lg text-brand-navy font-semibold mb-sm">
                  Hundreds of people get the opportunity to participate in the company&apos;s potential upside.
                </p>
              </div>
            </div>
            <p className="text-center font-headline-md text-headline-md text-brand-emerald mt-lg">
              Participation, not exclusivity.
            </p>
          </div>
        </div>
      </section>

      <section id="for-founders" className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              For Founders
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              Get the capital you need to reach your next milestone.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              FundedStart will connect promising early-stage African companies with a broader community of investors. Instead of waiting until you&apos;re already &quot;investment ready&quot;, access capital that can help you become investment ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-lg">
            {founderBenefits.map((item, idx) => (
              <div
                key={item.number}
                className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="font-headline-md text-headline-md text-brand-emerald mb-sm">
                  {item.number}
                </div>
                <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              FundedStart is not here to replace venture capital. We&apos;re building the bridge that helps founders get there.
            </p>
            <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all">
              Join the Founder Waitlist
            </button>
          </div>
        </div>
      </section>

      <section id="for-investors" className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              For Investors
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              You don&apos;t need to be a venture capitalist to invest in Africa&apos;s future.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              The best African companies of the next decade are being built right now. FundedStart will make it easier for individuals to discover and participate in carefully presented early-stage opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-lg">
            {investorBenefits.map((card, idx) => (
              <div
                key={card.title}
                className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center mb-sm transition-transform duration-300`}
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
          <div className="text-center">
            <p className="font-caption text-caption text-outline mb-lg">
              Early-stage investing is high risk. You can lose some or all of your investment.
            </p>
            <button className="bg-brand-emerald text-white hover:bg-brand-emerald-hover px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all">
              Join the Investor Waitlist
            </button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm animate-fade-in">
              How It Works
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy animate-fade-in">
              From ambitious founder to funded company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center bg-surface p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-full ${step.numberBg} text-on-primary flex items-center justify-center font-headline-md text-headline-md mb-sm shadow-md transition-transform duration-300 group-hover:scale-110`}
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
        </div>
      </section>

      <section id="trust" className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              Trust & Regulation
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              Trust is the product.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Investing in early-stage companies carries real risk. That&apos;s why FundedStart is being designed around:
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-gutter mb-lg">
              {trustElements.map((element) => (
                <div key={element} className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-brand-emerald flex-shrink-0 mt-1">
                    check_circle
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {element}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                FundedStart will launch in partnership with an SEC-registered Crowdfunding Intermediary, providing the regulated infrastructure required for investment activities while we focus on building the marketplace.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our goal isn&apos;t simply to make investing easier. It&apos;s to make participation more accessible without compromising trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              The Evidence
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              The funding gap is real.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Africa&apos;s startup ecosystem is growing, but access to early-stage capital remains a significant constraint. Explore the research, data, and reporting behind the problem we&apos;re trying to solve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md">
            {evidenceCards.map((card, idx) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
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
                    className="font-label-md text-label-md text-brand-emerald hover:underline flex items-center gap-1 transition-colors duration-200"
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

      <section className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              Why We&apos;re Building This
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              What happens to founders who never meet investors?
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
              This problem is personal. While building my own startup, I experienced firsthand how difficult it can be to access capital before reaching product-market fit. It led me to a simple question: What happens to founders who never get the opportunity to meet the right investor at the right time?
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Some great businesses never get built. Some promising founders abandon ideas that could have created jobs, solved real problems, and contributed to Africa&apos;s economic future. FundedStart exists because we believe access to early capital should not be determined solely by who you already know.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-xl md:py-[100px] border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              The Vision
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              A future where Africa&apos;s boldest innovation is funded.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Imagine a future where founders can access the capital they need to build before they have everything figured out. Where investors can participate in the growth of companies they believe in. Where communities can share in the economic value created around them. Where African innovation is not limited by a lack of early-stage funding.
            </p>
            <p className="font-headline-md text-headline-md text-brand-emerald mt-lg">
              That&apos;s the future we&apos;re building.
            </p>
          </div>
        </div>
      </section>

      <section className="py-xl md:py-[100px] bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-sm">
              Help Us Build It
            </h2>
            <p className="font-headline-md text-headline-md text-brand-navy mb-lg">
              We&apos;re building this with founders and investors, not for them.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              FundedStart is still being built. We&apos;re speaking with African founders and individual investors to understand what prevents promising companies from accessing early capital, what would make investors comfortable participating, and what a better funding system should look like. Your experience can help shape the platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter">
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm text-center">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">
                Founders
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Are you building an African startup?
              </p>
              <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full">
                Share Your Story
              </button>
            </div>
            <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm text-center">
              <h3 className="font-headline-md text-headline-md text-brand-navy mb-sm">
                Investors
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Would you consider investing in an early-stage African startup?
              </p>
              <button className="bg-white border border-brand-navy text-brand-navy hover:bg-[#f3f4f6] px-lg py-sm rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md transition-all w-full">
                Tell Us How You&apos;d Invest
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
            It may not need another pitch competition. It may not need another accelerator. It may simply need its first believers.
          </p>
          <p className="font-headline-md text-headline-md text-brand-emerald mb-lg">
            FundedStart is building a way for more people to become those believers.
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
        <div className="flex flex-col md:flex-row justify-between items-start w-full py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto gap-lg">
          <div className="flex flex-col items-start gap-md">
            <Image
              className="h-16 w-auto object-contain"
              src="/Fundedstart logo darkmode horizontal.png"
              alt="FundedStart logo"
              width={512}
              height={154}
            />
            <p className="font-body-md text-body-md text-on-primary-container opacity-70">
              Democratizing early-stage startup investing across Africa.
            </p>
            <p className="text-on-primary-container font-caption text-caption mt-sm">
              © FundedStart. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-lg sm:gap-gutter">
            <div className="flex flex-col gap-sm">
              <p className="font-label-md text-label-md text-on-primary font-semibold uppercase tracking-wider">
                For Founders
              </p>
              <a
                className="text-on-primary-container font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-90 hover:opacity-100"
                href="#for-founders"
              >
                Program
              </a>
              <a
                className="text-on-primary-container font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-90 hover:opacity-100"
                href="#thesis"
              >
                Our Thesis
              </a>
              <a
                className="text-on-primary-container font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-90 hover:opacity-100"
                href="#"
              >
                Research
              </a>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="font-label-md text-label-md text-on-primary font-semibold uppercase tracking-wider">
                For Investors
              </p>
              <a
                className="text-on-primary-container font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-90 hover:opacity-100"
                href="#for-investors"
              >
                Opportunities
              </a>
              <a
                className="text-on-primary-container font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-90 hover:opacity-100"
                href="#thesis"
              >
                Our Thesis
              </a>
              <a
                className="text-on-primary-container font-body-md text-body-md hover:text-secondary-fixed transition-colors duration-200 opacity-90 hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-on-primary/10 px-margin-mobile md:px-margin-desktop py-lg max-w-7xl mx-auto">
          <p className="font-caption text-caption text-on-primary-container text-center">
            Risk Disclosure: Early-stage startup investing is high risk. Investments can lose some or all of their value. Investment activities will be conducted within the applicable regulatory framework through an SEC-registered Crowdfunding Intermediary.
          </p>
        </div>
      </footer>
    </div>
  );
}
