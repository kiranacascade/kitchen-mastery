import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    question: "Apakah produk yang dijual oleh Kitchen Mastery selalu tersedia?",
    answer:
      "Produk kami memiliki ketersediaan yang bervariasi. Beberapa produk tersedia secara langsung, sementara yang lain mungkin memerlukan waktu pengadaan dalam proses impor. Untuk informasi terkini mengenai ketersediaan stok, harap hubungi kami.",
  },
  {
    id: 2,
    question: "Berapa lama waktu yang diperlukan untuk pesanan dengan proses pengadaan di Kitchen Mastery?",
    answer:
      "Waktu pengadaan (PO) dapat bervariasi, mulai dari satu minggu hingga satu bulan, tergantung pada produk dan ketersediaan stok. Kami juga berupaya untuk memproses PO dengan cepat, dan dalam beberapa kasus, waktu pengadaan mungkin lebih singkat dari perkiraan.",
  },
  {
    id: 3,
    question: "Bagaimana cara melakukan pemesanan di Kitchen Mastery?",
    answer:
      "Kami menyediakan dua pilihan untuk pemesanan. Secara online, kami akan mengarahkan Anda ke toko resmi kami di platform e-commerce seperti Shopee dan Tokopedia. Untuk pembelian secara langsung, Anda dapat mengunjungi toko offline kami di Kota Pekalongan, Jawa Tengah.",
  },
  {
    id: 4,
    question: "Apa keunggulan dalam berbelanja di Kitchen Mastery?",
    answer:
      "Kami mengutamakan keamanan transaksi Anda. Pada pembelian online, kami menggunakan layanan pihak ketiga melalui platform e-commerce, yang menjamin keamanan dana Anda. Kami juga menyediakan demonstrasi dan bantuan dalam mengatur mesin saat digunakan. Produk kami telah melalui proses pemeriksaan kualitas sebelum pengiriman. Selain itu, kami menawarkan layanan service jika diperlukan.",
  },
  {
    id: 5,
    question: "Bagaimana sistem pengiriman di Kitchen Mastery berfungsi?",
    answer:
      "Pengiriman kami mengikuti layanan ekspedisi yang disediakan oleh platform marketplace, dengan memastikan bahwa barang dikemas dengan benar sesuai berat dan telah ditambahkan bahan kemasan tambahan, seperti kayu, untuk menjaga keamanan barang selama pengiriman. Kami juga mendorong pelanggan untuk menambahkan asuransi pengiriman untuk keamanan barang yang lebih baik.",
  },
  {
    id: 6,
    question: "Berapa biaya pengiriman dari Kitchen Mastery ke kota saya?",
    answer: "Anda dapat memeriksa biaya pengiriman langsung melalui toko kami di Shopee atau Tokopedia dengan melakukan proses checkout.",
  },
  {
    id: 7,
    question: "Apakah produk di Kitchen Mastery memiliki garansi?",
    answer: "Sebagian besar produk kami dilengkapi dengan garansi. Informasi lebih lanjut mengenai garansi tersedia dalam deskripsi produk masing-masing. Jika ada garansi yang berlaku, akan kami cantumkan secara jelas.",
  },
];

const title = "FAQs";
const description = "Di sini, Anda akan menemukan jawaban untuk pertanyaan umum seputar produk dan layanan kami. Silakan jelajahi FAQ kami untuk mendapatkan informasi yang Anda butuhkan.";
const image = "/images/faq-image.jpg";
export default function FAQ() {
  return (
    <Layout title={title} description={description} image={image}>
      <section className="relative z-10 mx-auto -mt-40 max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 mb-24" aria-labelledby="faq-heading">
        <h2 className="sr-only" id="faq-heading">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-16 md:px-12 lg:py-20 lg:px-8 rounded-2xl bg-white shadow-xl">
          <div className="mx-auto px-4 lg:px-12 divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Beberapa Pertanyaan yang sering ditanyakan</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left">
                          <span className="text-base font-semibold leading-7 text-gray-900 flex items-center">
                            <span>
                              <QuestionMarkCircleIcon className="h-6 w-6 text-red-700 mr-2" aria-hidden="true" />
                            </span>
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center text-red-700">{open ? <PlusSmallIcon className="h-6 w-6" aria-hidden="true" /> : <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />}</span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
