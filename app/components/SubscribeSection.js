import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
export default function SubscribeSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden min-h-[430px] flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
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
                <CheckCircleIcon className="size-6 font-medium text-neutral-100 pr-1" />
              </span>
              Don't worry, we only send great content, no SPAM.
            </div>
          </div>
        </div>
      </div>
      <div className="cta-shape-1"></div>
      <div className="cta-shape-2"></div>
      <div className="cta-shape-3"></div>
    </section>
  );
}
