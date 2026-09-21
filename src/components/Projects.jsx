import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "ROAD INFRASTRUCTURE",
    title: "Road & PWD Works",
    description:
      "Road construction and infrastructure works within the company's stated contracting profile.",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1400&q=85",
    location: "Project details to be updated",
  },
  {
  number: "02",
  category: "WATER INFRASTRUCTURE",
  title: "Jal Jeevan Mission",
  description:
    "Water and utility infrastructure work associated with the Jal Jeevan Mission.",
  image:
    "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1400&q=85",
  location: "Project details to be updated",
},
  {
    number: "03",
    category: "TELECOM INFRASTRUCTURE",
    title: "BSNL Fiber Works",
    description:
      "Fiber and telecommunications infrastructure work within the company's stated work profile.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    location: "Project details to be updated",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Work
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects &
              <span className="block text-slate-500">
                Infrastructure.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            Explore the sectors included in Sanyog Group's current
            work profile. Detailed project information can be added
            as the company provides its portfolio.
          </p>

        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-sm font-semibold tracking-widest text-white/70">
                  {project.number}
                </span>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowUpRight size={19} />
                </div>

              </div>

              {/* Content */}
              <div className="border-b border-white/10 pb-7 pt-6">

                <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} />

                  {project.location}
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center sm:p-9">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              More project details coming soon.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Completed and ongoing project information can be added
              here once the company provides the approved project
              portfolio.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
          >
            Share Project Details

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;