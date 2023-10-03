const perks = [
  {
    name: "Garansi Servis 6 Bulan",
    imageSrc: "/images/why/garansi.png",
    description: "Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "Gratis Simulasi",
    imageSrc: "/images/why/simulasi.png",
    description: "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
  },
  {
    name: "Pemesanan Mudah",
    imageSrc: "/images/why/pemesanan.png",
    description: "We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.",
  },
  {
    name: "Konsultasi Sepuasnya",
    imageSrc: "/images/why/konsultasi.png",
    description: "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
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
                  <img className="h-24 w-24" src={perk.imageSrc} alt={perk.name} />
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
