import Image from "next/image";
export default function TeamSection() {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto">
        <h2 className="text-center text-neutral-800 font-bold mb-11">
          Who's behind the newsletter
        </h2>
        <div className="card-normal">
          <div className="flex justify-between">
            <div className="">
              <Image
                src="/santoshkumar.jpeg"
                loading="eager"
                alt="Author - Santosh Kumar"
                className="rounded-xl"
                width={350}
                height={350}
              />
            </div>
            <div className="max-w-lg">
              <div className="my-5">
                <h3 className="text-neutral-800 font-bold">John Carter</h3>
                <div className="text-primary">
                  Serial Entrepreneur &amp; Angel VC
                </div>
              </div>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis porttitor posuere mus habitasse. Magna urna pharetra{" "}
                <span className="no-wrap">ut interdum.</span>
              </p>
              <div className="card-home-author-content-bottom">
                <div className="card-home-author-social-media-wrapper">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-media-link facebook w-inline-block"
                  ></a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="social-media-link twitter w-inline-block"
                  ></a>
                </div>
                <a
                  href="/about"
                  className="link-underline-wrapper card-home-author w-inline-block"
                >
                  <div>About John</div>
                  <div className="underline-wrapper">
                    <div className="underline"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
