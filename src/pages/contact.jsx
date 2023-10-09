import Layout from "@/components/Layout";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { SiShopee } from "react-icons/si";
import Image from "next/image";

const supportLinks = [
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=6285600570000",
    description: "Hubungi kami dengan cepat melalui WhatsApp. Kami siap merespons pertanyaan Anda dengan segera. Ketik pesan Anda dan kami akan memberikan bantuan yang Anda butuhkan.",
    icon: AiOutlineWhatsApp,
  },
  {
    name: "Email",
    href: "mailto:kitchenmastery.id@gmail.com",
    description: "Kirim email kepada kami untuk pertanyaan, saran, atau permintaan khusus. Tim kami akan membalas dengan informasi yang Anda perlukan dalam waktu singkat. Kami selalu siap untuk membantu Anda.",
    icon: EnvelopeOpenIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kitchenmasteryid",
    description: "Temukan kami di Instagram dan ikuti perjalanan kami. Jangan ragu untuk mengirimkan pesan atau mengomentari postingan kami. Kami senang berinteraksi dengan Anda di platform ini.",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const contactsInfo = [
  { name: "+62856-0057-0000", icon: AiOutlineWhatsApp },
  { name: "kitchenmastery.id@gmail.com", icon: EnvelopeOpenIcon },
  { name: "kitchenmasteryid", icon: AiOutlineInstagram },
  { name: "kitchenmastery", icon: SiShopee },
];

const title = "Hubungi Kami";
const description = "Apabila Anda memiliki pertanyaan atau memerlukan bantuan, tim kami siap membantu. Hubungi kami melalui kanal kontak kami di bawah ini!";
const image = "/images/contact-image.jpg";
export default function Contacts() {
  return (
    <Layout title={title} description={description} image={image}>
      <div className="bg-blue-gray-500">
        {/* Cards */}
        <section className="relative z-10 mx-auto -mt-32 max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 mb-32" aria-labelledby="contact-heading">
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-6 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-red-700 p-5 shadow-lg">
                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-blue-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-blue-gray-500">{link.description}</p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-blue-gray-50 p-6 md:px-8">
                  <a href={link.href} className="text-base font-medium text-red-700 hover:text-red-500">
                    Hubungi sekarang
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-white mb-24" aria-labelledby="join-heading">
          <div className="absolute inset-x-0 hidden h-1/2 bg-blue-gray-50 lg:block " aria-hidden="true" />
          <div className="mx-auto max-w-7xl bg-neutral-800 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                <div className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6  sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <Image className="-mt-12 lg:mt-0 rounded-2xl object-cover object-center shadow-2xl" width={1000} height={800} src="/images/cs.jpg" alt="Kitchen Master" />
                  </div>
                </div>
              </div>

              <div className="relative bg-neutral-800 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl ">
                <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                  <svg className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                    <defs>
                      <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                        <rect x={0} y={0} width={4} height={4} className="text-neutral-700" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                  <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                    <defs>
                      <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                        <rect x={0} y={0} width={4} height={4} className="text-red-500" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                </div>
                <div className="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                  <h2 className="text-3xl font-bold tracking-tight text-red-600" id="join-heading">
                    Informasi Kontak
                  </h2>
                  <p className="text-lg text-white">Kami siap menjawab semua pertanyaan anda pada jam operasional kami yaitu hari Senin-Jumat jam 08.00 - 16.00 WIB.</p>
                  <ul role="list" className="mt-4 space-y-4">
                    {contactsInfo.map((contact) => (
                      <li key={contact.name}>
                        <a className="flex" href="#">
                          <contact.icon className="h-5 w-5 text-red-600 mr-3 " aria-hidden="true" />
                          <p className="text-base text-neutral-200 hover:text-white">{contact.name}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
