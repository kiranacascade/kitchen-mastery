import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Bingsoo Machine Big 90Kg/Day",
    href: "/products/1",
    price: "Rp 10.000.000",
    imageSrc: "/images/bingsoo-machine/big.png",
  },
  {
    id: 2,
    name: "Bingsoo Machine Jumbo 250Kg/Day",
    href: "/products/2",
    price: "Rp 18.000.000",
    imageSrc: "/images/bingsoo-machine/jumbo.png",
  },
  {
    id: 3,
    name: "Bingsoo Machine Large 120Kg/Day",
    href: "/products/3",
    price: "Rp 11.500.000",
    imageSrc: "/images/bingsoo-machine/mini.png",
  },
];

export default function BestSeller() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mt-16 sm:mt-0">Our Best Sellers</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="overflow-hidden rounded-md bg-gray-100">
              <div className="relative aspect-w-4 aspect-h-4 ">
                <Image src={product.imageSrc} alt={product.name} width={400} height={400} />
                <div className="flex items-end px-6 py-12 opacity-0 group-hover:opacity-100" aria-hidden="true">
                  <div className="w-full rounded-md bg-white bg-opacity-50 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">View Product</div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
              <h3>
                <a href={product.href} className="text-lg font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <a href="/products" className="border border-red-600 py-2 px-4 rounded-md text-lg font-semibold text-gray-900 hover:bg-neutral-100">
          See all products
        </a>
      </div>
    </div>
  );
}
