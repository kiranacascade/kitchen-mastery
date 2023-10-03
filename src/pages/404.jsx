import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h3 className="text-8xl font-bold text-red-600">404</h3>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Halaman tidak ditemukan</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Maaf, kami tidak dapat menemukan halaman yang kamu cari.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className="rounded-md bg-red-600 px-8 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
