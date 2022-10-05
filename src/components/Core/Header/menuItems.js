export const menuItems = [
  {
    name: "",
    label: "Accueil",
  },
  {
    name: "company",
    label: "Le cabinet",
    items: [
      { name: "about", label: "A propos de nous" },
      {
        name: "services",
        label: "Nos services",
        items: [
          { name: "services/comptabilite", label: "Comptabilité" },
          { name: "services/audit", label: "Audit" },
          { name: "services/social", label: "Social" },
          { name: "services/fiscalite", label: "Fiscalité des particuliers" },
          { name: "services/conseil", label: "Conseil" },
          { name: "services/juridique", label: "Juridique" },
        ],
      },
      { name: "careers", label: "Nous rejoindre" },
      { name: "contact", label: "Nous contacter" },
    ],
  },
  {
    name: "needs",
    label: "Vos besoins",
    items: [
      { name: "customers/create", label: "Créer une entreprise" },
      { name: "customers/develop", label: "Développer mon business" },
      { name: "customers/transform", label: "Transformer mon activité" },
      { name: "customers/acquire", label: "Acquérir ou transmettre" },
    ],
  },

  {
    name: "ressources",
    label: "Ressources",
    items: [
      { name: "articles", label: "Articles" },
      { name: "events", label: "Evenements" },
      { name: "utils", label: "Liens et outils" },
    ],
  },
]
