import {
  Construction,
  Droplets,
  Zap,
  Cable,
  TrainFront,
  Route,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Road & PWD Works",
    description:
      "Road construction and infrastructure works for public-sector and transportation projects.",
    icon: Route,
  },
  {
    number: "02",
    title: "Civil Works",
    description:
      "Civil construction and structural works across infrastructure and development projects.",
    icon: Construction,
  },
  {
    number: "03",
    title: "Electrical Works",
    description:
      "Electrical infrastructure and installation works supporting modern construction projects.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Jal Jeevan Mission",
    description:
      "Water supply and utility infrastructure works associated with Jal Jeevan Mission projects.",
    icon: Droplets,
  },
  {
    number: "05",
    title: "BSNL Fiber Works",
    description:
      "Fiber and telecommunications infrastructure work for connectivity projects.",
    icon: Cable,
  },
  {
    number: "06",
    title: "Metro Infrastructure",
    description:
      "Civil and supporting infrastructure works related to metro development projects.",
    icon: TrainFront,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Decorative architectural line */}
      <div className="absolute right-0 top-0 h-full w-px bg-slate-200" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Infrastructure
              <span className="block text-slate-400">
                Built With Purpose.
              </span>
            </h2>
          </div>

          <div className="lg:pl-16">
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Sanyog Group works across civil, road, electrical and utility
              infrastructure, supporting projects that contribute to essential
              public and urban development.
            </p>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative border-b border-r border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold tracking-widest text-slate-400">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-slate-700 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Arrow */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                  Explore

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Our current work profile includes road contracting, civil works,
            electrical works, fiber infrastructure and public utility projects.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-slate-950 transition-colors hover:text-blue-600"
          >
            Discuss a Project

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;