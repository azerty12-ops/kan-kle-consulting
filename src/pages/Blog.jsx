import { useState } from 'react';
import { EnvelopeIcon, ShareIcon } from '@heroicons/react/24/outline';

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

const popularPosts = blogPosts.slice(0, 3);

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [email, setEmail] = useState("");
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = selectedCategory === "Tous"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implémenter l'inscription à la newsletter
    alert("Merci de vous être inscrit à notre newsletter !");
    setEmail("");
  };

  const handleShare = (post) => {
    setSelectedPost(post);
    setShowShareModal(true);
  };

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const text = selectedPost ? selectedPost.title : "Blog KAN & KLE CONSULTING";
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };

    window.open(shareUrls[platform], '_blank');
    setShowShareModal(false);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog KAN & KLE CONSULTING
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Actualités et informations sur la finance, la fiscalité et la comptabilité en Côte d'Ivoire
          </p>
        </div>

        {/* Newsletter */}
        <div className="mt-8 bg-primary-50 rounded-2xl p-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Restez informé</h2>
            <p className="mt-2 text-gray-600">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-x-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                required
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Articles populaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Articles Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPosts.map((post) => (
              <div key={post.id} className="relative group">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres de catégories */}
        <div className="mt-16 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Liste des articles */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Lire l'article
                  </a>
                  <button
                    onClick={() => handleShare(post)}
                    className="rounded-full bg-gray-100 p-2.5 text-gray-600 hover:bg-gray-200"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de partage */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    Partager l'article
                  </h3>
                  <div className="mt-4 flex justify-center gap-4">
                    <button
                      onClick={() => shareOnSocial('twitter')}
                      className="rounded-full bg-[#1DA1F2] p-2 text-white hover:bg-opacity-90"
                    >
                      Twitter
                    </button>
                    <button
                      onClick={() => shareOnSocial('linkedin')}
                      className="rounded-full bg-[#0A66C2] p-2 text-white hover:bg-opacity-90"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => shareOnSocial('facebook')}
                      className="rounded-full bg-[#1877F2] p-2 text-white hover:bg-opacity-90"
                    >
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setShowShareModal(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
