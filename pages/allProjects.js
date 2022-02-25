/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import Layout from "./components/Layout";
import Card from "./components/Card";
const { projects } = require("./mockups/projects");

const filters = [
  {
    id: "category",
    name: "Geeignet für",
    options: [
      { value: "travel", label: "Reisen" },
      { value: "FMCG", label: "FMCG" },
      { value: "cars", label: "Autos" },
      { value: "food", label: "Lebensmittel" },
    ],
  },
  {
    id: "audience",
    name: "Zielgruppe",
    options: [
      { value: "male", label: "Männlich" },
      { value: "female", label: "Weiblich" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllProjects() {
  const [newfilters, setFilters] = useState({
    travel: true,
    fmcg: true,
    cars: true,
    food: true,
    male: true,
    female: true,
    price: 0,
  });

  const handleclick = (e) => {
    setFilters({ ...newfilters, [e.target.name]: !newfilters[e.target.name] });
  };

  const handleChange = (e) => {
    setFilters({ ...newfilters, price: e.target.value });
  };

  useEffect(() => {
    projects.filter((project) => {
      return project.price >= newfilters.price;
    });
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <Layout>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filter
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="pt-4 pb-2 px-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-b border-gray-200 pb-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Alle Projekte
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Checkout out the latest release of Basic Tees, new and improved
                with four openings!
              </p>
            </div>

            <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              <aside>
                <h2 className="sr-only">Filters</h2>

                <button
                  type="button"
                  className="inline-flex items-center lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="text-sm font-medium text-gray-700">
                    Filter
                  </span>
                  <PlusSmIcon
                    className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </button>

                <div className="hidden lg:block">
                  <form className="divide-y divide-gray-200 space-y-10">
                    <div className="pt-10">
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          Geeignet für
                        </legend>
                        <div className="pt-6 space-y-3">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              checked={newfilters.cars}
                              name="cars"
                              onClick={handleclick}
                            />
                            <label className="ml-3 text-sm text-gray-600">
                              Autos
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              checked={newfilters.travel}
                              name="travel"
                              onChange={handleclick}
                            />
                            <label className="ml-3 text-sm text-gray-600">
                              Reisen
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              checked={newfilters.fmcg}
                              name="fmcg"
                              onChange={handleclick}
                            />
                            <label className="ml-3 text-sm text-gray-600">
                              FMCG
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              checked={newfilters.food}
                              name="food"
                              onChange={handleclick}
                            />
                            <label className="ml-3 text-sm text-gray-600">
                              Food
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Maximaler Preis
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">€</span>
                        </div>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                          aria-describedby="price-currency"
                          onChange={handleChange}
                          value={newfilters.price}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span
                            className="text-gray-500 sm:text-sm"
                            id="price-currency"
                          >
                            EUR
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </aside>

              {/* Product grid */}
              <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                >
                  {projects
                    .filter(
                      (project) => project.price >= newfilters.price * 100
                    )
                    .filter((project) => {
                      let sum = 0;
                      project.tags.forEach((tag) => {
                        if (newfilters[tag] == false) sum++;
                      });
                      console.log(project.tags.length, sum);
                      return sum < project.tags.length;
                    })
                    .filter((project) => newfilters[project.influencer.gender])
                    .map((project) => {
                      return (
                        <li>
                          <Card
                            key={project.id}
                            image={project.featureImg}
                            heading={project.projectname}
                            description={project.description}
                            tags={project.tags}
                            id={project.id}
                          ></Card>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
