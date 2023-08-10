import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="pt-10">
      <div className="container mx-auto py-4 flex justify-between">
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="Winston Logo"
            width={225}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center">
          <a className="mx-5" href="https://winstonfrancois.com">ABOUT US</a>
          <a className="mx-5" href="https://winstonfrancois.com">PRODCUTS / SERVICES</a>
          <a className="mx-5" href="https://winstonfrancois.com">PEOPLE</a>
          <a className="mx-5" href="https://winstonfrancois.com">VERTICLES</a>
          <Link className="mx-5" href="/blog">BLOG</Link>
          <Link className="mx-5 bg-[#00D2D2] text-[#282832] font-bold py-2 px-4 rounded-full" href="/contact-us">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
