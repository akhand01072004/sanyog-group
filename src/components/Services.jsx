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
    image: "/images/services/road.jpeg",
  },
  {
    number: "02",
    title: "Civil Works",
    description:
      "Civil construction and structural works across infrastructure and development projects.",
    icon: Construction,
    image: "/images/services/civil.jpeg",
  },
  {
    number: "03",
    title: "Electrical Works",
    description:
      "Electrical infrastructure and installation works supporting modern construction projects.",
    icon: Zap,
    image: "/images/services/electrical.jpeg",
  },
  {
    number: "04",
    title: "Jal Jeevan Mission",
    description:
      "Water supply and utility infrastructure works associated with Jal Jeevan Mission projects.",
    icon: Droplets,
    image: "/images/services/water.jpeg",
  },
  {
    number: "05",
    title: "BSNL Fiber Works",
    description:
      "Fiber and telecommunications infrastructure work for connectivity projects.",
    icon: Cable,
    image: "/images/services/fiber.jpeg",
  },
  {
    number: "06",
    title: "Metro Infrastructure",
    description:
      "Civil and supporting infrastructure works related to metro development projects.",
    icon: TrainFront,
    image: "/images/services/metro.jpeg",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Decorative architectural line */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-slate-200" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          {/* Heading */}
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


          {/* Description */}
          <div className="lg:pl-16">

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Sanyog Group works across civil, road, electrical and utility
              infrastructure, supporting projects that contribute to essential
              public and urban development.
            </p>

          </div>

        </div>


        {/* ================= SERVICES GRID ================= */}
        <div className="grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <article
                key={service.number}
                className="group relative min-h-[430px] overflow-hidden border-b border-r border-slate-200 bg-slate-900 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >

                {/* ================= BACKGROUND IMAGE ================= */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />


                {/* ================= DARK OVERLAY ================= */}
                <div className="absolute inset-0 bg-slate-950/70 transition-all duration-500 group-hover:bg-slate-950/60" />


                {/* ================= GRADIENT ================= */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />


                {/* ================= CARD CONTENT ================= */}
                <div className="relative z-10 flex min-h-[430px] flex-col p-8 sm:p-10">

                  {/* Top Row */}
                  <div className="flex items-start justify-between">

                    {/* Number */}
                    <span className="text-sm font-semibold tracking-widest text-white/60">
                      {service.number}
                    </span>


                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">

                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-white"
                      />

                    </div>

                  </div>


                  {/* ================= BOTTOM CONTENT ================= */}
                  <div className="mt-auto">

                    {/* Title */}
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {service.title}
                    </h3>


                    {/* Description */}
                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">
                      {service.description}
                    </p>


                    {/* Explore */}
                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">

                      Explore

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                </div>


                {/* ================= BLUE HOVER ACCENT ================= */}
                <div className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

              </article>

            );
          })}

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}
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
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;