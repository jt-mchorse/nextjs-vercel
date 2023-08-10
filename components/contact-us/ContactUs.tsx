import Link from "next/link";

import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className="contact-us bg-[#282832] text-[#F6F4F0] mx-6 p-14 flex items-center justify-between">
      <div className="text-4xl">Ready to unlock your growth?</div>
      <Link
        className="bg-[#00D2D2] text-[#282832] text-2xl font-bold py-5 px-10 rounded-full"
        href="/contact-us"
      >
        Contact Us
      </Link>
    </div>
  );
}
