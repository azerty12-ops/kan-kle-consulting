import { Link } from 'react-router-dom'
import { ArrowRightIcon, ScaleIcon, DocumentTextIcon, UserGroupIcon, CalculatorIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Testimonials from '../components/Testimonials'

const features = [
  {
    name: 'Assistance Juridique',
    description: 'Expertise complète en création d\'entreprise, modifications juridiques et formalités administratives.',
    icon: ScaleIcon,
  },
  {
    name: 'Assistance Fiscale',
    description: 'Gestion optimale de vos obligations fiscales et conseils personnalisés.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Assistance Sociale',
    description: 'Gestion de paie, déclarations CNPS et accompagnement RH complet.',
    icon: UserGroupIcon,
  },
  {
    name: 'Assistance Comptable',
    description: 'Tenue comptable professionnelle, bilans et conseils financiers experts.',
    icon: CalculatorIcon,
  },
]

const benefits = [
  "Conformité totale avec les réglementations en vigueur",
  "Optimisation fiscale et financière",
  "Gain de temps et tranquillité d'esprit",
  "Prévention des risques juridiques et fiscaux",
  "Accompagnement personnalisé et conseils experts"
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.postimg.cc/VkZfMVk9/group-business-people-analysis-with-marketing-report-graph-young-specialists-are-discussing-business.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">KAN & KLE CONSULTING</span>
              <span className="block text-primary-400">Construisons l'avenir ensemble</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Importance Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi choisir un accompagnement professionnel ?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Dans un environnement économique et réglementaire de plus en plus complexe, être accompagné par un cabinet d'expertise comme KAN & KLE CONSULTING devient une nécessité stratégique pour votre entreprise.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left Column: Why Professional Support Matters */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  L'importance d'un suivi professionnel
                </h3>
                <p className="text-gray-600 mb-6">
                  Le succès d'une entreprise repose sur des fondations solides et une gestion rigoureuse. Un accompagnement professionnel vous permet de :
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Why Choose Us */}
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Pourquoi KAN & KLE CONSULTING ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Notre cabinet se distingue par son approche personnalisée et son expertise multidisciplinaire. Nous nous engageons à :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Une équipe d'experts qualifiés et expérimentés</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Un accompagnement sur mesure adapté à vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Une disponibilité et une réactivité constantes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Des solutions innovantes et adaptées au contexte local</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Un engagement fort pour votre réussite</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Contactez-nous
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
