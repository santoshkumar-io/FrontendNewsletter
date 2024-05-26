import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function NewsletterSection() {
  return (
    <section className="py-20 bg-neutral-200">
      <div className="container mx-auto flex items-center">
        <div className="w-3/5 pr-16">
          <h1 className="font-bold mb-4">
            Stay Ahead in the World of Frontend Development
          </h1>
          <p className="mb-6 text-gray-600">
            Welcome to <strong>Frontend Flux</strong>, your ultimate source for
            cutting-edge tips, tricks, tutorials, articles, and blogs on HTML,
            CSS, JavaScript, React.js and more. Our weekly newsletter is
            dedicated to keeping you informed and inspired with the latest
            trends and best practices in front-end technology. Don't miss
            out—subscribe today and be part of the flux that drives innovation!
          </p>
          <div className="relative mb-6">
            <input
              name="email"
              type="email"
              className="w-full input"
              placeholder="Enter your email address"
            />
            <button className="btn-primary rounded-xl flex items-center absolute right-3 top-3">
              <EnvelopeIcon className="size-6 font-medium text-neutral-100 pr-1" />
              Subscribe
            </button>
          </div>
          <div className="flex items-center">
            <span>
              <EnvelopeIcon className="size-6 font-medium text-primary pr-1" />
            </span>
            <span className="text-primary">Join the 1,000+</span> &nbsp;users
            that receive our weekly newsletter
          </div>
        </div>
        <div className="w-2/5">
          <div className="w-full h-full rounded-full bg-secondary1">
            <Image
              src="/newsletter-motivation.png"
              alt="Emailer X Webflow Template - Logo"
              loading="eager"
              width={538}
              height={538}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
