import Layout from "@/components/Layout";
import allProducts from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const title = "Produk Kami";
const description = "Kami menyediakan berbagai food processing machine dan kitchen equipment. Salah satu best seller kami yaitu mein bingsoo viral. Silakan jelajahi halaman ini untuk mendapatkan informasi yang Anda butuhkan.";
const image = "/images/bg.jpg";

export default function Example() {
  return (
    <Layout title={title} description={description} image={image}>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 -mt-36 mb-24">
            {allProducts.map((product) => (
              <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-lg border shadow-xl bg-white">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <Image src={product.imageSrc} alt={product.imageAlt} width={500} height={500} className="h-full w-full object-cover object-center sm:h-full sm:w-full" />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link href={`/products/${product.id}`} className="text-lg font-semibold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
