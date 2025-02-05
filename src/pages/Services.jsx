import { ScaleIcon, DocumentTextIcon, UserGroupIcon, CalculatorIcon, CheckCircleIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: "ASSISTANCE JURIDIQUE",
    description: "Un accompagnement complet pour toutes vos démarches juridiques d'entreprise",
    icon: ScaleIcon,
    features: [
      "Création d'entreprise",
      "Immatriculation fiscale et sociale",
      "Modification de forme juridique",
      "Modification de raison sociale",
      "Formalités fiscales juridiques et sociales"
    ],
    detailedDescription: `Notre service d'assistance juridique vous offre un accompagnement personnalisé à chaque étape de la vie de votre entreprise :

    • Création d'entreprise : Nous vous guidons dans le choix de la forme juridique adaptée à votre activité et gérons toutes les formalités administratives.
    
    • Immatriculation fiscale et sociale : Nous prenons en charge l'ensemble des démarches d'immatriculation auprès des organismes concernés.
    
    • Modification de forme juridique : Nous vous conseillons sur l'évolution de votre structure et gérons les aspects juridiques de la transformation.
    
    • Modification de raison sociale : Nous vous accompagnons dans le changement de nom de votre entreprise en respectant les obligations légales.
    
    • Formalités fiscales juridiques et sociales : Nous assurons le suivi et la conformité de vos obligations légales tout au long de l'année.`
  },
  {
    title: "ASSISTANCE FISCALE",
    description: "Expertise et conseil en matière fiscale pour optimiser votre situation",
    icon: DocumentTextIcon,
    features: [
      "Déclarations fiscales (TEE, RME, RSI et RNI)",
      "Gestion des contentieux fiscaux",
      "Conseils fiscaux personnalisés"
    ],
    detailedDescription: `Notre expertise en assistance fiscale couvre tous les aspects de la fiscalité de votre entreprise :

    • Déclarations fiscales : Nous prenons en charge la préparation et le dépôt de vos déclarations fiscales (TEE, RME, RSI et RNI) dans le respect des délais.
    
    • Gestion des contentieux fiscaux : Notre équipe vous représente et défend vos intérêts en cas de contrôle ou de litige avec l'administration fiscale.
    
    • Conseils fiscaux personnalisés : Nous analysons votre situation pour optimiser votre fiscalité et vous proposer les meilleures stratégies d'optimisation fiscale.
    
    Nous restons à jour des dernières évolutions législatives pour vous garantir une conformité totale avec la réglementation en vigueur.`
  },
  {
    title: "ASSISTANCE SOCIALE",
    description: "Gestion complète de vos obligations sociales et développement RH",
    icon: UserGroupIcon,
    features: [
      "Gestion de paie",
      "Déclaration CNPS",
      "Gestion de droit",
      "Conseil",
      "Formation"
    ],
    detailedDescription: `Notre service d'assistance sociale vous accompagne dans tous les aspects de la gestion sociale de votre entreprise :

    • Gestion de paie : Nous assurons le calcul et l'édition des bulletins de paie, le suivi des congés et des absences.
    
    • Déclaration CNPS : Nous gérons vos obligations auprès de la CNPS, incluant les déclarations mensuelles et annuelles.
    
    • Gestion de droit : Nous vous assistons dans la gestion des contrats de travail, des procédures disciplinaires et des ruptures de contrat.
    
    • Conseil : Nous vous apportons notre expertise pour toutes vos questions en droit social et en gestion des ressources humaines.
    
    • Formation : Nous proposons des formations adaptées à vos besoins en matière de droit social et de gestion RH.`
  },
  {
    title: "ASSISTANCE COMPTABLE",
    description: "Solutions comptables professionnelles adaptées à votre entreprise",
    icon: CalculatorIcon,
    features: [
      "Structuration de la comptabilité",
      "Tenue comptable",
      "Bilan et visa",
      "Conseil comptable et financier",
      "Formation"
    ],
    detailedDescription: `Notre service d'assistance comptable vous propose une gestion comptable complète et professionnelle :

    • Structuration de la comptabilité : Nous mettons en place une organisation comptable adaptée à votre activité et à vos besoins.
    
    • Tenue comptable : Nous assurons la saisie et le classement de vos documents, l'établissement des états de rapprochement et le suivi de votre trésorerie.
    
    • Bilan et visa : Nous établissons vos états financiers annuels et les documents fiscaux obligatoires.
    
    • Conseil comptable et financier : Nous analysons vos performances et vous conseillons pour optimiser votre gestion financière.
    
    • Formation : Nous proposons des formations sur mesure pour vous permettre de mieux comprendre et utiliser vos outils comptables.`
  },
  {
    title: "ASSISTANCE À LA CRÉATION D'ENTREPRISE",
    description: "Un accompagnement complet pour lancer votre entreprise dans les meilleures conditions",
    icon: BuildingOfficeIcon,
    features: [
      "Conseil dans le choix du régime fiscal",
      "Suivi comptable, fiscal et social",
      "Rédaction de procédure comptable",
      "Recherche de financement",
      "Établissement de dossier technique et d'appel d'offres"
    ],
    detailedDescription: `Notre service d'assistance à la création d'entreprise vous offre un accompagnement sur mesure pour concrétiser votre projet :

    • Conseil dans le choix du régime fiscal : Nous analysons votre situation pour vous recommander le régime fiscal le plus adapté à votre activité et vos objectifs.
    
    • Suivi comptable, fiscal et social : Nous assurons un suivi rigoureux de vos obligations pour vous permettre de démarrer sereinement votre activité.
    
    • Rédaction de procédure comptable : Nous mettons en place des procédures comptables claires et efficaces adaptées à votre structure.
    
    • Recherche de financement : Nous vous accompagnons dans l'identification et l'obtention des financements nécessaires à votre projet.
    
    • Établissement de dossier technique et d'appel d'offres : Nous vous aidons à préparer des dossiers professionnels pour répondre aux appels d'offres et obtenir des marchés.`
  }
]

