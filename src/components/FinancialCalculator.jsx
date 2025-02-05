import { useState } from 'react'
import { CalculatorIcon } from '@heroicons/react/24/outline'

export default function FinancialCalculator() {
  const [formData, setFormData] = useState({
    initialAmount: '',
    monthlyContribution: '',
    interestRate: '',
    years: ''
  })
  const [result, setResult] = useState(null)

  const calculateInvestment = (e) => {
    e.preventDefault()
    const P = parseFloat(formData.initialAmount)
    const PMT = parseFloat(formData.monthlyContribution)
    const r = parseFloat(formData.interestRate) / 100 / 12
    const t = parseFloat(formData.years) * 12

    // Formule pour le calcul de l'investissement avec versements mensuels
    const futureValue = P * Math.pow(1 + r, t) + 
      PMT * ((Math.pow(1 + r, t) - 1) / r)

    setResult({
      futureValue: futureValue.toFixed(2),
      totalContributions: (P + (PMT * t)).toFixed(2),
      interestEarned: (futureValue - (P + (PMT * t))).toFixed(2)
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <CalculatorIcon className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calculateur d\'Investissement
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Simulez la croissance de vos investissements dans le temps
          </p>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl shadow-lg p-8 max-w-xl mx-auto">
          <form onSubmit={calculateInvestment} className="space-y-6">
            <div>
              <label htmlFor="initialAmount" className="block text-sm font-medium text-gray-700">
                Montant initial (€)
              </label>
              <input
                type="number"
                name="initialAmount"
                id="initialAmount"
                value={formData.initialAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
                min="0"
              />
            </div>

            <div>
              <label htmlFor="monthlyContribution" className="block text-sm font-medium text-gray-700">
                Versement mensuel (€)
              </label>
              <input
                type="number"
                name="monthlyContribution"
                id="monthlyContribution"
                value={formData.monthlyContribution}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
                min="0"
              />
            </div>

            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
                Taux d\'intérêt annuel (%)
              </label>
              <input
                type="number"
                name="interestRate"
                id="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
                step="0.1"
                min="0"
                max="100"
              />
            </div>

            <div>
              <label htmlFor="years" className="block text-sm font-medium text-gray-700">
                Durée (années)
              </label>
              <input
                type="number"
                name="years"
                id="years"
                value={formData.years}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
                min="1"
                max="50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Calculer
            </button>
          </form>

          {result && (
            <div className="mt-8 space-y-4 p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Résultats</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Valeur future</p>
                  <p className="text-lg font-semibold text-primary-600">
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(result.futureValue)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total des contributions</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(result.totalContributions)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Intérêts gagnés</p>
                  <p className="text-lg font-semibold text-green-600">
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(result.interestEarned)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
