import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const title = "About";
const description =
  "Selamat datang di halaman tentang Kitchen Mastery, di mana kami mempersembahkan kisah dan nilai-nilai di balik setiap alat dapur kami. Sambut keintiman dan semangat Kitchen Mastery, di mana setiap detail memiliki cerita sendiri.";
const image = "/images/bg.jpg";

export default function About() {
  return (
    <Layout title={title} description={description} image={image}>
      <div className="relative mx-12 -mt-32 mb-24">
        <div aria-hidden="true" className="absolute hidden h-full w-1/2 lg:block rounded-xl shadow-xl " />
        <div className="relative bg-white lg:bg-white shadow-xl rounded-t-lg lg:rounded-l-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 lg:max-w-none lg:py-36">
              <div className="lg:pr-16">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl xl:text-4xl">Kitchen Mastery</h1>
                <p className="mt-6 text-base sm:text-lg text-gray-600">
                  Selamat datang di Kitchen Mastery! Kami adalah pusat keajaiban kuliner, menyajikan koleksi mesin pangan terbaik untuk menginspirasi dan meningkatkan keterampilan Anda dalam seni memasak. Mulai dari mesin pembuat es bingsoo
                  yang menyegarkan hingga stand mixer yang canggih, Kitchen Mastery hadir untuk membantu Anda mencapai level baru dalam dunia kuliner. Jelajahi inovasi kami, temukan keunikan setiap produk, dan bersama-sama kita ciptakan
                  pengalaman kuliner yang tak terlupakan.
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700">
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 shadow-xl lg:rounded-r-2xl">
          <Image src="/images/hero.png" width={1000} height={750} alt="Kitchen Mastery" className="h-full w-full object-cover object-center lg:rounded-r-2xl" />
        </div>
      </div>
    </Layout>
  );
}
