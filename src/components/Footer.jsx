import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">

          {/* Brand */}
          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 font-bold">
                SG
              </div>

              <div>
                <p className="text-lg font-bold tracking-wide">
                  SANYOG GROUP
                </p>

                <p className="text-[9px] tracking-[0.25em] text-slate-500">
                  INFRASTRUCTURE
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              Infrastructure, civil, electrical, road and utility
              contracting works from Jaunpur, Uttar Pradesh.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a href="#home" className="text-sm text-slate-300 hover:text-white">
                Home
              </a>

              <a href="#about" className="text-sm text-slate-300 hover:text-white">
                About
              </a>

              <a href="#services" className="text-sm text-slate-300 hover:text-white">
                Services
              </a>

              <a href="#projects" className="text-sm text-slate-300 hover:text-white">
                Projects
              </a>

              <a href="#work-profile" className="text-sm text-slate-300 hover:text-white">
                Work Profile
              </a>

              <a href="#contact" className="text-sm text-slate-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-500" />

                <p className="text-sm leading-6 text-slate-400">
                  Dharaura, Jaigopalganj,
                  <br />
                  Kerakat, Jaunpur,
                  <br />
                  Uttar Pradesh — 222142
                </p>
              </div>

              <a
                href="tel:9473684061"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone size={17} className="text-blue-500" />
                +91 94736 84061
              </a>

              <a
                href="mailto:sanyog.groupofficial@gmail.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-blue-500" />
                <span className="break-all">
                  sanyog.groupofficial@gmail.com
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">

          <p className="text-xs text-slate-500">
            © {currentYear} Sanyog Group. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-500 group-hover:bg-blue-600">
              <ArrowUp size={14} />
            </span>
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;