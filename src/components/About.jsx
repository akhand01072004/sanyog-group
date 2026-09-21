import { ArrowUpRight, MapPin, Building2 } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top label */}
        <div className="mb-16 flex items-center gap-3">
          <span className="h-px w-10 bg-blue-600" />

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            About Sanyog Group
          </span>
        </div>

        {/* Main grid */}
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">

          {/* Image */}
          <div className="relative">

            <div className="aspect-[4/5] overflow-hidden bg-slate-200 sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
                alt="Modern construction and infrastructure planning"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Image overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 p-6 backdrop-blur-md sm:left-8 sm:right-auto sm:w-72">
              <Building2
                size={24}
                className="text-blue-500"
              />

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Infrastructure and contracting works across civil,
                road, electrical and utility sectors.
              </p>
            </div>

          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Infrastructure & Engineering
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Building the
              <span className="block text-blue-600">
                foundation of progress.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-slate-600">
              <p>
                Sanyog Group is engaged in infrastructure and contracting
                works across civil construction, road works, electrical
                works and utility infrastructure.
              </p>

              <p>
                The company's stated work profile includes projects
                associated with Jal Jeevan Mission, Delhi Metro,
                BSNL fiber infrastructure and PWD and road contracting.
              </p>
            </div>

            {/* Location */}
            <div className="mt-10 grid gap-5 border-y border-slate-200 py-7 sm:grid-cols-2">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <MapPin size={19} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                    Kerakat, Jaunpur
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Building2 size={19} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Work Profile
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                    Civil & Infrastructure
                    <br />
                    Contracting Works
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-slate-950"
            >
              Discuss a Project

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:bg-blue-600">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;