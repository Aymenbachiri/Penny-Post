import Body from "@/components/Body";
import Features from "@/components/Features";
import Location from "@/components/Location";
import Test from "@/components/Test";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penny Post - Discover Stories and Insights",
  description:
    "Explore a world of stories and insights on Penny Post, your go-to platform for inspiring blogs and articles.",
};

export default function Home() {
  return (
    <>
      <Body />
      <Features />
      <Testimonials />
      <Location />
      <Test />
    </>
  );
}
