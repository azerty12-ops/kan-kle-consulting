import { ScaleIcon, DocumentTextIcon, UserGroupIcon, CalculatorIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

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
  }
]

export default function Services() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  function openModal(service) {
    setSelectedService(service)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions professionnelles complètes pour votre entreprise
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-center">
                  <service.icon className="h-12 w-12 text-primary-600" />
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-6 text-gray-600 text-center">
                  {service.description}
                </p>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Nos prestations :
                  </h4>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg 
                          className="h-6 w-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => openModal(service)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
