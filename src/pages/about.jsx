import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const title = "About";
const description = "Di sini, Anda akan menemukan jawaban untuk pertanyaan umum seputar produk dan layanan kami. Silakan jelajahi FAQ kami untuk mendapatkan informasi yang Anda butuhkan.";
const image = "/images/faq-image.jpg";
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
                  All the charts, datepickers, and notifications in the world can&apos;t beat checking off some items on a paper card. All the charts, datepickers, and notifications in the world can&apos;t beat checking off some items on a
                  paper card. All the charts, datepickers, and notifications in the world can&apos;t beat checking off some items on a paper card.
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
