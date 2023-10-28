import Incentives from "@/components/mesin-bingsoo/Incentives";
import CTABingsoo from "@/components/mesin-bingsoo/Testimoni";
import Form from "@/components/mesin-bingsoo/Form";
import Footer from "@/components/Footer";
import Features from "@/components/mesin-bingsoo/Features";
import Product from "@/components/mesin-bingsoo/Product";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative">
        <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-neutral-900 md:block" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:grid md:grid-cols-2 md:px-8 bg-neutral-900">
            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:pt-56 lg:pb-36">
              <div className="md:pr-8 lg:pr-16">
                <Link href="/">
                  <Image src="/images/logo-white.png" alt="Kitchen Mastery" width={300} height={96} className="lg:absolute lg:top-16 h-10 lg:h-12 mb-8 relative" />
                </Link>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-2xl xl:text-3xl mb-4 text-red-700">Peluang Bisnis 2023</h2>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl xl:text-5xl">Mesin Bingsoo Viral</h1>
                <p className="mt-8 text-xl md:text-lg text-neutral-200">
                  Bingung memulai bisnis cafe? Es Bingsoo Korea viral adalah solusinya! Kapan lagi punya bisnis minim kompetisi, modal murah, pengoperasian mudah, dan HPP rendah, kesuksesan bisnismu tak perlu ditunda lagi. Pesan Mesin
                  Bingsoo Viral dari Kitchen Mastery sekarang dan raih cuan besar! 🚀
                </p>
                <div className="mt-10">
                  <a href="#kontak-kami" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700">
                    Info Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 w-full md:absolute md:top-0 md:right-0 md:h-full md:w-1/2">
          <Image src="/images/mesin-bingsoo/hero-1.png" alt="Kitchen Mastery Mesin Bingsoo" width={1600} height={1000} className="relative h-full w-full" />
          <div className="h-96 md:h-full hidden md:block absolute inset-0 bg-gradient-to-r from-neutral-700 to-transparant mix-blend-multiply" />
        </div>
      </div>

      <Product />
      <Features />
      <Incentives />
      <CTABingsoo />
      <Form />
      <Footer />
    </div>
  );
}
