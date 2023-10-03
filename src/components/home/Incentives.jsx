const incentives = [
  {
    name: "Free shipping",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
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
              small print but hope people don't actually read it.
            </p>
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt="" className="object-cover object-center" />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="sm:flex lg:block bg-white p-5 rounded-lg shadow-xl">
              <div className="sm:flex-shrink-0 ">
                <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
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
