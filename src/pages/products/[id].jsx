import allProducts from "@/data/products";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TbBrandShopee } from "react-icons/tb";
import { useRouter } from "next/router";
import LoadingIndicator from "@/components/LoadingIndicator";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    // Tampilkan indikator loading jika halaman fallback sedang dimuat
    return <div>Loading...</div>;
    // return <LoadingIndicator />;
  }
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img src={image} alt="" className="h-full w-full object-cover object-center" />
                          </span>
                          <span className={classNames(selected ? "ring-red-600" : "ring-transparent", "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2")} aria-hidden="true" />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product.images.map((image) => (
                  <Tab.Panel key={image}>
                    <img src={image} alt={product.name} className="h-full w-full object-cover object-center sm:rounded-lg" />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-2">
                <h2 className="sr-only">Product information</h2>
                <p className="text-2xl tracking-tight font-bold text-red-600">{product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon key={rating} className={classNames(product.rating > rating ? "text-yellow-400" : "text-gray-300", "h-5 w-5 flex-shrink-0")} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>

              <div className="mt-6 space-y-1.5">
                {Object.keys(product.details).map((detailKey) => (
                  <div key={detailKey} className="flex w-96 border border-neutral-800">
                    <div className="w-40 text-center py-0.5 border border-neutral-800 text-xs font-semibold bg-gradient-to-r from-red-600 via-red-800 to-red-600 text-white tracking-wider uppercase">{detailKey}</div>
                    <div className="w-56 text-center py-0.5 text-sm border border-neutral-800 font-medium">{product.details[detailKey]}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl mt-6 font-bold text-gray-900 mb-1">Fitur Utama:</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature) => (
                  <li key={feature} className="mt-2 text-base text-neutral-700">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center">
                <h3 className="mr-4 tracking-tight text-xl font-bold">Order Now via:</h3>
                <a
                  href={product.href.tokopedia}
                  className="flex justify-center rounded-md border border-transparent bg-green-600 py-3 px-9 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 mr-2"
                >
                  <TbBrandShopee className="h-5 w-5 text-white -ml-2 mr-2 my-auto" aria-hidden="true" />
                  Tokopedia
                </a>

                <a
                  href={product.href.shopee}
                  className="flex justify-center rounded-md border border-transparent bg-orange-600 py-3 px-12 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  <TbBrandShopee className="h-5 w-5 text-white -ml-2 mr-2 my-auto" aria-hidden="true" />
                  Shopee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const productId = params.id;
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}
