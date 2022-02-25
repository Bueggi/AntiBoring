/* This example requires Tailwind CSS v2.0+ */
import { MailIcon } from "@heroicons/react/solid";
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

export default function Deliverables({ project }) {
  const cpmYT = 100;
  const cpmInsta = 20;

  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                alt=""
              />
              <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
              <div className="relative px-8">
                <div>
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                    alt="Workcation"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Die Videos, die Mat und Daniel für uns produziert haben
                      sind der Wahnsinn. Danke, Jungs - das war die beste
                      Kampagne des Jahres!
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">
                      Sarah Williams, CEO bei Workcation
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Diese Leistungen bekommt ihr GARANTIERT
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <div className="text-lg">
                <ul>
                  <li className="mb-4">
                    3 x YouTubeVideo auf dem Hauptkanal
                    <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                      Durchschnittlich 100.000 Views - Media Value:{" "}
                      {(3 * 100000 * cpmYT) / 1000} Euro
                    </h3>
                  </li>

                  <li className="mb-4">
                    3 x Instagram Post
                    <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                      Durchschnittlich 300.000 Views - Media Value:{" "}
                      {(3 * 300000 * cpmInsta) / 1000} Euro
                    </h3>
                  </li>
                  <li className="mb-4">
                    5 x Instagram Story
                    <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                      Durchschnittlich 80.000 Views - Media Value:{" "}
                      {(5 * 80000 * cpmInsta) / 1000} Euro
                    </h3>
                  </li>
                </ul>
              </div>
              <p className="text-base leading-7">
                Alle Leistungen werden vorab vom Creator eingereicht und in
                einer Abnahmeschleife von euch gefeedbackt.
              </p>
              <p className="text-base leading-7">
                Insgesamt hat diese Kampagne einen Media Value von{" "}
                <b>56.000 Euro</b>. Wir bieten euch diese Leistung für einen
                Preis von <b>{project.price / 1000} Euro</b>
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Nehmt jetzt mit uns Kontakt auf
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
