import {
  ArrowUpRight,
  Building2,
  Cable,
  Construction,
  Droplets,
  Route,
  Zap,
} from "lucide-react";

const workAreas = [
  {
    title: "PWD & Road Contracting",
    description:
      "Road construction and infrastructure contracting within the company's stated work profile.",
    icon: Route,
  },
  {
    title: "Civil Works",
    description:
      "Civil construction and supporting infrastructure execution.",
    icon: Construction,
  },
  {
    title: "Jal Jeevan Mission",
    description:
      "Water supply and utility infrastructure works.",
    icon: Droplets,
  },
  {
    title: "Electrical Works",
    description:
      "Electrical installation and infrastructure-related works.",
    icon: Zap,
  },
  {
    title: "BSNL Fiber",
    description:
      "Fiber and telecommunications infrastructure works.",
    icon: Cable,
  },
  {
    title: "Metro Infrastructure",
    description:
      "Civil and supporting works associated with metro infrastructure.",
    icon: Building2,
  },
];

function WorkProfile() {
  return (
    <section
      id="work-profile"
      className="bg-slate-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Work Profile
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Built around
              <span className="block text-slate-400">
                essential infrastructure.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 lg:ml-auto">
            Sanyog Group's stated work profile spans road contracting,
            civil and electrical works, water infrastructure,
            telecommunications and metro-related infrastructure.
          </p>

        </div>

        {/* Work areas */}
        <div className="mt-16 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">

          {workAreas.map((work, index) => {
            const Icon = work.icon;

            return (
              <div
                key={work.title}
                className="group relative bg-white p-8 transition-all duration-300 hover:bg-slate-950 sm:p-10"
              >

                {/* Index */}
                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold tracking-[0.2em] text-slate-400 transition-colors group-hover:text-slate-600">
                    0{index + 1}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                <h3 className="mt-12 text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-white">
                  {work.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-400">
                  {work.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors group-hover:text-blue-400">
                  Work area

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </div>
            );
          })}

        </div>

        {/* Tender information */}
        <div className="mt-16 overflow-hidden bg-slate-950">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

            {/* Main */}
            <div className="p-8 sm:p-12 lg:p-16">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Tender & Contracting
              </span>

              <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Public infrastructure and contracting works.
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Sanyog Group has provided PWD and road contracting as part
                of its work profile. Detailed tender numbers, project
                values, dates and individual contract records will be
                added after they are provided and approved by the company.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Enquire About Our Work

                <ArrowUpRight size={17} />
              </a>

            </div>

            {/* Side info */}
            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Current Information
              </p>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm text-slate-500">
                    Contracting Profile
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    PWD & Road Contractors
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Infrastructure Areas
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Civil • Electrical • Utility
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Jaunpur, Uttar Pradesh
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WorkProfile;