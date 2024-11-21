import React from "react";
import { MyLink } from "./common/MyLink";
import { FeatherIcon } from "@/lib/icons/FeatherIcon";
import { MyImage } from "./common/MyImage";

export default function Body() {
  return (
    <main className="mx-auto px-4 pt-[15%] sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-[20%]">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0">
          <section className="bg-teal-accent-400 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <FeatherIcon />
          </section>
          <section className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none">
              Unlock the power of words <br className="hidden md:block" />
              with{" "}
              <span className="text-deep-purple-accent-400 inline-block">
                Penny Post
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
              Dive into a world of ideas, stories, and knowledge. From personal
              musings to expert advice, Penny Post is your companion for
              discovering and sharing insights that inspire.
            </p>
          </section>
          <nav>
            <MyLink
              href="/posts"
              aria-label="Penny Post"
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Discover
              <svg
                className="ml-2 inline-block w-3"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </MyLink>
          </nav>
        </div>
        <div className="-mx-4 flex items-center justify-center lg:pl-8">
          <section className="flex flex-col items-end px-3">
            <MyImage
              src="https://img.freepik.com/free-photo/young-caucasian-business-woman-working-office-looks-stylish-paperwork-analyzing-looking-desicion_155003-40652.jpg?t=st=1732209166~exp=1732212766~hmac=71e3bc11bdebb5b16da11f23361abdcfc25bdf16f7e2e6af263214781581a108&w=1380"
              alt="A person writing notes on a desk"
              width={400}
              height={400}
              className="mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56"
            />

            <MyImage
              src="https://img.freepik.com/free-photo/horizontal-view-open-unwritten-spiral-notebook-conifer-cones-fir-branche-cup-black-tea-cinnamon-limes-dark-background_140725-140774.jpg?t=st=1732209115~exp=1732212715~hmac=503bbc0e4f0612f452aed6a9e4e1fa7bed2b554be4d71b60d04dbbdc7ac68474&w=1380"
              alt="Open book with a cup of coffee"
              width={400}
              height={400}
              className="h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40"
            />
          </section>
          <section className="px-3">
            <MyImage
              src="https://img.freepik.com/free-photo/top-view-educational-elements-arrangement-with-empty-notepad_23-2148721229.jpg?t=st=1732209821~exp=1732213421~hmac=489a69f3dbff6afeafbc0e7c172c6ebf4bec8874b42c97a6d224032278ccbe22&w=996"
              alt="Sunrise with an inspiring quote in the background"
              width={600}
              height={600}
              className="h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
