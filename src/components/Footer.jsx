import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const logoUrl = 'https://i.postimg.cc/XYScWsb8/LOGO-2.png'

const navigation = {
  services: [
    { name: 'Assistance Juridique', href: '/services' },
    { name: 'Assistance Fiscale', href: '/services' },
    { name: 'Assistance Sociale', href: '/services' },
    { name: 'Assistance Comptable', href: '/services' },
  ],
  contact: [
    { name: 'Téléphone 1', value: '+225 07 79 33 82 31', icon: PhoneIcon },
    { name: 'Téléphone 2', value: '+225 05 44 48 77 78', icon: PhoneIcon },
    { name: 'Email', value: 'kankleconsulting225@gmail.com', icon: EnvelopeIcon },
    { name: 'Adresse', value: 'Abidjan Cocody Rivera, Abatta Cité Symphonia', icon: MapPinIcon },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-4 sm:pt-6 lg:px-6 lg:pt-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-2">
          <div className="space-y-2">
            <img
              className="h-12 w-auto"
              src={logoUrl}
              alt="KAN & KLE CONSULTING"
            />
            <p className="text-xs leading-5 text-gray-300">
              Votre partenaire de confiance pour l'assistance juridique, fiscale, sociale et comptable.
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-primary-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-2">
              <div>
                <h3 className="text-xs font-semibold leading-5 text-white">Services</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-xs leading-5 text-gray-300 hover:text-primary-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-xs font-semibold leading-5 text-white">Contact</h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.contact.map((item) => (
                    <li key={item.name} className="flex items-center">
                      <item.icon className="h-3 w-3 text-primary-400 mr-1" />
                      <span className="text-xs leading-5 text-gray-300">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-2">
          <p className="text-xs text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} KAN & KLE CONSULTING. Tous droits réservés.
            <Link to="/admin" className="ml-2 text-gray-400 hover:text-gray-500">
              Administration
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
