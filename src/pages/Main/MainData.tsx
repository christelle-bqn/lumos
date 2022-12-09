export type House = "gryffondor" | "Serpentard" | "Serdaigle" | "Poufsouffle";

export type Data = {
  title: string;
  spellsMostUsed: { name: string; number: number }[];
  characterMostSpells: string;
  houseMostSpells: House;
  spellsNumber: number;
  image: string;
  color: string;
};

export const data: Data[] = [
  {
    title: `Harry Potter a l'Ecole des sorciers`,
    spellsMostUsed: [
      { name: "Wingardium Leviosa", number: 3 },
      { name: "Alohomora", number: 1 },
      { name: "Oculus Reparo", number: 1 },
    ],
    characterMostSpells: "Hermione Granger",
    houseMostSpells: "gryffondor",
    spellsNumber: 5,
    image: "HP1.png",
    color: "#E4C580",
  },
  {
    title: `Harry Potter et la Chambre des Secrets`,
    spellsMostUsed: [
      { name: "Expelliarmus", number: 2 },
      { name: "Lumos", number: 1 },
      { name: "Immobulus", number: 1 },
    ],
    characterMostSpells: "Hermione Granger",
    houseMostSpells: "gryffondor",
    spellsNumber: 10,
    image: "HP2.png",
    color: "#C54038",
  },
  {
    title: `Harry Potter et le Prisonnier d'Azkaban`,
    spellsMostUsed: [
      { name: "Riddikulus", number: 6 },
      { name: "Expecto Patronum", number: 4 },
      { name: "Expelliarmus", number: 3 },
    ],
    characterMostSpells: "Harry Potter",
    houseMostSpells: "gryffondor",
    spellsNumber: 21,
    image: "HP3.png",
    color: "#A86D45",
  },
  {
    title: `Harry Potter et la Coupe de Feu`,
    spellsMostUsed: [
      { name: "Avada Kadavra", number: 3 },
      { name: "Accio", number: 3 },
      { name: "Crucio", number: 2 },
    ],
    characterMostSpells: "Harry Potter",
    houseMostSpells: "gryffondor",
    spellsNumber: 12,
    image: "HP4.png",
    color: "#9166A6",
  },

  {
    title: `Harry Potter et l'Ordre du Phoenix`,
    spellsMostUsed: [
      { name: "Stupefy", number: 8 },
      { name: "Avada Kadavra", number: 4 },
      { name: "Crucio", number: 4 },
    ],
    characterMostSpells: "Harry Potter",
    houseMostSpells: "gryffondor",
    spellsNumber: 35,
    image: "HP5.png",
    color: "#1C8150",
  },
  {
    title: `Harry Potter et le Prince de Sang-Melee`,
    spellsMostUsed: [
      { name: "Sectumsempra", number: 2 },
      { name: "Expelliarmus", number: 1 },
      { name: "Avada Kedavra", number: 1 },
    ],
    characterMostSpells: "Harry Potter",
    houseMostSpells: "gryffondor",
    spellsNumber: 13,
    image: "HP6.png",
    color: "#4B98B0",
  },
  {
    title: `Harry Potter et les Reliques de la Mort (1)`,
    spellsMostUsed: [
      { name: "Lumos", number: 4 },
      { name: "Accio", number: 3 },
      { name: "Protego Totalum", number: 2 },
    ],
    characterMostSpells: "Harry Potter",
    houseMostSpells: "gryffondor",
    spellsNumber: 24,
    image: "HP7.png",
    color: "#A5A5A2",
  },
  {
    title: `Harry Potter et les Reliques de la Mort (2)`,
    spellsMostUsed: [
      { name: "Lumos", number: 3 },
      { name: "Expelliarmus", number: 2 },
      { name: "Avada Kedavra", number: 2 },
    ],
    characterMostSpells: "Harry Potter",
    houseMostSpells: "gryffondor",
    spellsNumber: 15,
    image: "HP8.png",
    color: "#808080",
  },
];
