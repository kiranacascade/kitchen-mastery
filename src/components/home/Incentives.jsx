import Image from "next/image";

const incentives = [
  {
    name: "Pemesanan Mudah & Terpercaya",
    imageSrc: "/images/why/pemesanan.png",
    description: "Nikmati kemudahan memesan produk kami melalui platform online terpercaya seperti Shopee dan Tokopedia. Dapatkan proses pemesanan yang aman, transparan, dan terjamin kepercayaannya.",
  },
  {
    name: "Garansi Servis",
    imageSrc: "/images/why/garansi.png",
    description: "Nikmati Garansi Servis beberapa produk kami untuk ketenangan pikiran. Kami siap memperbaiki masalah tanpa biaya tambahan dalam periode waktu tertentu pertama setelah pembelian.",
  },
  {
    name: "Konsultasi Sepuasnya",
    imageSrc: "/images/why/konsultasi.png",
    description: "Nikmati Konsultasi Sepuasnya. Kami siap membantu Anda dengan pertanyaan dan panduan tanpa batasan, sehingga Anda selalu merasa didukung dalam setiap langkah.",
  },
];

export default function Incentives() {
  return (
    <div className="mx-auto py-24 sm:px-2 sm:pb-32 sm:pt-12 lg:px-10 bg-gradient-to-b from-white to-neutral-100">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">We built our business on great customer service</h2>
            <p className="mt-4 text-gray-500">
              At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the
              small print but hope people don&apos;t actually read it.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="relative aspect-w-3 aspect-h-2">
              <Image src="/images/incentives.jpg" alt="incentives" width={900} height={700} />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="sm:flex lg:block bg-white p-5 rounded-lg shadow-xl">
              <div className="sm:flex-shrink-0 ">
                <div className="h-16 w-16 relative">
                  <Image src={incentive.imageSrc} alt={incentive.name} width={250} height={250} />
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 className="text-lg font-semibold text-red-700">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
