"use client"; // <--- שורה זו קריטית!

import React, { useState, useEffect } from "react";
import { sendEmail } from "./actions";
import {
  Cpu,
  Globe,
  TrendingUp,
  Search,
  Zap,
  Layers,
  BarChart3,
  Target,
  ArrowRight,
  Menu,
  X,
  Database,
  Share2,
  CheckCircle2,
  MousePointer2,
  Clock,
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            botson<span className="text-cyan-400">.ai</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Expertise", "Technology", "Products", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 text-sm font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            Partner With Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {["Expertise", "Technology", "Products", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const StatsStrip = () => {
  const stats = [
    { label: "Managed Spend (Google Ads)", value: "$40M+" },
    { label: "Impressions Processed", value: "3B+" },
    { label: "Clicks Optimized", value: "200M+" },
    { label: "CTR Performance", value: "3-5x Higher" },
  ];

  return (
    <div className="w-full bg-slate-900/50 border-y border-slate-800 backdrop-blur-sm relative z-20 mx-auto mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group cursor-default">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-1 group-hover:scale-105 transition-transform">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden bg-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            From Minimal Signals to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Maximum Performance
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
            We take sparse data—like a keyword and a location—and reconstruct
            true user intent to power large-scale performance marketing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 text-base font-bold rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center"
            >
              Let's Talk Performance <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button
              onClick={() => window.open("https://jobs-bear.com", "_blank")}
              className="px-8 py-4 text-base font-semibold rounded-lg text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center"
            >
              See Jobs-Bear In Action
            </button>
          </div>
        </div>

        <StatsStrip />
      </div>
    </section>
  );
};

const Expertise = () => {
  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "Acquire High-Intent Traffic",
      desc: "We target long-tail queries and adapt bids based on predicted downstream value. We don't just buy traffic; we acquire future conversions.",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "Understand True Intent",
      desc: "From a tiny signal (keyword + geo), our AI reconstructs the user's full profile: salary expectations, seniority, and underlying needs.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Monetize with Precision",
      desc: "We rank and match users to opportunities with CTR-calibrated models, optimizing for partner economics and user satisfaction.",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Botson sits at the intersection of AI, performance marketing, and
            product. We build full funnels where every impression is a learning
            opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors border border-slate-800 group-hover:border-slate-700">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechPipeline = () => {
  const steps = [
    {
      title: "The Signal",
      desc: "Getting the First Clues: We gather basic info like keywords, location, and device – the starting points of a user's journey.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "The Insight",
      desc: "Building the User Story: Our AI connects these clues to build a rich profile, understanding what the user truly wants beyond simple words.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "The Match",
      desc: "Finding the Best Matches: We sort through millions of options to present the most relevant results, personalized to the user's hidden intent.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "The Evolution",
      desc: "Learning and Improving: Our system constantly tests and refines itself to show the best layouts and content, always getting smarter.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "The Execution",
      desc: "Real-Time Action: We use what we learn to adjust our advertising bids and strategies instantly on platforms like Google and Bing.",
      icon: <Share2 className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="technology"
      className="py-24 bg-slate-950 overflow-hidden relative"
    >
      {/* Visual connecting line background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Botson Intent Engine
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A multi-stage AI recommendation pipeline built for billions of
            events.
          </p>
        </div>

        <div className="relative space-y-12 md:space-y-0">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`md:flex items-center justify-between ${
                idx % 2 === 0 ? "flex-row-reverse" : ""
              } group`}
            >
              {/* Content Side */}
              <div className="md:w-[45%] mb-6 md:mb-0">
                <div
                  className={`bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all ${
                    idx % 2 === 0
                      ? "text-left md:text-left"
                      : "text-left md:text-right"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 md:inline-flex">
                    <span className="md:hidden inline-flex w-8 h-8 rounded-full bg-cyan-900/30 items-center justify-center text-cyan-400">
                      {step.icon}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Center Node (Desktop) */}
              <div className="hidden md:flex w-[10%] justify-center relative">
                <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 z-10 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              </div>

              {/* Empty Space for layout balance */}
              <div className="md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-slate-400">
            Every product we build is a live showcase of the Botson intent
            engine.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Jobs Bear Card - Wider / Full Width */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 border border-slate-700 shadow-2xl mb-16">
            <div className="bg-slate-950 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-white">Jobs-Bear</h3>
                    <div className="bg-cyan-900/20 p-2 rounded-lg">
                      <Globe className="text-cyan-400 w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mt-4">
                    An intelligent job search engine that demonstrates our core
                    capability. Jobs-Bear analyzes just a few keywords and
                    location to decode career aspirations, skill levels, and job
                    preferences.
                    <br />
                    <br />
                    <span className="text-cyan-400/90 font-medium">
                      Our engine analyzes millions of active job listings in
                      real-time, instantly bridging the gap between searcher
                      intent and the perfect career opportunity.
                    </span>
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <a
                    href="https://jobs-bear.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-colors whitespace-nowrap"
                  >
                    Visit Jobs-Bear <MousePointer2 className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
                {[
                  "Long-tail search optimization",
                  "AI-powered intent recognition",
                  "Contextual understanding",
                  "Scales to millions of searches",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-slate-400 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More Products Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Products
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              We're always expanding new AI-powered products within the HR world
              and beyond.
            </p>

            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 shadow-[0_0_15px_rgba(6,182,212,0.15)] group cursor-default hover:border-cyan-500/50 transition-all">
              <Clock className="w-6 h-6 mr-3 text-cyan-400 animate-pulse" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Media Buying / Traffic",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field) => (e) =>
    setFormState((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await sendEmail(formData);

      if (result?.success) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          company: "",
          subject: "Media Buying / Traffic",
          message: "",
        });
      } else {
        setErrorMessage(
          result?.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-slate-400">
            Join forces with our technology to scale your traffic and intent
            capabilities.
          </p>
        </div>

        <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent
              </h3>
              <p className="text-slate-400">
                We'll review your use case and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setErrorMessage("");
                }}
                className="mt-6 text-cyan-400 hover:text-cyan-300 text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange("name")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange("email")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange("company")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange("subject")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="Media Buying / Traffic">
                      Media Buying / Traffic
                    </option>
                    <option value="Data Intelligence">Data Intelligence</option>
                    <option value="Product Integration">
                      Product Integration
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  How can we help? *
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formState.message}
                  onChange={handleChange("message")}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your traffic, audience, and goals..."
                ></textarea>
              </div>
              {errorMessage && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Start a Conversation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
            <Cpu className="text-slate-400 w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-300">
            botson<span className="text-cyan-600">.ai</span>
          </span>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Botson AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="font-sans bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <TechPipeline />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
