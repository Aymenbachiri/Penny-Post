import { MyLink } from "@/components/common/MyLink";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center px-4 pt-[20%] text-center">
      <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">404</h1>
      <p className="mt-2 text-lg font-medium md:text-xl lg:text-2xl">
        Page not found
      </p>
      <p className="mt-1 text-sm font-light md:text-base lg:text-lg">
        The page you are looking for does not exist
      </p>
      <MyLink
        href="/"
        className="mt-4 text-sm font-semibold text-blue-600 hover:underline md:text-base lg:text-lg"
      >
        Go back home
      </MyLink>
    </main>
  );
}
