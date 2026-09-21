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

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Blue glow */}
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Infrastructure • Civil • Engineering
            </span>
          </div>

          {/* Heading */}
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

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Our Services

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:9473684061"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone size={18} />
              Contact Us
            </a>

          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-20 grid max-w-4xl grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4">

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Focus
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              Infrastructure
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Expertise
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              Civil Works
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Contracting
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              PWD & Roads
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Location
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              Jaunpur, UP
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;