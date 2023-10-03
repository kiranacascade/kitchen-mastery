import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import products from "@/data/bingsoo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features() {
  return (
    <section aria-labelledby="features-heading" className="mx-auto py-12 sm:px-2 lg:px-12 bg-white">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <div className="max-w-3xl">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fitur Unggulan
          </h2>
          <p className="mt-4 text-gray-500">The Organize modular system offers endless options for arranging your favorite and most used items. Keep everything at reach and in its place, while dressing up your workspace.</p>
        </div>

        <Tab.Group as="div" className="mt-4">
          <div className="-mx-4 flex overflow-x-auto sm:mx-0">
            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
              <Tab.List className="-mb-px flex space-x-3 md:space-x-10">
                {products.map((product) => (
                  <Tab
                    key={product.name}
                    className={({ selected }) =>
                      classNames(selected ? "border-red-600 text-red-600 font-bold" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-semibold", "whitespace-nowrap border-b-2 pt-6 pb-4 text-sm md:text-base")
                    }
                  >
                    {product.type}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>

          <Tab.Panels as={Fragment}>
            {products.map((product) => (
              <Tab.Panel key={product.name} className="space-y-16 pt-10 lg:pt-8">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                  <div className="mt-6 lg:col-span-6 lg:mt-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{product.name}</h3>
                    <ul className="list-disc list-inside">
                      {product.features.map((feature) => (
                        <li key={product.type} className="mt-2 text-base text-neutral-700">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 space-y-1.5">
                      {Object.keys(product.details).map((detailKey) => (
                        <div key={detailKey} className="flex w-96 border border-neutral-800">
                          <div className="w-40 text-center py-1 border border-neutral-800 text-sm font-semibold bg-gradient-to-r from-red-600 via-red-800 to-red-600 text-white tracking-wider uppercase">{detailKey}</div>
                          <div className="w-56 text-center py-1 border border-neutral-800 font-medium">{product.details[detailKey]}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="overflow-hidden rounded-lg bg-gray-100 aspect-w-5 aspect-h-4">
                      <img src={product.image} alt={product.name} className="object-cover object-center" />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
