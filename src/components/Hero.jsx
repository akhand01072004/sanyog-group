import { ArrowRight, Phone } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Blue Glow */}
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-blue-500 sm:w-10" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 sm:text-sm sm:tracking-[0.25em]">
              Infrastructure • Civil • Engineering
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Building
            <span className="block text-blue-500">
              Infrastructure
            </span>
            That Lasts.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Sanyog Group delivers infrastructure, civil, electrical,
            road and utility works with a focus on quality execution
            and reliable project delivery.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            {/* Services */}
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Our Services

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Contact */}
            <a
              href="tel:9473684061"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone size={18} />
              Contact Us
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;