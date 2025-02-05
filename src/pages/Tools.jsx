import FinancialCalculator from '../components/FinancialCalculator'

export default function Tools() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Outils Financiers
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Des outils pratiques pour vous aider dans vos décisions financières
          </p>
        </div>

        <div className="mt-12">
          <FinancialCalculator />
        </div>
      </div>
    </div>
  )
}
