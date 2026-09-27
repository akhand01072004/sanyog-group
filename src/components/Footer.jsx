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

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">

          {/* ================= BRAND / LOGO ================= */}
          <div className="flex items-center justify-center lg:justify-start">

            <a
              href="#home"
              className="
                group
                flex items-center justify-center
                rounded-2xl
                bg-white
                px-8 py-6
                shadow-lg
                transition-all
                duration-300
                hover:shadow-xl
              "
              aria-label="Sanyog Group Home"
            >
              <img
                src="/images/sanyog-logo-1.png"
                alt="Sanyog Group"
                className="
                  h-auto
                  w-64
                  object-contain
                  sm:w-72
                  lg:w-80
                "
              />
            </a>

          </div>


          {/* ================= NAVIGATION ================= */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#home"
                className="
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                Home
              </a>

              <a
                href="#about"
                className="
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                About
              </a>

              <a
                href="#services"
                className="
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                Services
              </a>

              <a
                href="#projects"
                className="
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                Projects
              </a>

              <a
                href="#work-profile"
                className="
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                Work Profile
              </a>

              <a
                href="#contact"
                className="
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                Contact
              </a>

            </div>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>

            <div className="mt-6 space-y-5">

              {/* ================= ADDRESS ================= */}
              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <p className="text-sm leading-6 text-slate-400">
                  Dharaura, Jaigopalganj,
                  <br />
                  Kerakat, Jaunpur,
                  <br />
                  Uttar Pradesh — 222142
                </p>

              </div>


              {/* ================= PHONE ================= */}
              <a
                href="tel:+919473684061"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >

                <Phone
                  size={17}
                  className="shrink-0 text-blue-500"
                />

                <span>
                  +91 94736 84061
                </span>

              </a>


              {/* ================= EMAIL ================= */}
              <a
                href="mailto:sanyog.groupofficial@gmail.com"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >

                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <span className="break-all">
                  sanyog.groupofficial@gmail.com
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-white/10
            pt-7
            sm:flex-row
            sm:items-center
          "
        >

          {/* ================= COPYRIGHT ================= */}
          <p className="text-xs text-slate-500">
            © {currentYear} Sanyog Group. All rights reserved.
          </p>


          {/* ================= BACK TO TOP ================= */}
          <a
            href="#home"
            className="
              group
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-slate-400
              transition-colors
              duration-200
              hover:text-white
            "
          >

            <span>
              Back to top
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-200
                group-hover:border-blue-500
                group-hover:bg-blue-600
                group-hover:text-white
              "
            >
              <ArrowUp size={14} />
            </span>

          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;