import { Fragment, useState } from "react";
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";

const product = {
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
};
const policies = [
  {
    name: "Kostenlose Beratung",
    description:
      "Wenn ihr weitere Fragen habt, schreibt uns an! Wir besprechen gerne jede Idee mit euch",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "Komplettes Projektmanagement",
    description:
      "Wir übernehmen alle Arbeitsschritte - von der Ideenfindung bis hin zur Abnahme gemeinsam mit euch.",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "Schnelle Abwicklung",
    description:
      "Wir sind jederzeit erreichbar, um für euch den optimalen Support zu bieten.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "Blitzschnelles Reporting",
    description:
      "Maximal 7 Tage nach Ende des Projekts bekommt ihr ein erstes Reporting von uns zugesendet",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product({ project }) {
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-gray-50">
      <main>
        {/* Product */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {project.projectname}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    {project.price / 100} EUR
                  </p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {project.description}
                  </p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={project.featureImg}
                  alt="Projekt Symbolbild"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Genau das richtige für meine Brand!
                    </button>
                  </div>
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="group inline-flex text-base font-medium"
                    >
                      <ShieldCheckIcon
                        className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="text-gray-500 hover:text-gray-700">
                        Maximale Erfolgschancen durch Influencer-Marketing
                      </span>
                    </a>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Die weiteren Details
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                {project.detailDescription}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src={project.projectImg[0]}
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src={project.projectImg[1]}
                    alt="Front zipper pouch with included key ring."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Policies section */}
          <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
            <h2 id="policy-heading" className="sr-only">
              Our policies
            </h2>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
              {policies.map((policy) => (
                <div key={policy.name}>
                  <img src={policy.imageSrc} alt="" className="h-24 w-auto" />
                  <h3 className="mt-6 text-base font-medium text-gray-900">
                    {policy.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
