import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-600 hover:text-primary-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/tools" className="text-gray-600 hover:text-primary-600">
                Outils
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-primary-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services Financiers</h3>
              <p className="text-gray-400">
                Solutions financières innovantes pour votre avenir
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white">
                    Nos Services
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="text-gray-400 hover:text-white">
                    Outils Financiers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                <p>123 Avenue des Finances</p>
                <p>75008 Paris, France</p>
                <p className="mt-2">Email: contact@services-financiers.fr</p>
                <p>Tél: +33 1 23 45 67 89</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Services Financiers. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
