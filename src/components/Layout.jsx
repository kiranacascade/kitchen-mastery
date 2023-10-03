import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, title, description, image }) {
  return (
    <div className={`bg-white ${inter.className}`}>
      <Navbar />
      <Header title={title} description={description} image={image} />
      <main>
        <div className="bg-blue-gray-500">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
