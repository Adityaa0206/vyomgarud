import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="max-w-6xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center border border-gray-700">
              <span className="text-orange-400 font-bold tracking-wide">
                VG
              </span>
            </div>
            <div>
              <div className="text-xl font-semibold">VyomGarud</div>
              <div className="text-xs text-gray-400">
                Precision. Autonomy. Reliability.
              </div>
            </div>
          </div>
          <div className="space-x-6 hidden md:flex items-center text-sm text-gray-300">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#capabilities" className="hover:text-white">
              Capabilities
            </a>
            <a href="#highlights" className="hover:text-white">
              Highlights
            </a>
            <a href="#contact" className="text-orange-400 hover:opacity-90">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1600\\' height=\\'600\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23202222\\' /><g fill=\\'%23ff8b00\\' opacity=\\'0.06\\'><circle cx=\\'200\\' cy=\\'100\\' r=\\'180\\'/><circle cx=\\'1200\\' cy=\\'320\\' r=\\'220\\'/></g></svg>')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              VyomGarud
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Military-grade UAV systems engineered for precision, endurance,
              and advanced autonomy.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-lg shadow"
              >
                Request Demo
              </a>
              <a
                href="#capabilities"
                className="inline-block border border-gray-700 px-5 py-3 rounded-lg text-gray-300 hover:text-white"
              >
                Our Capabilities
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm text-xs text-gray-400">
              <div className="bg-gray-800/50 rounded-md p-3">
                Endurance: 8+ hrs
              </div>
              <div className="bg-gray-800/50 rounded-md p-3">Range: 120 km</div>
              <div className="bg-gray-800/50 rounded-md p-3">Payload: 7 kg</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="w-full aspect-[16/10] bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600 flex items-center justify-center">
                  <div className="text-sm text-gray-300">
                    UAV / System Preview
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                Prototype • Concept
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">About VyomGarud</h2>
            <p className="mt-4 text-gray-300">
              VyomGarud is dedicated to delivering rugged, reliable unmanned
              aerial systems for critical missions. We combine high-reliability
              hardware, precision engineering, and AI-driven autonomy to meet
              demanding operational needs.
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Designed for harsh environments</li>
              <li>Modular payload architecture</li>
              <li>Built-in redundant safety systems</li>
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 border border-gray-700">
            <h3 className="font-semibold">Tagline</h3>
            <div className="mt-3 text-gray-300">
              Precision engineering. Autonomous capability. Operational trust.
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="text-sm text-gray-400">
                Contact:{" "}
                <span className="text-gray-200 font-medium">
                  +91 8881444693
                </span>
              </div>
              <div className="text-sm text-gray-400">
                Colors: charcoal, white, orange (#ff7b00)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold">Capabilities & Products</h3>
        <p className="text-gray-400 mt-2">
          Modular platforms designed for different mission profiles.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Long-Endurance Platform",
              desc: "High-efficiency propulsion, redundant comms, extended flight time.",
            },
            {
              title: "Tactical Recon Drone",
              desc: "Low-observable frame, high-resolution EO/IR sensors.",
            },
            {
              title: "Payload Module",
              desc: "Modular pods for sensors, supplies, or equipment.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="text-sm text-gray-400">Product {i + 1}</div>
              <div className="mt-2 font-semibold text-lg">{c.title}</div>
              <div className="mt-2 text-gray-300 text-sm">{c.desc}</div>
              <div className="mt-4 flex items-center gap-3">
                <a className="text-orange-400 text-sm font-medium">
                  Learn more
                </a>
                <div className="ml-auto text-xs text-gray-400">ETA: Q4</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="highlights" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold">Highlights</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-6">
          <ul className="space-y-3 text-gray-300">
            <li>• Autonomous waypoint navigation with mission re-planning.</li>
            <li>• Triple-redundant power & communication systems.</li>
            <li>• Rapid payload swap in under 5 minutes.</li>
          </ul>
          <ul className="space-y-3 text-gray-300">
            <li>• Secure link encryption & anti-jamming measures.</li>
            <li>• 8+ hours endurance on a single charge/fuel cell.</li>
            <li>• Designed with MIL-grade materials and testing.</li>
          </ul>
        </div>
      </section>

      <footer
        id="contact"
        className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold">Get in touch</h4>
            <p className="mt-3 text-gray-400">
              For demos, partnerships, or technical enquiries — drop a short
              message.
            </p>
            <div className="mt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Form submitted locally — integrate backend for production."
                  );
                }}
                className="space-y-4 max-w-md"
              >
                <input
                  required
                  className="w-full rounded-md bg-gray-800 p-3 border border-gray-700 placeholder-gray-500"
                  placeholder="Name"
                />
                <input
                  required
                  className="w-full rounded-md bg-gray-800 p-3 border border-gray-700 placeholder-gray-500"
                  placeholder="Email"
                />
                <textarea
                  required
                  className="w-full rounded-md bg-gray-800 p-3 border border-gray-700 placeholder-gray-500"
                  placeholder="Message"
                  rows={4}
                ></textarea>
                <button className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-3 rounded-lg">
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            <h5 className="font-semibold text-gray-200">Office</h5>
            <div className="mt-3">VyomGarud R&D • Secure Facility</div>
            <div className="mt-2">Contact: +91 8881444693</div>
            <div className="mt-6 text-xs">
              © {new Date().getFullYear()} VyomGarud. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
