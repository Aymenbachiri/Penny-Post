import { ChartIcon } from "@/lib/icons/ChartIcon";
import { MyImage } from "./common/MyImage";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { EyeIcon } from "@/lib/icons/EyeIcon";
import { PenIcon } from "@/lib/icons/PenIcon";

export default function Features() {
  const features = [
    {
      title: "Seamless Writing Tools",
      description:
        "Effortlessly draft and edit blog posts with our intuitive editor designed to boost your productivity.",
      icon: <PenIcon />,
    },
    {
      title: "Real-Time Preview",
      description:
        "Instantly see how your content will look on your blog with our real-time preview feature.",
      icon: <EyeIcon />,
    },
    {
      title: "Detailed Analytics",
      description:
        "Track your blog's performance with insights into views, likes, and shares to improve engagement.",
      icon: <ChartIcon />,
    },
    {
      title: "Global Accessibility",
      description:
        "Reach a worldwide audience with multilingual support and optimized blog designs for all devices.",
      icon: <GlobeIcon />,
    },
  ];
  return (
    <main className="mx-auto mt-44 max-w-7xl md:mt-0">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          Discover <br /> the Features of Penny Post
        </h1>
        <section className="mt-2">
          <span className="inline-block h-1 w-40 rounded-full bg-blue-500" />
          <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500" />
          <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500" />
        </section>
        <div className="mt-8 lg:flex lg:items-center xl:mt-12">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-1/2 xl:gap-16">
            {features.map((feature) => (
              <section key={feature.title} className="space-y-3">
                <span className="inline-block rounded-xl bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                  {feature.icon}
                </span>
                <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                  {feature.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>
              </section>
            ))}
          </div>
          <section className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <MyImage
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Person writing on a notebook"
              width={900}
              height={900}
              className="h-[28rem] w-[28rem] flex-shrink-0 rounded-full object-cover xl:h-[34rem] xl:w-[34rem]"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
