import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Nouvelle réglementation OHADA : Comptabilité obligatoire pour les organisations à but non lucratif",
    date: "1 Janvier 2024",
    category: "Comptabilité",
    description: "À partir du 1er janvier 2024, toutes les entités à but non lucratif, y compris les organisations religieuses et ONG, doivent tenir une comptabilité conformément aux nouvelles directives de l'OHADA. Cette décision majeure vise à améliorer la transparence financière.",
    imageUrl: "https://i.postimg.cc/qBvyJ8Vv/ohada.jpg",
    link: "https://www.ohada.com/actualite/7057/publication-ohada-les-pratiques-de-la-comptabilite-des-entites-du-secteur-a-but-non-lucratif-dans-les-pays-ohada-des-2024-associations-ordres-professionnels-et-projets-de-developpement.html"
  },
  {
    id: 2,
    title: "Contrôle physique des retraités et rentiers CNPS 2024",
    date: "21 Janvier 2024",
    category: "Social",
    description: "La CNPS lance sa campagne annuelle de contrôle physique des retraités et rentiers. Cette opération vise à maintenir à jour la base de données des bénéficiaires et garantir la bonne distribution des prestations sociales.",
    imageUrl: "https://i.postimg.cc/Hx1HJZdP/cnps.jpg",
    link: "https://www.cnps.ci/wp-content/uploads/2024/08/COMMUNIQUE-CONTROLE-PHYSIQUE-DES-RETRAITES-ET-RENTIERS-2024-COTE-DIVOIRE.pdf"
  },
  {
    id: 3,
    title: "Révision du Traité OHADA : Les États membres se réunissent à Abidjan",
    date: "4 Mars 2024",
    category: "Juridique",
    description: "15 des 17 États membres du Traité de l'OHADA se réunissent à Abidjan pour examiner les propositions de révision du traité. Ces modifications visent à améliorer l'environnement des affaires dans la région.",
    imageUrl: "https://i.postimg.cc/qRHPj8dq/ohada-meeting.jpg",
    link: "https://www.ohada.com/actualite/7199/cote-divoire-droits-des-affaires-les-etats-membres-de-lohada-reflechissent-sur-des-propositions-de-revision-du-traite-a-abidjan.html"
  },
  {
    id: 4,
    title: "Nouveau plafond des cotisations sociales CNPS",
    date: "15 Janvier 2024",
    category: "Social",
    description: "La CNPS annonce la mise en place d'un nouveau plafond pour les cotisations sociales. Cette mesure impacte directement les employeurs et les salariés, avec des modifications importantes dans le calcul des cotisations.",
    imageUrl: "https://i.postimg.cc/SKhQXmZY/cnps-building.jpg",
    link: "https://www.cnps.ci/wp-content/uploads/2023/01/NOUVEAU-PLAFOND-DES-COTISATIONS-SOCIALES-DE-LA-CNPS.pdf"
  },
];

const categories = ["Tous", "Comptabilité", "Social", "Juridique", "Finance"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPosts = selectedCategory === "Tous"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog KAN & KLE CONSULTING
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Actualités et informations sur la finance, la fiscalité et la comptabilité en Côte d'Ivoire
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="group w-full">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary-600 group-hover:text-primary-500">
                      Lire l'article complet →
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
