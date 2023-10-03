import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BestSeller from "@/components/home/BestSeller";
import CTA from "@/components/home/CTA";
import Incentives from "@/components/home/Incentives";
import Review from "@/components/home/Review";

export default function Home() {
  return (
    <div className={`bg-white `}>
      <Navbar />
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="mx-auto">
            <div className="relative shadow-xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img className="h-full w-full object-cover" src="/images/hero.png" alt="People working on laptops" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-red-900 mix-blend-multiply" />
              </div>
              <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Welcome to</span>
                  <span className="block text-neutral-200 mt-2">Kitchen Mastery</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Kami menyediakan berbagai mesin makanan dan minuman. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="https://api.whatsapp.com/send?phone=6285600570000"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                    >
                      Konsultasi
                    </a>
                    <a href="/products" className="flex items-center justify-center rounded-md border border-transparent bg-red-500 bg-opacity-70 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-80 sm:px-8">
                      Belanja Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BestSeller />
        <Incentives />
        <Review />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}