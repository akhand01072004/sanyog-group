import { ArrowUpRight, Quote } from "lucide-react";

function DirectorMessage() {
  return (
    <section
      id="director"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex items-end justify-between gap-8">

          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm">
                Director's Message
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Message
              <span className="block text-blue-500">
                from the Director.
              </span>
            </h2>
          </div>

          {/* Quote Icon */}
          <Quote
            size={80}
            strokeWidth={1}
            className="hidden text-blue-500/20 lg:block"
          />

        </div>


        {/* ================= DIRECTOR IMAGE ================= */}
        <div className="overflow-hidden border border-white/10 bg-slate-900">

          <div className="relative aspect-video w-full overflow-hidden">

            <img
              src="/images/director-01.png"
              alt="Krishna Dubey - Director, Sanyog Group"
              className="h-full w-full object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Director Information */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">

              

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Krishna Dubey
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Director · Sanyog Group
              </p>

            </div>

          </div>

        </div>


        {/* ================= MESSAGE ================= */}
        <div className="mt-8 border border-slate-200 bg-white p-7 sm:p-10 lg:p-14">

          {/* Introduction */}
          <div className="max-w-5xl">

            <p className="text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
              Welcome to Sanyog Group.
            </p>

            {/* Message */}
            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

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

          </div>


          {/* ================= SIGNATURE ================= */}
          <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-7 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="font-serif text-2xl italic text-slate-900">
                Krishna Dubey
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Director · Sanyog Group
              </p>

            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Connect with us

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DirectorMessage;