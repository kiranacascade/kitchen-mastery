import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbBrandShopee } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "PRODUCTS", href: "/products" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  return (
    <Popover className="relative bg-neutral-800">
      <div className="flex items-center justify-between px-6 py-5 lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">Kitchen Mastery</span>
            <Image src="/images/logo-white.png" alt="Kitchen Mastery" width={280} height={110} className="h-8 w-auto sm:h-10 shrink-0" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-neutral-800 p-2 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden lg:space-x-10 lg:flex">
          {links.map((link) => (
            <Link href={link.href} key={link.name} className="text-base font-medium text-white hover:text-red-500 tracking-wide">
              {link.name}
            </Link>
          ))}
        </Popover.Group>
        <div className="hidden items-center justify-end lg:mr-2 lg:flex lg:flex-1 lg:w-0">
          <span className="text-base text-neutral-300 font-medium">Our Store:</span>
          <Link
            href="https://www.tokopedia.com/kitchenmastery"
            className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
          >
            <Image src="/images/logo-tokped-white.png" alt="Tokopedia" width={20} height={20} className="h-4 w-auto mr-2" />
            Tokopedia
          </Link>
          <Link
            href="https://shopee.co.id/kitchenmastery"
            className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
          >
            <TbBrandShopee className="h-5 w-5 text-white mr-2" aria-hidden="true" />
            Shopee
          </Link>
        </div>
      </div>

      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden z-20">
          <div className="divide-y-2 divide-neutral-50 rounded-lg bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image src="/images/logo-white.png" alt="Kitchen Mastery" width={280} height={110} className="h-8 w-auto sm:h-10 shrink-0" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-neutral-800 p-2 text-gray-400 hover:neutral-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-rows-4 gap-2">
                {links.map((link) => (
                  <Link href={link.href} key={link.name} className="text-base font-medium text-white hover:text-red-600">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <p className="mt-6 mb-2 text-center text-base font-medium text-neutral-400">Our Store:</p>
                <Link
                  href="https://www.tokopedia.com/kitchenmastery"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 mb-2"
                >
                  <Image src="/images/logo-tokped-white.png" alt="Tokopedia" width={20} height={20} className="h-4 w-auto mr-2" />
                  Tokopedia
                </Link>
                <Link href="https://shopee.co.id/kitchenmastery" className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 mb-2">
                  <TbBrandShopee className="h-5 w-5 text-white mr-2" aria-hidden="true" />
                  Shopee
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
