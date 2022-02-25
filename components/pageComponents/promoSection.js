/* This example requires Tailwind CSS v2.0+ */
const testimonials = [
  {
    id: 1,
    quote:
      "Noch nie hat eine Kampagne so viel Kohle eingebracht wie diese! Danke Anti Boring Content Club, dass ihr uns auf den richtigen Weg gebracht habt",
    attribution: "Sarah Peters, McDonald's",
  },
  {
    id: 2,
    quote:
      "Bis zur Zusammenarbeit mit euch wusste ich gar nicht, wie viel Power im Influencermarketing steckt. Klasse Job, Jungs!",
    attribution: "Janosch Müller, Mercedes",
  },
  {
    id: 3,
    quote: "Geil, geil, geil! Noch nie hat Marketing so viel Spaß gemacht.",
    attribution: "Alex Förster, Deutsche Bahn",
  },
];

export default function PromoSection() {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Testimonials */}
      <section
        aria-labelledby="testimonial-heading"
        className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2
            id="testimonial-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Was unsere Kunden sagen
          </h2>

          <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-100"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="text-lg text-white">{testimonial.quote}</p>
                  <cite className="mt-4 block font-semibold not-italic text-white">
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
