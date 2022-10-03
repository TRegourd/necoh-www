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
      { name: "career", label: "Nous rejoindre" },
      { name: "contact", label: "Nous contacter" },
    ],
  },
  {
    name: "needs",
    label: "Vos besoins",
    items: [
      { name: "needs/create", label: "Créer une entreprise" },
      { name: "needs/develop", label: "Développer mon business" },
      { name: "needs/transformer", label: "Transformer mon activité" },
      { name: "needs/acquire", label: "Acquérir ou transmettre" },
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
