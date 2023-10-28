import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

const testimonials = [
  {
    id: 1,
    quote: "Mantap mesin normal, pengiriman cepat. Packing aman sekali dibonusin packing kayu👍🏻 bismillah buat usaha🤲🏻",
    attribution: "Rattandi",
  },
  {
    id: 2,
    quote: "Adminnya responsif dan ngebantu banget, diajarkan sampe bisa pakai mesinnya. Ternyata gampang, sekali coba langsung bisa. Pengirimannya juga aman dikasih packing kayu",
    attribution: "Kartika",
  },
  {
    id: 3,
    quote: "Sudah lama cari mesin ini. Alhamdulillah dapet kualitas bagus harga terjangkau dan bergaransi. Mantap👍🏻",
    attribution: "Naufal",
  },
];

export default function CTABingsoo() {
  return (
    <div className="relative overflow-hidden ">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0 -mx-12">
        <div className="absolute inset-0 mx-auto overflow-hidden xl:px-8">
          <Image src="/images/mesin-bingsoo/bingsoo.png" alt="" className="w-full object-cover object-center" width={1600} height={1000} />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>

      {/* Sale */}
      <section aria-labelledby="sale-heading" className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-5xl lg:mb-8">
            Ada yang ingin ditanyakan?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-neutral-700">Tidak perlu ragu untuk bertanya, tim kami selalu siap memberikan jawaban terbaik untuk semua pertanyaan Anda. Kami siap mendengar dan membantu!</p>
          <Link href="https://api.whatsapp.com/send?phone=6285600570000" className="mt-6 inline-block w-full rounded-lg border border-transparent bg-red-700 py-3 px-8 font-medium text-white hover:bg-red-800 sm:w-auto mr-4">
            Chat Sekarang
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonial-heading" className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" className="text-4xl font-bold tracking-tight text-gray-900">
            Testimonials
          </h2>

          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <svg width={24} height={18} viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="text-lg text-gray-600">{testimonial.quote}</p>
                  <div className="flex mt-5">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon key={rating} className="text-yellow-400 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    ))}
                  </div>

                  <cite className="mt-2 block font-semibold not-italic text-gray-900">{testimonial.attribution}</cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
