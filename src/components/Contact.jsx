import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Contact
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-blue-600">
              that matters.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a project, contracting requirement or infrastructure
            enquiry? Get in touch with Sanyog Group.
          </p>
        </div>

        {/* Contact layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.8fr]">

          {/* Contact details */}
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">

            {/* Address */}
            <div className="bg-white p-8 transition hover:bg-slate-50 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <MapPin
                  size={21}
                  className="text-blue-600"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Office
              </p>

              <p className="mt-3 text-base font-semibold leading-7 text-slate-900">
                Dharaura, Jaigopalganj
                <br />
                Kerakat, Jaunpur
                <br />
                Uttar Pradesh — 222142
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 transition hover:bg-slate-50 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <Phone
                  size={21}
                  className="text-blue-600"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Phone
              </p>

              <a
                href="tel:9473684061"
                className="mt-3 block text-base font-semibold text-slate-900 transition hover:text-blue-600"
              >
                +91 94736 84061
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 transition hover:bg-slate-50 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <MessageCircle
                  size={21}
                  className="text-blue-600"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                WhatsApp
              </p>

              <a
                href="https://wa.me/919473684061"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-slate-900 transition hover:text-blue-600"
              >
                Start a conversation

                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 transition hover:bg-slate-50 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <Mail
                  size={21}
                  className="text-blue-600"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>

              <a
                href="mailto:sanyog.groupofficial@gmail.com"
                className="mt-3 block break-all text-base font-semibold text-slate-900 transition hover:text-blue-600"
              >
                sanyog.groupofficial@gmail.com
              </a>
            </div>

          </div>

          {/* CTA card */}
          <div className="relative overflow-hidden bg-slate-950 p-8 sm:p-10 lg:p-12">

            {/* Decorative lines */}
            <div className="absolute right-0 top-0 h-full w-32 opacity-20">
              <div className="absolute right-8 top-0 h-full w-px bg-blue-500" />
              <div className="absolute right-16 top-0 h-full w-px bg-blue-500" />
              <div className="absolute right-24 top-0 h-full w-px bg-blue-500" />
            </div>

            <div className="relative z-10">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Project Enquiry
              </p>

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-white">
                Have an infrastructure requirement?
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Contact our team to discuss your construction,
                civil, electrical, road or utility infrastructure
                requirements.
              </p>

              <div className="mt-10 space-y-4">

                <a
                  href="tel:9473684061"
                  className="flex items-center justify-between border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-blue-400" />

                    <span className="text-sm font-medium text-white">
                      Call +91 94736 84061
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-500"
                  />
                </a>

                <a
                  href="mailto:sanyog.groupofficial@gmail.com"
                  className="flex items-center justify-between border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-400" />

                    <span className="text-sm font-medium text-white">
                      Send an Email
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-500"
                  />
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;