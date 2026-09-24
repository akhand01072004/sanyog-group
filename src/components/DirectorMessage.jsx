import { ArrowUpRight, Quote } from "lucide-react";

function DirectorMessage() {
  return (
    <section
      id="director"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Director's Message
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Message
              <span className="block text-blue-500">
                from the Director.
              </span>
            </h2>
          </div>

          <Quote
            size={72}
            strokeWidth={1}
            className="hidden text-blue-500/20 lg:block"
          />

        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[0.4fr_0.6fr]">

          {/* Director Image */}
          <div className="relative min-h-[500px] overflow-hidden bg-slate-900 lg:min-h-[680px]">

            <img
              src="/images/director.png"
              alt="Krishna Dubey - Director, Sanyog Group"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

            {/* Director Information */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Leadership
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Krishna Dubey
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-300">
                Director
              </p>

              <div className="mt-5 h-px w-16 bg-blue-500" />

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                Sanyog Group
              </p>

            </div>

          </div>

          {/* Message */}
          <div className="bg-white p-8 sm:p-10 lg:p-14">

            <p className="text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
              Welcome to Sanyog Group.
            </p>

            <div className="mt-7 space-y-6 text-sm leading-7 text-slate-600 sm:text-base">

              <p>
                At Sanyog Group, we believe that infrastructure is more
                than the construction of roads, highways, buildings, and
                real estate—it is about creating opportunities,
                strengthening connectivity, and contributing to the growth
                of communities and the nation.
              </p>

              <p>
                With a growing presence across Uttar Pradesh, Madhya
                Pradesh, Bihar, Delhi, and other regions, our journey has
                been guided by a commitment to quality, integrity,
                innovation, and responsible development. Through our work
                in infrastructure, roads & highways, real estate, and
                allied sectors, we strive to deliver projects that create
                lasting value for our clients, partners, and communities.
              </p>

              <p>
                Our strength lies in our people, our professional approach,
                and our determination to transform challenges into
                opportunities. We continuously embrace modern technologies,
                efficient practices, and sustainable solutions to ensure
                that every project we undertake meets high standards of
                quality, safety, and excellence.
              </p>

              <p>
                As we look towards the future, Sanyog Group remains
                committed to building not only world-class infrastructure
                but also enduring relationships and a stronger foundation
                for sustainable growth.
              </p>

              <p>
                I sincerely thank our clients, partners, employees, and
                stakeholders for their trust and continued support.
                Together, we look forward to creating a better, stronger,
                and more connected future.
              </p>

            </div>

            {/* Signature */}
            <div className="mt-10 flex items-end justify-between gap-6 border-t border-slate-200 pt-7">

              <div>
                <p className="font-serif text-2xl italic text-slate-900">
                  Krishna Dubey
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Director · Sanyog Group
                </p>
              </div>

              <a
                href="#contact"
                className="hidden items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:flex"
              >
                Connect with us
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DirectorMessage;