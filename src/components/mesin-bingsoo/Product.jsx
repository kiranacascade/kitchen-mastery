import products from "@/data/bingsoo";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-12">
        <h2 className="sr-only">Products</h2>
        <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">4 Macam Kapasitas Mesin</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-xl shadow-xl border-gray-200 bg-white transform transition-transform hover:scale-110">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 group-hover:opacity-95">
                <Image src={product.imageSrc} alt={product.imageAlt} width={700} height={700} className="h-full w-full object-cover object-center sm:h-full sm:w-full" />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4 ">
                <h3 className="text-lg font-bold text-neutral-900">
                  {/* <Link href={product.href}> */}
                  <span aria-hidden="true" className="absolute inset-0 " />
                  {product.name}
                  {/* </Link> */}
                </h3>

                <h4 className="font-bold text-lg text-red-600">
                  <span className="font-normal line-through text-sm text-gray-500 mr-2">{product.price}</span>
                  {product.discPrice}
                </h4>
                <div className="flex flex-1 flex-col justify-end"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
