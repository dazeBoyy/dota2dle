export interface Hero {
  id: number;
  name: string;
  primaryAttribute: 'Strength' | 'Agility' | 'Intelligence' | 'Universal';
  attackType: 'Melee' | 'Ranged';
  roles: string[];
  complexity: 1 | 2 | 3;
  releaseYear: number;
  image: string;
  heroId: number;
  heroImageName: string;
  lanes: string[];
  gender: 'Male' | 'Female' | 'Unknown';
  race: string[];
  legs: number;
}


export const heroes: Hero[] = [
  {
    "id": 0,
    "name": "Anti-Mage",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
    "heroId": 1,
    "heroImageName": "antimage",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 1,
    "name": "Axe",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Durable",
      "Disabler",
      "Carry"
    ],
    "complexity": 1,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
    "heroId": 2,
    "heroImageName": "axe",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Oglodi"
    ],
    "legs": 2
  },
  {
    "id": 2,
    "name": "Bane",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker",
      "Durable"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
    "heroId": 3,
    "heroImageName": "bane",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Other",
    "race": [
      "Elemental"
    ],
    "legs": 4
  },
  {
    "id": 3,
    "name": "Bloodseeker",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
    "heroId": 4,
    "heroImageName": "bloodseeker",
    "lanes": [
      "Carry",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Beast"
    ],
    "legs": 2
  },
  {
    "id": 4,
    "name": "Crystal Maiden",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
    "heroId": 5,
    "heroImageName": "crystal_maiden",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 5,
    "name": "Drow Ranger",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Disabler",
      "Pusher"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png",
    "heroId": 6,
    "heroImageName": "drow_ranger",
    "lanes": [
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Elf"
    ],
    "legs": 2
  },
  {
    "id": 6,
    "name": "Earthshaker",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Initiator",
      "Disabler",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png",
    "heroId": 7,
    "heroImageName": "earthshaker",
    "lanes": [
      "Support (4)",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Elemental"
    ],
    "legs": 2
  },
  {
    "id": 7,
    "name": "Juggernaut",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
    "heroId": 8,
    "heroImageName": "juggernaut",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Masked One"
    ],
    "legs": 2
  },
  {
    "id": 8,
    "name": "Mirana",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Escape",
      "Nuker",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png",
    "heroId": 9,
    "heroImageName": "mirana",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 9,
    "name": "Morphling",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Durable",
      "Nuker",
      "Disabler"
    ],
    "complexity": 3,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png",
    "heroId": 10,
    "heroImageName": "morphling",
    "lanes": [
      "Carry",
      "Mid"
    ],
    "gender": "Other",
    "race": [
      "Elemental"
    ],
    "legs": 0
  },
  {
    "id": 10,
    "name": "Shadow Fiend",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png",
    "heroId": 11,
    "heroImageName": "nevermore",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Demon"
    ],
    "legs": 0
  },
  {
    "id": 11,
    "name": "Phantom Lancer",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Pusher",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png",
    "heroId": 12,
    "heroImageName": "phantom_lancer",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Catman"
    ],
    "legs": 2
  },
  {
    "id": 12,
    "name": "Puck",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Initiator",
      "Disabler",
      "Escape",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
    "heroId": 13,
    "heroImageName": "puck",
    "lanes": [
      "Mid"
    ],
    "gender": "Other",
    "race": [
      "Fae",
      "Dragon"
    ],
    "legs": 2
  },
  {
    "id": 13,
    "name": "Pudge",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
    "heroId": 14,
    "heroImageName": "pudge",
    "lanes": [
      "Support (4)",
      "Support (5)",
      "Offlane",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 14,
    "name": "Razor",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Durable",
      "Nuker",
      "Pusher"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png",
    "heroId": 15,
    "heroImageName": "razor",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Elemental",
      "Revenant"
    ],
    "legs": 0
  },
  {
    "id": 15,
    "name": "Sand King",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Support",
      "Nuker",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png",
    "heroId": 16,
    "heroImageName": "sand_king",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Elemental",
      "Spirit"
    ],
    "legs": 6
  },
  {
    "id": 16,
    "name": "Storm Spirit",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Initiator",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png",
    "heroId": 17,
    "heroImageName": "storm_spirit",
    "lanes": [
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 17,
    "name": "Sven",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
    "heroId": 18,
    "heroImageName": "sven",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Slithereen"
    ],
    "legs": 2
  },
  {
    "id": 18,
    "name": "Tiny",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Nuker",
      "Pusher",
      "Initiator",
      "Durable",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
    "heroId": 19,
    "heroImageName": "tiny",
    "lanes": [
      "Mid",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Giant",
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 19,
    "name": "Vengeful Spirit",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Initiator",
      "Disabler",
      "Nuker",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png",
    "heroId": 20,
    "heroImageName": "vengefulspirit",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Female",
    "race": [
      "Skywrath",
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 20,
    "name": "Windranger",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Disabler",
      "Escape",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2008,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png",
    "heroId": 21,
    "heroImageName": "windrunner",
    "lanes": [
      "Support (4)",
      "Mid",
      "Offlane",
      "Support (5)"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 21,
    "name": "Zeus",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Nuker",
      "Carry"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png",
    "heroId": 22,
    "heroImageName": "zuus",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "God"
    ],
    "legs": 2
  },
  {
    "id": 22,
    "name": "Kunkka",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2008,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png",
    "heroId": 23,
    "heroImageName": "kunkka",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 23,
    "name": "Lina",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png",
    "heroId": 25,
    "heroImageName": "lina",
    "lanes": [
      "Mid"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 24,
    "name": "Lion",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png",
    "heroId": 26,
    "heroImageName": "lion",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Elf",
      "Demon"
    ],
    "legs": 2
  },
  {
    "id": 25,
    "name": "Shadow Shaman",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Pusher",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png",
    "heroId": 27,
    "heroImageName": "shadow_shaman",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Troll"
    ],
    "legs": 2
  },
  {
    "id": 26,
    "name": "Slardar",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Initiator",
      "Disabler",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png",
    "heroId": 28,
    "heroImageName": "slardar",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Slithereen"
    ],
    "legs": 0
  },
  {
    "id": 27,
    "name": "Tidehunter",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Durable",
      "Disabler",
      "Nuker",
      "Carry"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png",
    "heroId": 29,
    "heroImageName": "tidehunter",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Levianth"
    ],
    "legs": 2
  },
  {
    "id": 28,
    "name": "Witch Doctor",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png",
    "heroId": 30,
    "heroImageName": "witch_doctor",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Troll"
    ],
    "legs": 2
  },
  {
    "id": 29,
    "name": "Lich",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png",
    "heroId": 31,
    "heroImageName": "lich",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Elf",
      "Undead"
    ],
    "legs": 2
  },
  {
    "id": 30,
    "name": "Riki",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png",
    "heroId": 32,
    "heroImageName": "riki",
    "lanes": [
      "Carry",
      "Mid",
      "Offlane",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Satyr"
    ],
    "legs": 2
  },
  {
    "id": 31,
    "name": "Enigma",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Disabler",
      "Initiator",
      "Pusher"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png",
    "heroId": 33,
    "heroImageName": "enigma",
    "lanes": [
      "Offlane"
    ],
    "gender": "Other",
    "race": [
      "Fundamental"
    ],
    "legs": 0
  },
  {
    "id": 32,
    "name": "Tinker",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Pusher"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png",
    "heroId": 34,
    "heroImageName": "tinker",
    "lanes": [
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Keen"
    ],
    "legs": 2
  },
  {
    "id": 33,
    "name": "Sniper",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png",
    "heroId": 35,
    "heroImageName": "sniper",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Keen"
    ],
    "legs": 2
  },
  {
    "id": 34,
    "name": "Necrophos",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Durable",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png",
    "heroId": 36,
    "heroImageName": "necrolyte",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Elf"
    ],
    "legs": 2
  },
  {
    "id": 35,
    "name": "Warlock",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Initiator",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png",
    "heroId": 37,
    "heroImageName": "warlock",
    "lanes": [
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Oglodi"
    ],
    "legs": 2
  },
  {
    "id": 36,
    "name": "Beastmaster",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Durable",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png",
    "heroId": 38,
    "heroImageName": "beastmaster",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 37,
    "name": "Queen of Pain",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png",
    "heroId": 39,
    "heroImageName": "queenofpain",
    "lanes": [
      "Mid",
      "Offlane"
    ],
    "gender": "Female",
    "race": [
      "Demon"
    ],
    "legs": 2
  },
  {
    "id": 38,
    "name": "Venomancer",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Initiator",
      "Pusher",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png",
    "heroId": 40,
    "heroImageName": "venomancer",
    "lanes": [
      "Offlane",
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Snake"
    ],
    "legs": 0
  },
  {
    "id": 39,
    "name": "Faceless Void",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Disabler",
      "Escape",
      "Durable"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
    "heroId": 41,
    "heroImageName": "faceless_void",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Outer Being"
    ],
    "legs": 2
  },
  {
    "id": 40,
    "name": "Wraith King",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Durable",
      "Disabler",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png",
    "heroId": 42,
    "heroImageName": "skeleton_king",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Undead"
    ],
    "legs": 2
  },
  {
    "id": 41,
    "name": "Death Prophet",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png",
    "heroId": 43,
    "heroImageName": "death_prophet",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Female",
    "race": [
      "Elf",
      "Undead"
    ],
    "legs": 2
  },
  {
    "id": 42,
    "name": "Phantom Assassin",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
    "heroId": 44,
    "heroImageName": "phantom_assassin",
    "lanes": [
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 43,
    "name": "Pugna",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Nuker",
      "Pusher"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png",
    "heroId": 45,
    "heroImageName": "pugna",
    "lanes": [
      "Support (4)",
      "Support (5)",
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Nether Being"
    ],
    "legs": 2
  },
  {
    "id": 44,
    "name": "Templar Assassin",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png",
    "heroId": 46,
    "heroImageName": "templar_assassin",
    "lanes": [
      "Carry",
      "Mid"
    ],
    "gender": "Female",
    "race": [
      "Elf"
    ],
    "legs": 2
  },
  {
    "id": 45,
    "name": "Viper",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Durable",
      "Initiator",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png",
    "heroId": 47,
    "heroImageName": "viper",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Nether Being",
      "Dragon"
    ],
    "legs": 0
  },
  {
    "id": 46,
    "name": "Luna",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Pusher"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png",
    "heroId": 48,
    "heroImageName": "luna",
    "lanes": [
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Human",
      "Beast",
      "Cat"
    ],
    "legs": 2
  },
  {
    "id": 47,
    "name": "Dragon Knight",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Durable",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png",
    "heroId": 49,
    "heroImageName": "dragon_knight",
    "lanes": [
      "Offlane",
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Dragon"
    ],
    "legs": 2
  },
  {
    "id": 48,
    "name": "Dazzle",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png",
    "heroId": 50,
    "heroImageName": "dazzle",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Troll"
    ],
    "legs": 2
  },
  {
    "id": 49,
    "name": "Clockwerk",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Durable",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2008,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png",
    "heroId": 51,
    "heroImageName": "rattletrap",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Keen"
    ],
    "legs": 2
  },
  {
    "id": 50,
    "name": "Leshrac",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Nuker",
      "Pusher",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png",
    "heroId": 52,
    "heroImageName": "leshrac",
    "lanes": [
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Elemental"
    ],
    "legs": 4
  },
  {
    "id": 51,
    "name": "Nature's Prophet",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Escape",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png",
    "heroId": 53,
    "heroImageName": "furion",
    "lanes": [
      "Offlane",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Treant"
    ],
    "legs": 2
  },
  {
    "id": 52,
    "name": "Lifestealer",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Escape",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png",
    "heroId": 54,
    "heroImageName": "life_stealer",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Oglodi"
    ],
    "legs": 2
  },
  {
    "id": 53,
    "name": "Dark Seer",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Escape",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png",
    "heroId": 55,
    "heroImageName": "dark_seer",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Outer Being"
    ],
    "legs": 2
  },
  {
    "id": 54,
    "name": "Clinkz",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Pusher"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
    "heroId": 56,
    "heroImageName": "clinkz",
    "lanes": [
      "Carry",
      "Mid",
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Undead"
    ],
    "legs": 2
  },
  {
    "id": 55,
    "name": "Omniknight",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Durable",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png",
    "heroId": 57,
    "heroImageName": "omniknight",
    "lanes": [
      "Mid",
      "Offlane",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 56,
    "name": "Enchantress",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Pusher",
      "Durable",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png",
    "heroId": 58,
    "heroImageName": "enchantress",
    "lanes": [
      "Support (5)",
      "Support (4)",
      "Offlane"
    ],
    "gender": "Female",
    "race": [
      "Centaur"
    ],
    "legs": 4
  },
  {
    "id": 57,
    "name": "Huskar",
    "primaryAttribute": "Strength",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Durable",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png",
    "heroId": 59,
    "heroImageName": "huskar",
    "lanes": [
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Troll"
    ],
    "legs": 2
  },
  {
    "id": 58,
    "name": "Night Stalker",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Durable",
      "Disabler",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png",
    "heroId": 60,
    "heroImageName": "night_stalker",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Creature of Darkness"
    ],
    "legs": 2
  },
  {
    "id": 59,
    "name": "Broodmother",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Escape",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png",
    "heroId": 61,
    "heroImageName": "broodmother",
    "lanes": [
      "Offlane"
    ],
    "gender": "Female",
    "race": [
      "Beast",
      "Spider"
    ],
    "legs": 8
  },
  {
    "id": 60,
    "name": "Bounty Hunter",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Escape",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png",
    "heroId": 62,
    "heroImageName": "bounty_hunter",
    "lanes": [
      "Support (4)",
      "Support (5)",
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Catman"
    ],
    "legs": 2
  },
  {
    "id": 61,
    "name": "Weaver",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png",
    "heroId": 63,
    "heroImageName": "weaver",
    "lanes": [
      "Carry",
      "Support (4)",
      "Support (5)",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Outer Being"
    ],
    "legs": 4
  },
  {
    "id": 62,
    "name": "Jakiro",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Pusher",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png",
    "heroId": 64,
    "heroImageName": "jakiro",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Dragon"
    ],
    "legs": 2
  },
  {
    "id": 63,
    "name": "Batrider",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Initiator",
      "Disabler",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2009,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png",
    "heroId": 65,
    "heroImageName": "batrider",
    "lanes": [
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Goblin",
      "Beast",
      "Morde-Bat"
    ],
    "legs": 2
  },
  {
    "id": 64,
    "name": "Chen",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Pusher"
    ],
    "complexity": 3,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png",
    "heroId": 66,
    "heroImageName": "chen",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Beast"
    ],
    "legs": 2
  },
  {
    "id": 65,
    "name": "Spectre",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png",
    "heroId": 67,
    "heroImageName": "spectre",
    "lanes": [
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Spirit"
    ],
    "legs": 0
  },
  {
    "id": 66,
    "name": "Ancient Apparition",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2009,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png",
    "heroId": 68,
    "heroImageName": "ancient_apparition",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Elemental"
    ],
    "legs": 0
  },
  {
    "id": 67,
    "name": "Doom",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
    "heroId": 69,
    "heroImageName": "doom_bringer",
    "lanes": [
      "Offlane",
      "Support (4)",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Demon"
    ],
    "legs": 2
  },
  {
    "id": 68,
    "name": "Ursa",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png",
    "heroId": 70,
    "heroImageName": "ursa",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Ursine"
    ],
    "legs": 2
  },
  {
    "id": 69,
    "name": "Spirit Breaker",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Disabler",
      "Durable",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
    "heroId": 71,
    "heroImageName": "spirit_breaker",
    "lanes": [
      "Support (4)",
      "Offlane",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Elemental"
    ],
    "legs": 2
  },
  {
    "id": 70,
    "name": "Gyrocopter",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2010,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png",
    "heroId": 72,
    "heroImageName": "gyrocopter",
    "lanes": [
      "Support (5)",
      "Support (4)",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Keen"
    ],
    "legs": 2
  },
  {
    "id": 71,
    "name": "Alchemist",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Durable",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
    "heroId": 73,
    "heroImageName": "alchemist",
    "lanes": [
      "Carry",
      "Offlane",
      "Mid",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Keen",
      "Ogre"
    ],
    "legs": 2
  },
  {
    "id": 72,
    "name": "Invoker",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler",
      "Escape",
      "Pusher"
    ],
    "complexity": 3,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
    "heroId": 74,
    "heroImageName": "invoker",
    "lanes": [
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Elf"
    ],
    "legs": 2
  },
  {
    "id": 73,
    "name": "Silencer",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Support",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png",
    "heroId": 75,
    "heroImageName": "silencer",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 74,
    "name": "Outworld Destroyer",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2006,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png",
    "heroId": 76,
    "heroImageName": "obsidian_destroyer",
    "lanes": [
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Outer Being"
    ],
    "legs": 4
  },
  {
    "id": 75,
    "name": "Lycan",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Durable",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png",
    "heroId": 77,
    "heroImageName": "lycan",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Beast",
      "Wolf"
    ],
    "legs": 2
  },
  {
    "id": 76,
    "name": "Brewmaster",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Durable",
      "Disabler",
      "Nuker"
    ],
    "complexity": 3,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png",
    "heroId": 78,
    "heroImageName": "brewmaster",
    "lanes": [
      "Offlane",
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Spirit",
      "Beast",
      "Ursine"
    ],
    "legs": 2
  },
  {
    "id": 77,
    "name": "Shadow Demon",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Initiator",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2010,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png",
    "heroId": 79,
    "heroImageName": "shadow_demon",
    "lanes": [
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Demon"
    ],
    "legs": 2
  },
  {
    "id": 78,
    "name": "Lone Druid",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Durable"
    ],
    "complexity": 3,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png",
    "heroId": 80,
    "heroImageName": "lone_druid",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Elf",
      "Beast",
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 79,
    "name": "Chaos Knight",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Durable",
      "Pusher",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png",
    "heroId": 81,
    "heroImageName": "chaos_knight",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Fundamental"
    ],
    "legs": 2
  },
  {
    "id": 80,
    "name": "Meepo",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler",
      "Initiator",
      "Pusher"
    ],
    "complexity": 3,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png",
    "heroId": 82,
    "heroImageName": "meepo",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Meepo"
    ],
    "legs": 2
  },
  {
    "id": 81,
    "name": "Treant Protector",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Initiator",
      "Durable",
      "Disabler",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png",
    "heroId": 83,
    "heroImageName": "treant",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Treant"
    ],
    "legs": 2
  },
  {
    "id": 82,
    "name": "Ogre Magi",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Durable",
      "Initiator"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png",
    "heroId": 84,
    "heroImageName": "ogre_magi",
    "lanes": [
      "Support (5)",
      "Offlane",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Ogre"
    ],
    "legs": 2
  },
  {
    "id": 83,
    "name": "Undying",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Durable",
      "Disabler",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png",
    "heroId": 85,
    "heroImageName": "undying",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Undead"
    ],
    "legs": 2
  },
  {
    "id": 84,
    "name": "Rubick",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "complexity": 3,
    "releaseYear": 2011,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
    "heroId": 86,
    "heroImageName": "rubick",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Unknown"
    ],
    "legs": 2
  },
  {
    "id": 85,
    "name": "Disruptor",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker",
      "Initiator"
    ],
    "complexity": 2,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png",
    "heroId": 87,
    "heroImageName": "disruptor",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Oglodi",
      "Beast",
      "Stryder"
    ],
    "legs": 2
  },
  {
    "id": 86,
    "name": "Nyx Assassin",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Disabler",
      "Nuker",
      "Initiator",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png",
    "heroId": 88,
    "heroImageName": "nyx_assassin",
    "lanes": [
      "Support (4)",
      "Offlane",
      "Support (5)",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Scarab"
    ],
    "legs": 6
  },
  {
    "id": 87,
    "name": "Naga Siren",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Support",
      "Pusher",
      "Disabler",
      "Initiator",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png",
    "heroId": 89,
    "heroImageName": "naga_siren",
    "lanes": [
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Slithereen"
    ],
    "legs": 0
  },
  {
    "id": 88,
    "name": "Keeper of the Light",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png",
    "heroId": 90,
    "heroImageName": "keeper_of_the_light",
    "lanes": [
      "Support (4)",
      "Mid",
      "Support (5)",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Fundamental"
    ],
    "legs": 2
  },
  {
    "id": 89,
    "name": "Io",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Escape",
      "Nuker"
    ],
    "complexity": 3,
    "releaseYear": 2010,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png",
    "heroId": 91,
    "heroImageName": "wisp",
    "lanes": [
      "Support (5)",
      "Support (4)",
      "Mid"
    ],
    "gender": "Other",
    "race": [
      "Fundamental"
    ],
    "legs": 0
  },
  {
    "id": 90,
    "name": "Visage",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Durable",
      "Disabler",
      "Pusher"
    ],
    "complexity": 3,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png",
    "heroId": 92,
    "heroImageName": "visage",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Elemental"
    ],
    "legs": 2
  },
  {
    "id": 91,
    "name": "Slark",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2009,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
    "heroId": 93,
    "heroImageName": "slark",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Slithereen"
    ],
    "legs": 2
  },
  {
    "id": 92,
    "name": "Medusa",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Disabler",
      "Durable"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png",
    "heroId": 94,
    "heroImageName": "medusa",
    "lanes": [
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Gorgon"
    ],
    "legs": 0
  },
  {
    "id": 93,
    "name": "Troll Warlord",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Pusher",
      "Disabler",
      "Durable"
    ],
    "complexity": 2,
    "releaseYear": 2013,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png",
    "heroId": 95,
    "heroImageName": "troll_warlord",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Troll"
    ],
    "legs": 2
  },
  {
    "id": 94,
    "name": "Centaur Warrunner",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Durable",
      "Initiator",
      "Disabler",
      "Nuker",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png",
    "heroId": 96,
    "heroImageName": "centaur",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Centaur"
    ],
    "legs": 4
  },
  {
    "id": 95,
    "name": "Magnus",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Nuker",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png",
    "heroId": 97,
    "heroImageName": "magnataur",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Magnocerous"
    ],
    "legs": 4
  },
  {
    "id": 96,
    "name": "Timbersaw",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Nuker",
      "Durable",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2011,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png",
    "heroId": 98,
    "heroImageName": "shredder",
    "lanes": [
      "Offlane",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Keen"
    ],
    "legs": 2
  },
  {
    "id": 97,
    "name": "Bristleback",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable",
      "Initiator",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png",
    "heroId": 99,
    "heroImageName": "bristleback",
    "lanes": [
      "Offlane",
      "Carry",
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Quilboar"
    ],
    "legs": 2
  },
  {
    "id": 98,
    "name": "Tusk",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2010,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png",
    "heroId": 100,
    "heroImageName": "tusk",
    "lanes": [
      "Support (4)",
      "Support (5)",
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Tusk"
    ],
    "legs": 2
  },
  {
    "id": 99,
    "name": "Skywrath Mage",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2011,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png",
    "heroId": 101,
    "heroImageName": "skywrath_mage",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Skywrath"
    ],
    "legs": 2
  },
  {
    "id": 100,
    "name": "Abaddon",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Carry",
      "Durable"
    ],
    "complexity": 1,
    "releaseYear": 2005,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png",
    "heroId": 102,
    "heroImageName": "abaddon",
    "lanes": [
      "Support (5)",
      "Carry",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 101,
    "name": "Elder Titan",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Disabler",
      "Nuker",
      "Durable"
    ],
    "complexity": 2,
    "releaseYear": 2009,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png",
    "heroId": 103,
    "heroImageName": "elder_titan",
    "lanes": [
      "Support (5)",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Titan"
    ],
    "legs": 2
  },
  {
    "id": 102,
    "name": "Legion Commander",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Disabler",
      "Initiator",
      "Durable",
      "Nuker"
    ],
    "complexity": 1,
    "releaseYear": 2011,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png",
    "heroId": 104,
    "heroImageName": "legion_commander",
    "lanes": [
      "Offlane",
      "Mid",
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 103,
    "name": "Techies",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Nuker",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png",
    "heroId": 105,
    "heroImageName": "techies",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Goblin"
    ],
    "legs": 6
  },
  {
    "id": 104,
    "name": "Ember Spirit",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler",
      "Initiator"
    ],
    "complexity": 2,
    "releaseYear": 2011,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png",
    "heroId": 106,
    "heroImageName": "ember_spirit",
    "lanes": [
      "Mid"
    ],
    "gender": "Male",
    "race": [
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 105,
    "name": "Earth Spirit",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Nuker",
      "Escape",
      "Disabler",
      "Initiator",
      "Durable"
    ],
    "complexity": 3,
    "releaseYear": 2013,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png",
    "heroId": 107,
    "heroImageName": "earth_spirit",
    "lanes": [
      "Support (4)",
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 106,
    "name": "Underlord",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Durable",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2007,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png",
    "heroId": 108,
    "heroImageName": "abyssal_underlord",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Demon"
    ],
    "legs": 2
  },
  {
    "id": 107,
    "name": "Terrorblade",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Pusher",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2004,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png",
    "heroId": 109,
    "heroImageName": "terrorblade",
    "lanes": [
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Demon"
    ],
    "legs": 2
  },
  {
    "id": 108,
    "name": "Phoenix",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Initiator",
      "Escape",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2010,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png",
    "heroId": 110,
    "heroImageName": "phoenix",
    "lanes": [
      "Support (4)",
      "Support (5)",
      "Offlane"
    ],
    "gender": "Other",
    "race": [
      "Elemental",
      "Star"
    ],
    "legs": 2
  },
  {
    "id": 109,
    "name": "Oracle",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "complexity": 3,
    "releaseYear": 2012,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png",
    "heroId": 111,
    "heroImageName": "oracle",
    "lanes": [
      "Support (5)",
      "Support (4)"
    ],
    "gender": "Male",
    "race": [
      "Oracle"
    ],
    "legs": 0
  },
  {
    "id": 110,
    "name": "Winter Wyvern",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Disabler",
      "Nuker"
    ],
    "complexity": 2,
    "releaseYear": 2012,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png",
    "heroId": 112,
    "heroImageName": "winter_wyvern",
    "lanes": [
      "Support (5)",
      "Offlane"
    ],
    "gender": "Female",
    "race": [
      "Dragon"
    ],
    "legs": 2
  },
  {
    "id": 111,
    "name": "Arc Warden",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Escape",
      "Nuker"
    ],
    "complexity": 3,
    "releaseYear": 2012,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png",
    "heroId": 113,
    "heroImageName": "arc_warden",
    "lanes": [
      "Mid",
      "Carry"
    ],
    "gender": "Other",
    "race": [
      "Ancient"
    ],
    "legs": 2
  },
  {
    "id": 112,
    "name": "Monkey King",
    "primaryAttribute": "Agility",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Disabler",
      "Initiator"
    ],
    "complexity": 2,
    "releaseYear": 2016,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png",
    "heroId": 114,
    "heroImageName": "monkey_king",
    "lanes": [
      "Carry",
      "Mid",
      "Support (4)",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "God",
      "Beast",
      "Monkey"
    ],
    "legs": 2
  },
  {
    "id": 113,
    "name": "Dark Willow",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2017,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png",
    "heroId": 119,
    "heroImageName": "dark_willow",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Female",
    "race": [
      "Fae"
    ],
    "legs": 2
  },
  {
    "id": 114,
    "name": "Pangolier",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler",
      "Durable",
      "Escape",
      "Initiator"
    ],
    "complexity": 2,
    "releaseYear": 2017,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png",
    "heroId": 120,
    "heroImageName": "pangolier",
    "lanes": [
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Beast",
      "Pangolin"
    ],
    "legs": 2
  },
  {
    "id": 115,
    "name": "Grimstroke",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2018,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png",
    "heroId": 121,
    "heroImageName": "grimstroke",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Male",
    "race": [
      "Human",
      "Spirit"
    ],
    "legs": 0
  },
  {
    "id": 116,
    "name": "Hoodwink",
    "primaryAttribute": "Agility",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Escape",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2020,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png",
    "heroId": 123,
    "heroImageName": "hoodwink",
    "lanes": [
      "Support (4)",
      "Support (5)"
    ],
    "gender": "Female",
    "race": [
      "Beast",
      "Fae"
    ],
    "legs": 4
  },
  {
    "id": 117,
    "name": "Void Spirit",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker",
      "Disabler"
    ],
    "complexity": 2,
    "releaseYear": 2019,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png",
    "heroId": 126,
    "heroImageName": "void_spirit",
    "lanes": [
      "Mid",
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "Spirit"
    ],
    "legs": 2
  },
  {
    "id": 118,
    "name": "Snapfire",
    "primaryAttribute": "Universal",
    "attackType": "Ranged",
    "roles": [
      "Support",
      "Nuker",
      "Disabler",
      "Escape"
    ],
    "complexity": 1,
    "releaseYear": 2019,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png",
    "heroId": 128,
    "heroImageName": "snapfire",
    "lanes": [
      "Support (4)",
      "Offlane",
      "Support (5)",
      "Mid"
    ],
    "gender": "Female",
    "race": [
      "Keen",
      "Dragon"
    ],
    "legs": 2
  },
  {
    "id": 119,
    "name": "Mars",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Initiator",
      "Disabler",
      "Durable"
    ],
    "complexity": 1,
    "releaseYear": 2019,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png",
    "heroId": 129,
    "heroImageName": "mars",
    "lanes": [
      "Offlane"
    ],
    "gender": "Male",
    "race": [
      "God"
    ],
    "legs": 2
  },
  {
    "id": 120,
    "name": "Dawnbreaker",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Carry",
      "Durable"
    ],
    "complexity": 1,
    "releaseYear": 2021,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
    "heroId": 135,
    "heroImageName": "dawnbreaker",
    "lanes": [
      "Offlane",
      "Support (5)",
      "Support (4)",
      "Mid"
    ],
    "gender": "Female",
    "race": [
      "Star",
      "Construct"
    ],
    "legs": 2
  },
  {
    "id": 121,
    "name": "Marci",
    "primaryAttribute": "Universal",
    "attackType": "Melee",
    "roles": [
      "Support",
      "Carry",
      "Initiator",
      "Disabler",
      "Escape"
    ],
    "complexity": 2,
    "releaseYear": 2021,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png",
    "heroId": 136,
    "heroImageName": "marci",
    "lanes": [
      "Offlane",
      "Support (4)",
      "Support (5)",
      "Carry"
    ],
    "gender": "Female",
    "race": [
      "Human"
    ],
    "legs": 2
  },
  {
    "id": 122,
    "name": "Primal Beast",
    "primaryAttribute": "Strength",
    "attackType": "Melee",
    "roles": [
      "Initiator",
      "Durable",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2022,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png",
    "heroId": 137,
    "heroImageName": "primal_beast",
    "lanes": [
      "Offlane",
      "Support (4)",
      "Support (5)",
      "Carry"
    ],
    "gender": "Male",
    "race": [
      "Dragon",
      "Outer Being"
    ],
    "legs": 2
  },
  {
    "id": 123,
    "name": "Muerta",
    "primaryAttribute": "Intelligence",
    "attackType": "Ranged",
    "roles": [
      "Carry",
      "Nuker",
      "Disabler"
    ],
    "complexity": 1,
    "releaseYear": 2023,
    "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png",
    "heroId": 138,
    "heroImageName": "muerta",
    "lanes": [
      "Carry",
      "Mid",
      "Offlane"
    ],
    "gender": "Female",
    "race": [
      "Human",
      "Undead"
    ],
    "legs": 2
  }
];

export function getRandomHero(): Hero {
  const randomIndex = Math.floor(Math.random() * heroes.length);
  return heroes[randomIndex];
}