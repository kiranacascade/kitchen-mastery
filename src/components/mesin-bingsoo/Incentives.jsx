import Image from "next/image";

const perks = [
  {
    name: "Garansi Servis 6 Bulan",
    imageSrc: "/images/why/garansi.png",
    description: "Nikmati Garansi Servis 6 Bulan kami untuk ketenangan pikiran. Kami siap memperbaiki masalah tanpa biaya tambahan dalam 6 bulan pertama setelah pembelian.",
  },
  {
    name: "Gratis Simulasi",
    imageSrc: "/images/why/simulasi.png",
    description: "Dapatkan keuntungan dari Gratis Simulasi Operasional Mesin. Kami menyediakan simulasi gratis untuk membantu Anda menguasai pengoperasian mesin dengan percaya diri.",
  },
  {
    name: "Pemesanan Mudah",
    imageSrc: "/images/why/pemesanan.png",
    description: "Nikmati kemudahan memesan produk kami melalui platform online terpercaya seperti Shopee dan Tokopedia. Dapatkan proses pemesanan yang aman, transparan, dan terjamin kepercayaannya.",
  },
  {
    name: "Konsultasi Sepuasnya",
    imageSrc: "/images/why/konsultasi.png",
    description: "Nikmati Konsultasi Sepuasnya. Kami siap membantu Anda dengan pertanyaan dan panduan tanpa batasan, sehingga Anda selalu merasa didukung dalam setiap langkah.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gradient-to-b from-white to-neutral-100 py-24 mx-auto">
      <h2 className="sr-only">Why Kitchen Mastery?</h2>
      <h2 className="text-4xl font-bold text-center text-neutral-800 mb-8 md:mb-20">Mengapa Kitchen Mastery?</h2>
      <div className=" sm:px-2 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 md:gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex bg-white px-4 py-7 rounded-xl shadow-xl">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <Image className="h-24 w-24" src={perk.imageSrc} alt={perk.name} width={500} height={500} />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h3 className="text-xl font-bold text-red-700">{perk.name}</h3>
                <p className="mt-2 text-base text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
