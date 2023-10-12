import Image from "next/image";

export default function LoadingIndicator() {
  return (
    <div className="loading-indicator h-full w-full my-auto mx-auto">
      <Image src="/images/logo.png" className="h-10 w-full" alt="Loading" />
    </div>
  );
}
