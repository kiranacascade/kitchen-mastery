import Layout from "@/components/Layout";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

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
                  All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card. All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper
                  card. All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.
                </p>
                <div className="mt-8">
                  <a href="/contact" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 shadow-xl lg:rounded-r-2xl">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg" alt="" className="h-full w-full object-cover object-center " />
        </div>
      </div>
      {/* <div className="relative bg-neutral-900">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-red-600 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-md py-12 px-6 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-lg font-semibold text-gray-300">Customer Service Siaga</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
            <p className="mt-3 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                  Konsultasi dengan kami
                  <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
