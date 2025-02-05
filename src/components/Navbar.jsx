import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const logoUrl = 'https://i.postimg.cc/XYScWsb8/LOGO-2.png'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
}

const linkVariants = {
  hover: { 
    scale: 1.1,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const contactButtonVariants = {
  hover: { 
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95 
  }
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-sky-500 to-primary-600 w-full fixed top-0 z-50" />
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <motion.div 
            className="flex lg:flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">KAN & KLE CONSULTING</span>
              <motion.img 
                className={`h-12 w-auto transition-all duration-300 ${scrolled ? 'brightness-90' : 'brightness-100'}`} 
                src={logoUrl} 
                alt="Logo"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>
          
          <div className="flex lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    to={item.href}
                    className={`relative text-sm font-semibold leading-6 transition-all duration-300 ${
                      scrolled 
                        ? 'text-gray-700 hover:text-primary-600' 
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary-500 w-full"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.div
              variants={contactButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/contact"
                className={`group flex items-center gap-2 text-sm font-semibold leading-6 px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'text-white bg-primary-600 hover:bg-primary-700'
                    : 'text-primary-600 bg-white hover:bg-gray-100'
                }`}
              >
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <PhoneIcon className="h-4 w-4" />
                </motion.div>
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <motion.div 
                className="fixed inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <Dialog.Panel
                as={motion.div}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                      <span className="sr-only">KAN & KLE CONSULTING</span>
                      <img className="h-8 w-auto" src={logoUrl} alt="Logo" />
                    </Link>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Fermer le menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </motion.button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item, index) => {
                        const isActive = location.pathname === item.href
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <Link
                              to={item.href}
                              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-300 ${
                                isActive
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-gray-900 hover:bg-gray-50'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                    <div className="py-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          to="/contact"
                          className="flex items-center justify-center gap-2 rounded-full px-3 py-2.5 text-base font-semibold leading-7 text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <PhoneIcon className="h-5 w-5" />
                          Nous contacter
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
