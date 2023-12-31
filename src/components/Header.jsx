import Image from "next/image";

export default function Header({ title = "Kitchen Mastery", description = "Lorem ipsum...", image = "/images/contact-image.jpg" }) {
  return (
    <header className="relative bg-blue-gray-800 pb-36">
      <div className="absolute inset-0">
        <Image className="h-full w-full object-cover" width={1600} height={900} src={image} alt={title} />
        <div className="absolute inset-0 bg-blue-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 pb-2 lg:px-8"></div>

      <div className="relative mx-auto mt-24 max-w-md px-6 pb-24 sm:max-w-3xl md:mt-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-red-700 md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl text-blue-gray-300">{description}</p>
      </div>
    </header>
  );
}
