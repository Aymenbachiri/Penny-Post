import { AppearAnimation } from "@/lib/animation/Animation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-[10%] max-w-7xl pb-[3%] text-slate-500">
      <div className="py-4 text-sm">
        <div className="mx-auto px-6">
          <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
            <h1 className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6">
              <AppearAnimation from="left">
                Penny Post all rights reserved {currentYear}
              </AppearAnimation>
            </h1>
            <section
              className="col-span-3 md:col-span-4 lg:col-span-6"
              aria-labelledby="subfooter-links-5-logo-sub"
            >
              <nav className="flex flex-wrap items-center justify-end gap-1">
                <AppearAnimation delay={0.2} from="right">
                  <h3>
                    Provided By{" "}
                    <a
                      href="https://www.linkedin.com/in/aymen-bachiri-9442b5287"
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aymen
                    </a>
                  </h3>
                </AppearAnimation>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