const faqs = [
  {
    question: "Quels sont les délais pour créer une entreprise avec vos services ?",
    answer: "En général, la création d'entreprise prend entre 5 à 10 jours ouvrables, selon la complexité du dossier et la forme juridique choisie. Nous nous engageons à traiter votre dossier dans les meilleurs délais tout en assurant sa conformité."
  },
  {
    question: "Comment se déroule la première consultation ?",
    answer: "La première consultation est gratuite et dure environ 1 heure. Nous analysons ensemble vos besoins, répondons à vos questions et établissons un plan d'action personnalisé. Cette rencontre peut se faire en présentiel ou en visioconférence."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon vos besoins et la taille de votre entreprise. Nous établissons un devis personnalisé après notre première consultation. Nous proposons des forfaits adaptés à chaque situation et des facilités de paiement."
  },
  {
    question: "Proposez-vous un accompagnement à distance ?",
    answer: "Oui, nous proposons un accompagnement à distance complet. Grâce à nos outils numériques, nous pouvons gérer efficacement votre dossier où que vous soyez en Côte d'Ivoire."
  }
]

const advantages = [
  {
    title: "Expertise Reconnue",
    description: "Plus de 10 ans d'expérience dans le conseil aux entreprises en Côte d'Ivoire",
    icon: CheckCircleIcon
  },
  {
    title: "Accompagnement Personnalisé",
    description: "Une équipe dédiée qui comprend vos besoins spécifiques",
    icon: CheckCircleIcon
  },
  {
    title: "Disponibilité",
    description: "Un suivi régulier et des réponses rapides à vos questions",
    icon: CheckCircleIcon
  },
  {
    title: "Solutions Innovantes",
    description: "Des outils modernes pour une gestion efficace de votre entreprise",
    icon: CheckCircleIcon
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(service) {
    setSelectedService(service)
    setIsOpen(true)
  }

  return (
    <div className="bg-gray-50">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions complètes pour la réussite de votre entreprise
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="h-5 w-5 text-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(service)}
                  className="mt-6 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-300"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pourquoi Nous Choisir Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Pourquoi Choisir KAN & KLE CONSULTING ?
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <advantage.icon className="h-8 w-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">{advantage.title}</h3>
                <p className="mt-2 text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Questions Fréquentes
          </h2>
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-primary-600 rounded-2xl">
          <div className="px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Prêt à développer votre entreprise ?
            </h2>
            <p className="mt-4 text-xl text-primary-100">
              Bénéficiez d'une consultation gratuite pour discuter de vos besoins
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-300"
            >
              Contactez-nous maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {selectedService && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6 text-gray-900 flex items-center"
                      >
                        <selectedService.icon className="h-8 w-8 text-primary-600 mr-4" />
                        {selectedService.title}
                      </Dialog.Title>
                      <div className="mt-4">
                        <p className="text-gray-700 whitespace-pre-line">
                          {selectedService.detailedDescription}
                        </p>
                      </div>
                    </>
                  )}

                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Fermer
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
