import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: "Marie Laurent",
    role: "Chef d'entreprise",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Grâce à leur expertise en gestion de patrimoine, j'ai pu optimiser mes investissements et sécuriser l'avenir de mon entreprise.",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Investisseur",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Un accompagnement personnalisé et des conseils avisés qui m'ont permis d'atteindre mes objectifs financiers.",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Directrice Financière",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Une équipe professionnelle qui comprend vraiment les enjeux financiers actuels et propose des solutions innovantes.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
