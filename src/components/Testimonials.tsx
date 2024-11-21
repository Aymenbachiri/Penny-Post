"use client";

import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(
  () =>
    import("./ui/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials,
    ),
  { ssr: false },
);

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Penny Post has revolutionized the way we manage our content. The seamless interface and powerful tools make it a pleasure to use daily.",
      name: "Sophia Williams",
      designation: "Content Strategist at BrightIdeas",
      src: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1732214122~exp=1732217722~hmac=f208c2bb44abca48a65d4cfe7da0296b808b41c432f29b99a610b81259c7ad10&w=826",
    },
    {
      quote:
        "I've seen a remarkable boost in audience engagement since switching to Penny Post. Their features are second to none.",
      name: "Liam Johnson",
      designation: "Marketing Lead at GrowthSphere",
      src: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1732214000~exp=1732217600~hmac=cd809c91d516c12ab2fe811c65b6a1e84e5b584b57a0f8b221087a026a803446&w=826",
    },
    {
      quote:
        "The ease of collaboration on Penny Post has made our team's workflow much more efficient. Highly recommend it!",
      name: "Olivia Taylor",
      designation: "Editor-in-Chief at Insight Weekly",
      src: "https://img.freepik.com/free-photo/pleased-relaxed-woman-touching-neck-smiling-got-rid-pain_176420-20797.jpg?t=st=1732214158~exp=1732217758~hmac=47fe20fc5f150a0c8663f1d70488ade62bf65b755e3937886a5b601ccf6a57f4&w=826",
    },
    {
      quote:
        "Penny Post offers a fantastic balance of functionality and simplicity. It’s the perfect tool for any blogger or team.",
      name: "Noah Brown",
      designation: "Founder at BlogFlow",
      src: "https://img.freepik.com/free-photo/photo-attractive-smiling-man-with-trendy-hairstyle-positive-look-dressed-fashionable-festive-outfit-stands-against-pink-wall_273609-23540.jpg?t=st=1732214061~exp=1732217661~hmac=d56859ae65abbbcf433c350b3f3da810b8fdac2034cdcc86cad24c3dbc0f0ec4&w=826",
    },
    {
      quote:
        "The support team is incredibly responsive, and the platform itself has been a game-changer for our digital publishing efforts.",
      name: "Isabella Martinez",
      designation: "Digital Media Manager at Visionary",
      src: "https://img.freepik.com/free-photo/portrait-young-blonde-woman_273609-10438.jpg?t=st=1732214187~exp=1732217787~hmac=9ae513d51b6ed8bee8fbfc88f197d6cd788bf8aac9a9056b968b4ca672ae7c86&w=826",
    },
  ];

  return (
    <main className="mx-auto mt-[15%] flex max-w-7xl flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
        Testimonials
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </main>
  );
}
