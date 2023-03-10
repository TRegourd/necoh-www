const menus = [
  {
    name: "",
    label: "Accueil",
  },
  {
    name: "company",
    label: "Necoh",
    items: [
      { name: "a-propos", label: "A propos de nous" },
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
      { name: "emploi", label: "Nous rejoindre" },
      { name: "contact", label: "Nous contacter" },
      { name: "outils", label: "Liens et outils" },
    ],
  },
  {
    name: "clients",
    label: "Vos besoins",
    items: [
      { name: "clients/creer", label: "Créer une entreprise" },
      { name: "clients/developper", label: "Développer mon business" },
      { name: "clients/transformer", label: "Transformer mon activité" },
      { name: "clients/acquerir", label: "Acquérir ou transmettre" },
    ],
  },

  {
    name: "ressources",
    label: "Actualités",
    items: [
      { name: "articles", label: "Actualités règlementaires" },
      { name: "news", label: "Actualités Necoh" },
    ],
  },
]

function filterMenuItems(menus) {
  console.log(process.env.PUBLISH_MODE === "production")
  if (process.env.PUBLISH_MODE === "production") {
    const namesToFilter = ["services", "emploi", "clients"]

    return menus.filter(item => {
      if (item.items) {
        item.items = filterMenuItems(item.items, namesToFilter)
      }
      return !namesToFilter.includes(item.name)
    })
  } else return menus
}

export const menuItems = filterMenuItems(menus)
