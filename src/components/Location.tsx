export default function Location() {
  return (
    <main className="container mx-auto mt-[15%] max-w-7xl">
      <h1 className="py-4 text-center text-4xl font-bold">Our Location</h1>
      <section
        className="body-font relative py-10 text-gray-600"
        style={{ borderRadius: "10px" }}
      >
        <div className="w-full bg-gray-300" style={{ borderRadius: "10px" }}>
          <iframe
            style={{ borderRadius: "10px" }}
            className="h-[500px] w-full"
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bou+Saada%20City&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
