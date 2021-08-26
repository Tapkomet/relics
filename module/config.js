import {ClassFeatures} from "./classFeatures.js"

// Namespace Configuration Values
export const RELICS = {};

// ASCII Artwork
RELICS.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
RELICS.abilities = {
  "str": "RELICS.AbilityStr",
  "dex": "RELICS.AbilityDex",
  "con": "RELICS.AbilityCon",
  "int": "RELICS.AbilityInt",
  "wis": "RELICS.AbilityWis",
  "cha": "RELICS.AbilityCha"
};

RELICS.abilityAbbreviations = {
  "str": "RELICS.AbilityStrAbbr",
  "dex": "RELICS.AbilityDexAbbr",
  "con": "RELICS.AbilityConAbbr",
  "int": "RELICS.AbilityIntAbbr",
  "wis": "RELICS.AbilityWisAbbr",
  "cha": "RELICS.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
RELICS.alignments = {
  'lg': "RELICS.AlignmentLG",
  'ng': "RELICS.AlignmentNG",
  'cg': "RELICS.AlignmentCG",
  'ln': "RELICS.AlignmentLN",
  'tn': "RELICS.AlignmentTN",
  'cn': "RELICS.AlignmentCN",
  'le': "RELICS.AlignmentLE",
  'ne': "RELICS.AlignmentNE",
  'ce': "RELICS.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types
 * @enum {number}
 */
RELICS.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
};

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
RELICS.attunements = {
  0: "RELICS.AttunementNone",
  1: "RELICS.AttunementRequired",
  2: "RELICS.AttunementAttuned"
};

/* -------------------------------------------- */


RELICS.weaponProficiencies = {
  "sim": "RELICS.WeaponSimpleProficiency",
  "mar": "RELICS.WeaponMartialProficiency",
  "ass": "RELICS.WeaponAssaultProficiency",
  "pis": "RELICS.WeaponPistolProficiency",
  "sho": "RELICS.WeaponShotgunProficiency",
  "smg": "RELICS.WeaponSMGProficiency",
  "lmg": "RELICS.WeaponLMGProficiency",
  "sni": "RELICS.WeaponSniperProficiency",
  "gre": "RELICS.WeaponGrenadeProficiency",
  "gla": "RELICS.WeaponGrenadeLauncherProficiency",
  "rla": "RELICS.WeaponRocketLauncherProficiency",
  "fla": "RELICS.WeaponFlamethrowerProficiency",
  "shi": "RELICS.WeaponShieldProficiency",
  "lca": "RELICS.WeaponCannonProficiency"
};

/**
 * A map of weapon item proficiency to actor item proficiency
 * Used when a new player owned item is created
 * @type {Object}
 */
RELICS.weaponProficienciesMap = {
  "natural": true,
  "improvised": true,
  "simpleM": "sim",
  "martialM": "mar",
  "assault": "ass",
  "pistol": "pis",
  "shotgun": "sho",
  "smg": "smg",
  "lmg": "lmg",
  "sniper": "sni",
  "grenade": "gre",
  "grenadeL": "gla",
  "rocketL": "rla",
  "flamethrower": "fla",
  "shield": "shi",
  "lightC": "lca",
}

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 *
 * @enum {string}
 */
RELICS.weaponIds = {
    "battleaxe": "I0WocDSuNpGJayPb",
    "blowgun": "wNWK6yJMHG9ANqQV",
    "club": "nfIRTECQIG81CvM4",
    "dagger": "0E565kQUBmndJ1a2",
    "dart": "3rCO8MTIdPGSW6IJ",
    "flail": "UrH3sMdnUDckIHJ6",
    "glaive": "rOG1OM2ihgPjOvFW",
    "greataxe": "1Lxk6kmoRhG8qQ0u",
    "greatclub": "QRCsxkCwWNwswL9o",
    "greatsword": "xMkP8BmFzElcsMaR",
    "halberd": "DMejWAc8r8YvDPP1",
    "handaxe": "eO7Fbv5WBk5zvGOc",
    "handcrossbow": "qaSro7kFhxD6INbZ",
    "heavycrossbow": "RmP0mYRn2J7K26rX",
    "javelin": "DWLMnODrnHn8IbAG",
    "lance": "RnuxdHUAIgxccVwj",
    "lightcrossbow": "ddWvQRLmnnIS0eLF",
    "lighthammer": "XVK6TOL4sGItssAE",
    "longbow": "3cymOVja8jXbzrdT",
    "longsword": "10ZP2Bu3vnCuYMIB",
    "mace": "Ajyq6nGwF7FtLhDQ",
    "maul": "DizirD7eqjh8n95A",
    "morningstar": "dX8AxCh9o0A9CkT3",
    "net": "aEiM49V8vWpWw7rU",
    "pike": "tC0kcqZT9HHAO0PD",
    "quarterstaff": "g2dWN7PQiMRYWzyk",
    "rapier": "Tobce1hexTnDk4sV",
    "scimitar": "fbC0Mg1a73wdFbqO",
    "shortsword": "osLzOwQdPtrK3rQH",
    "sickle": "i4NeNZ30ycwPDHMx",
    "spear": "OG4nBBydvmfWYXIk",
    "shortbow": "GJv6WkD7D2J6rP6M",
    "sling": "3gynWO9sN4OLGMWD",
    "trident": "F65ANO66ckP8FDMa",
    "warpick": "2YdfjN1PIIrSHZii",
    "warhammer":  "F0Df164Xv1gWcYt0",
    "whip": "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */



RELICS.toolProficiencies = {
  "art": "RELICS.ToolArtisans",
  "disg": "RELICS.ToolDisguiseKit",
  "forg": "RELICS.ToolForgeryKit",
  "game": "RELICS.ToolGamingSet",
  "herb": "RELICS.ToolHerbalismKit",
  "music": "RELICS.ToolMusicalInstrument",
  "navg": "RELICS.ToolNavigators",
  "pois": "RELICS.ToolPoisonersKit",
  "thief": "RELICS.ToolThieves",
  "vehicle": "RELICS.ToolVehicle"
};

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 *
 * @enum {string}
 */
RELICS.toolIds = {
  "alchemist": "SztwZhbhZeCqyAes",
  "bagpipes": "yxHi57T5mmVt0oDr",
  "brewer": "Y9S75go1hLMXUD48",
  "calligrapher": "jhjo20QoiD5exf09",
  "card": "YwlHI3BVJapz4a3E",
  "carpenter": "8NS6MSOdXtUqD7Ib",
  "cartographer": "fC0lFK8P4RuhpfaU",
  "cobbler": "hM84pZnpCqKfi8XH",
  "cook": "Gflnp29aEv5Lc1ZM",
  "dice": "iBuTM09KD9IoM5L8",
  "disg": "IBhDAr7WkhWPYLVn",
  "drum": "69Dpr25pf4BjkHKb",
  "dulcimer": "NtdDkjmpdIMiX7I2",
  "flute": "eJOrPcAz9EcquyRQ",
  "forg": "cG3m4YlHfbQlLEOx",
  "glassblower": "rTbVrNcwApnuTz5E",
  "herb": "i89okN7GFTWHsvPy",
  "horn": "aa9KuBy4dst7WIW9",
  "jeweler": "YfBwELTgPFHmQdHh",
  "leatherworker": "PUMfwyVUbtyxgYbD",
  "lute": "qBydtUUIkv520DT7",
  "lyre": "EwG1EtmbgR3bM68U",
  "mason": "skUih6tBvcBbORzA",
  "navg": "YHCmjsiXxZ9UdUhU",
  "painter": "ccm5xlWhx74d6lsK",
  "panflute": "G5m5gYIx9VAUWC3J",
  "pois": "il2GNi8C0DvGLL9P",
  "potter": "hJS8yEVkqgJjwfWa",
  "shawm": "G3cqbejJpfB91VhP",
  "smith": "KndVe2insuctjIaj",
  "thief": "woWZ1sO5IUVGzo58",
  "tinker": "0d08g1i5WXnNrCNA",
  "viol": "baoe3U5BfMMMxhCU",
  "weaver": "ap9prThUB2y9lDyj",
  "woodcarver": "xKErqkLo4ASYr5EP",
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
RELICS.timePeriods = {
  "inst": "RELICS.TimeInst",
  "turn": "RELICS.TimeTurn",
  "round": "RELICS.TimeRound",
  "minute": "RELICS.TimeMinute",
  "hour": "RELICS.TimeHour",
  "day": "RELICS.TimeDay",
  "month": "RELICS.TimeMonth",
  "year": "RELICS.TimeYear",
  "perm": "RELICS.TimePerm",
  "spec": "RELICS.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
RELICS.abilityActivationTypes = {
  "none": "RELICS.None",
  "action": "RELICS.Action",
  "bonus": "RELICS.BonusAction",
  "reaction": "RELICS.Reaction",
  "minute": RELICS.timePeriods.minute,
  "hour": RELICS.timePeriods.hour,
  "day": RELICS.timePeriods.day,
  "special": RELICS.timePeriods.spec,
  "legendary": "RELICS.LegendaryActionLabel",
  "lair": "RELICS.LairActionLabel",
  "crew": "RELICS.VehicleCrewAction"
};

/* -------------------------------------------- */


RELICS.abilityConsumptionTypes = {
  "ammo": "RELICS.ConsumeAmmunition",
  "attribute": "RELICS.ConsumeAttribute",
  "material": "RELICS.ConsumeMaterial",
  "charges": "RELICS.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
RELICS.actorSizes = {
  "tiny": "RELICS.SizeTiny",
  "sm": "RELICS.SizeSmall",
  "med": "RELICS.SizeMedium",
  "lg": "RELICS.SizeLarge",
  "huge": "RELICS.SizeHuge",
  "grg": "RELICS.SizeGargantuan"
};

RELICS.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars
 * @enum {number}
 */
RELICS.tokenHPColors = {
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
}

/* -------------------------------------------- */

/**
 * Creature types
 * @type {Object}
 */
RELICS.creatureTypes = {
  "aberration": "RELICS.CreatureAberration",
  "beast": "RELICS.CreatureBeast",
  "celestial": "RELICS.CreatureCelestial",
  "construct": "RELICS.CreatureConstruct",
  "dragon": "RELICS.CreatureDragon",
  "elemental": "RELICS.CreatureElemental",
  "fey": "RELICS.CreatureFey",
  "fiend": "RELICS.CreatureFiend",
  "giant": "RELICS.CreatureGiant",
  "humanoid": "RELICS.CreatureHumanoid",
  "monstrosity": "RELICS.CreatureMonstrosity",
  "ooze": "RELICS.CreatureOoze",
  "plant": "RELICS.CreaturePlant",
  "undead": "RELICS.CreatureUndead"
};


/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
RELICS.itemActionTypes = {
  "mwak": "RELICS.ActionMWAK",
  "rwak": "RELICS.ActionRWAK",
  "msak": "RELICS.ActionMSAK",
  "rsak": "RELICS.ActionRSAK",
  "save": "RELICS.ActionSave",
  "heal": "RELICS.ActionHeal",
  "abil": "RELICS.ActionAbil",
  "util": "RELICS.ActionUtil",
  "other": "RELICS.ActionOther"
};

/* -------------------------------------------- */

RELICS.itemCapacityTypes = {
  "items": "RELICS.ItemContainerCapacityItems",
  "weight": "RELICS.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
RELICS.limitedUsePeriods = {
  "sr": "RELICS.ShortRest",
  "lr": "RELICS.LongRest",
  "day": "RELICS.Day",
  "charges": "RELICS.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character
 * @type {Object}
 */
RELICS.equipmentTypes = {
  "light": "RELICS.EquipmentLight",
  "medium": "RELICS.EquipmentMedium",
  "heavy": "RELICS.EquipmentHeavy",
  "artifact": "RELICS.EquipmentArtifact",
  "overwear": "RELICS.EquipmentOverwear",
  "clothing": "RELICS.EquipmentClothing",
  "trinket": "RELICS.EquipmentTrinket",
  "upgrade": "RELICS.EquipmentUpgrade",
  "vehicle": "RELICS.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
RELICS.armorProficiencies = {
  "lgt": RELICS.equipmentTypes.light,
  "med": RELICS.equipmentTypes.medium,
  "hvy": RELICS.equipmentTypes.heavy
};

/**
 * A map of armor item proficiency to actor item proficiency
 * Used when a new player owned item is created
 * @type {Object}
 */
RELICS.armorProficienciesMap = {
  "overwear": true,
  "clothing": true,
  "light": "lgt",
  "medium": "med",
  "heavy": "hvy"
}


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
RELICS.consumableTypes = {
  "ammo": "RELICS.ConsumableAmmunition",
  "potion": "RELICS.ConsumablePotion",
  "poison": "RELICS.ConsumablePoison",
  "food": "RELICS.ConsumableFood",
  "scroll": "RELICS.ConsumableScroll",
  "wand": "RELICS.ConsumableWand",
  "rod": "RELICS.ConsumableRod",
  "trinket": "RELICS.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
RELICS.currencies = {
  "cr": "RELICS.CurrencyCR"
};


/* -------------------------------------------- */


// Damage Types
RELICS.damageTypes = {
  "acid": "RELICS.DamageAcid",
  "bludgeoning": "RELICS.DamageBludgeoning",
  "cold": "RELICS.DamageCold",
  "fire": "RELICS.DamageFire",
  "force": "RELICS.DamageForce",
  "lightning": "RELICS.DamageLightning",
  "necrotic": "RELICS.DamageNecrotic",
  "piercing": "RELICS.DamagePiercing",
  "poison": "RELICS.DamagePoison",
  "psychic": "RELICS.DamagePsychic",
  "radiant": "RELICS.DamageRadiant",
  "slashing": "RELICS.DamageSlashing",
  "thunder": "RELICS.DamageThunder"
};

// Damage Resistance Types
RELICS.damageResistanceTypes = mergeObject(foundry.utils.deepClone(RELICS.damageTypes), {
  "physical": "RELICS.DamagePhysical"
});


/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
RELICS.movementTypes = {
  "burrow": "RELICS.MovementBurrow",
  "climb": "RELICS.MovementClimb",
  "fly": "RELICS.MovementFly",
  "swim": "RELICS.MovementSwim",
  "walk": "RELICS.MovementWalk",
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
RELICS.movementUnits = {
  "m": "RELICS.DistM",
  "km": "RELICS.DistKm"
};

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from RELICS.movementUnits
 * @type {Object<string,string>}
 */
RELICS.distanceUnits = {
  "none": "RELICS.None",
  "self": "RELICS.DistSelf",
  "touch": "RELICS.DistTouch",
  "spec": "RELICS.Special",
  "any": "RELICS.DistAny"
};
for ( let [k, v] of Object.entries(RELICS.movementUnits) ) {
  RELICS.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
RELICS.encumbrance = {
  currencyPerWeight: 1000000,
  strMultiplier: 1,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
RELICS.targetTypes = {
  "none": "RELICS.None",
  "self": "RELICS.TargetSelf",
  "creature": "RELICS.TargetCreature",
  "ally": "RELICS.TargetAlly",
  "enemy": "RELICS.TargetEnemy",
  "object": "RELICS.TargetObject",
  "space": "RELICS.TargetSpace",
  "radius": "RELICS.TargetRadius",
  "sphere": "RELICS.TargetSphere",
  "cylinder": "RELICS.TargetCylinder",
  "cone": "RELICS.TargetCone",
  "square": "RELICS.TargetSquare",
  "cube": "RELICS.TargetCube",
  "line": "RELICS.TargetLine",
  "wall": "RELICS.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are RELICS target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
RELICS.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
RELICS.healingTypes = {
  "healing": "RELICS.Healing",
  "temphp": "RELICS.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {string[]}
 */
RELICS.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @enum {string}
 */
RELICS.senses = {
  "blindsight": "RELICS.SenseBlindsight",
  "darkvision": "RELICS.SenseDarkvision",
  "tremorsense": "RELICS.SenseTremorsense",
  "truesight": "RELICS.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
RELICS.skills = {
  "ani": "RELICS.SkillAni",
  "arc": "RELICS.SkillArc",
  "ath": "RELICS.SkillAth",
  "dec": "RELICS.SkillDec",
  "his": "RELICS.SkillHis",
  "ins": "RELICS.SkillIns",
  "itm": "RELICS.SkillItm",
  "inv": "RELICS.SkillInv",
  "med": "RELICS.SkillMed",
  "nat": "RELICS.SkillNat",
  "prc": "RELICS.SkillPrc",
  "per": "RELICS.SkillPer",
  "rel": "RELICS.SkillRel",
  "slt": "RELICS.SkillSlt",
  "ste": "RELICS.SkillSte",
  "sur": "RELICS.SkillSur"
};


/* -------------------------------------------- */

RELICS.spellPreparationModes = {
  "prepared": "RELICS.SpellPrepPrepared",
  "pact": "RELICS.PactMagic",
  "always": "RELICS.SpellPrepAlways",
  "atwill": "RELICS.SpellPrepAtWill",
  "innate": "RELICS.SpellPrepInnate"
};

RELICS.spellUpcastModes = ["always", "pact", "prepared"];

RELICS.spellProgression = {
  "none": "RELICS.SpellNone",
  "full": "RELICS.SpellProgFull",
  "half": "RELICS.SpellProgHalf",
  "third": "RELICS.SpellProgThird",
  "pact": "RELICS.SpellProgPact",
  "artificer": "RELICS.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
RELICS.spellScalingModes = {
  "none": "RELICS.SpellNone",
  "cantrip": "RELICS.SpellCantrip",
  "level": "RELICS.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
RELICS.weaponTypes = {
  "simpleM": "RELICS.WeaponSimpleM",
  "martialM": "RELICS.WeaponMartialM",
  "natural": "RELICS.WeaponNatural",
  "improv": "RELICS.WeaponImprov",
  "assault": "RELICS.WeaponAssault",
  "pistol": "RELICS.WeaponPistol",
  "shotgun": "RELICS.WeaponShotgun",
  "smg": "RELICS.WeaponSMG",
  "lmg": "RELICS.WeaponLMG",
  "sniper": "RELICS.WeaponSniper",
  "grenade": "RELICS.WeaponGrenade",
  "grenadeL": "RELICS.WeaponGrenadeLauncher",
  "rocketL": "RELICS.WeaponRocketLauncher",
  "flamethrower": "RELICS.WeaponFlamethrower",
  "shield": "RELICS.WeaponShield",
  "lightC": "RELICS.WeaponCannon"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
RELICS.weaponProperties = {
  "asa": "RELICS.WeaponPropertiesAreaSup",
  "arp": "RELICS.WeaponPropertiesAP",
  "aut": "RELICS.WeaponPropertiesAuto",
  "bla": "RELICS.WeaponPropertiesBlast",
  "bob": "RELICS.WeaponPropertiesBothB",
  "buc": "RELICS.WeaponPropertiesBuckshot",
  "bon": "RELICS.WeaponPropertiesBuckshotOnly",
  "bur": "RELICS.WeaponPropertiesBursting",
  "dam": "RELICS.WeaponPropertiesDamaged",
  "ded": "RELICS.WeaponPropertiesDestroyed",
  "des": "RELICS.WeaponPropertiesDestructive",
  "dis": "RELICS.WeaponPropertiesDisorienting",
  "emp": "RELICS.WeaponPropertiesEMP",
  "fin": "RELICS.WeaponPropertiesFin",
  "fla": "RELICS.WeaponPropertiesFlame",
  "ina": "RELICS.WeaponPropertiesInacc",
  "oha": "RELICS.WeaponPropertiesOne",
  "ovc": "RELICS.WeaponPropertiesOvercharge",
  "pen": "RELICS.WeaponPropertiesPenetration",
  "rlg": "RELICS.WeaponPropertiesRailgun",
  "rpd": "RELICS.WeaponPropertiesRapid",
  "rch": "RELICS.WeaponPropertiesRch",
  "shd": "RELICS.WeaponPropertiesShield",
  "shc": "RELICS.WeaponPropertiesShocking",
  "shm": "RELICS.WeaponPropertiesShockMode",
  "smk": "RELICS.WeaponPropertiesSmoke",
  "sda": "RELICS.WeaponPropertiesSidearm",
  "sni": "RELICS.WeaponPropertiesSniper",
  "spc": "RELICS.WeaponPropertiesSpc",
  "spr": "RELICS.WeaponPropertiesSpray",
  "stc": "RELICS.WeaponPropertiesSticky",
  "sup": "RELICS.WeaponPropertiesSuppressive",
  "thr": "RELICS.WeaponPropertiesThr",
  "unr": "RELICS.WeaponPropertiesUnreliable"
};


/* -------------------------------------------- */

/**
 * Define the set of equipment property flags which can exist on a piece of equipment
 * @type {Object}
 */
RELICS.equipmentProperties = {
  "blk": "RELICS.EquipmentPropertiesBulky",
  "csh": "RELICS.EquipmentPropertiesCushioned",
  "dam": "RELICS.EquipmentPropertiesDamaged",
  "ded": "RELICS.EquipmentPropertiesDestroyed",
  "frq": "RELICS.EquipmentPropertiesFitnessRequirement",
  "pow": "RELICS.EquipmentPropertiesPonderous",
  "sld": "RELICS.EquipmentPropertiesSealed",
  "spc": "RELICS.EquipmentPropertiesSpc",
  "unw": "RELICS.EquipmentPropertiesUnderwear"
};


// Spell Components
RELICS.spellComponents = {
  "V": "RELICS.ComponentVerbal",
  "S": "RELICS.ComponentSomatic",
  "M": "RELICS.ComponentMaterial"
};

// Spell Schools
RELICS.spellSchools = {
  "abj": "RELICS.SchoolAbj",
  "con": "RELICS.SchoolCon",
  "div": "RELICS.SchoolDiv",
  "enc": "RELICS.SchoolEnc",
  "evo": "RELICS.SchoolEvo",
  "ill": "RELICS.SchoolIll",
  "nec": "RELICS.SchoolNec",
  "trs": "RELICS.SchoolTrs"
};

// Spell Levels
RELICS.spellLevels = {
  0: "RELICS.SpellLevel0",
  1: "RELICS.SpellLevel1",
  2: "RELICS.SpellLevel2",
  3: "RELICS.SpellLevel3",
  4: "RELICS.SpellLevel4",
  5: "RELICS.SpellLevel5",
  6: "RELICS.SpellLevel6",
  7: "RELICS.SpellLevel7",
  8: "RELICS.SpellLevel8",
  9: "RELICS.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
RELICS.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
RELICS.sourcePacks = {
  ITEMS: "relics.items"
}

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
RELICS.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
RELICS.polymorphSettings = {
  keepPhysical: 'RELICS.PolymorphKeepPhysical',
  keepMental: 'RELICS.PolymorphKeepMental',
  keepSaves: 'RELICS.PolymorphKeepSaves',
  keepSkills: 'RELICS.PolymorphKeepSkills',
  mergeSaves: 'RELICS.PolymorphMergeSaves',
  mergeSkills: 'RELICS.PolymorphMergeSkills',
  keepClass: 'RELICS.PolymorphKeepClass',
  keepFeats: 'RELICS.PolymorphKeepFeats',
  keepSpells: 'RELICS.PolymorphKeepSpells',
  keepItems: 'RELICS.PolymorphKeepItems',
  keepBio: 'RELICS.PolymorphKeepBio',
  keepVision: 'RELICS.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
RELICS.proficiencyLevels = {
  0: "RELICS.NotProficient",
  1: "RELICS.Proficient",
  0.5: "RELICS.HalfProficient",
  2: "RELICS.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
RELICS.cover = {
  0: 'RELICS.None',
  .5: 'RELICS.CoverHalf',
  .75: 'RELICS.CoverThreeQuarters',
  1: 'RELICS.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
RELICS.conditionTypes = {
  "blinded": "RELICS.ConBlinded",
  "charmed": "RELICS.ConCharmed",
  "deafened": "RELICS.ConDeafened",
  "diseased": "RELICS.ConDiseased",
  "exhaustion": "RELICS.ConExhaustion",
  "frightened": "RELICS.ConFrightened",
  "grappled": "RELICS.ConGrappled",
  "incapacitated": "RELICS.ConIncapacitated",
  "invisible": "RELICS.ConInvisible",
  "paralyzed": "RELICS.ConParalyzed",
  "petrified": "RELICS.ConPetrified",
  "poisoned": "RELICS.ConPoisoned",
  "prone": "RELICS.ConProne",
  "restrained": "RELICS.ConRestrained",
  "stunned": "RELICS.ConStunned",
  "unconscious": "RELICS.ConUnconscious"
};

// Languages
RELICS.languages = {
  "common": "RELICS.LanguagesCommon",
  "aarakocra": "RELICS.LanguagesAarakocra",
  "abyssal": "RELICS.LanguagesAbyssal",
  "aquan": "RELICS.LanguagesAquan",
  "auran": "RELICS.LanguagesAuran",
  "celestial": "RELICS.LanguagesCelestial",
  "deep": "RELICS.LanguagesDeepSpeech",
  "draconic": "RELICS.LanguagesDraconic",
  "druidic": "RELICS.LanguagesDruidic",
  "dwarvish": "RELICS.LanguagesDwarvish",
  "elvish": "RELICS.LanguagesElvish",
  "giant": "RELICS.LanguagesGiant",
  "gith": "RELICS.LanguagesGith",
  "gnomish": "RELICS.LanguagesGnomish",
  "goblin": "RELICS.LanguagesGoblin",
  "gnoll": "RELICS.LanguagesGnoll",
  "halfling": "RELICS.LanguagesHalfling",
  "ignan": "RELICS.LanguagesIgnan",
  "infernal": "RELICS.LanguagesInfernal",
  "orc": "RELICS.LanguagesOrc",
  "primordial": "RELICS.LanguagesPrimordial",
  "sylvan": "RELICS.LanguagesSylvan",
  "terran": "RELICS.LanguagesTerran",
  "cant": "RELICS.LanguagesThievesCant",
  "undercommon": "RELICS.LanguagesUndercommon"
};

// Character Level XP Requirements
RELICS.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
RELICS.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
RELICS.classFeatures = ClassFeatures;

// Configure Optional Character Flags
RELICS.characterFlags = {
  "diamondSoul": {
    name: "RELICS.FlagsDiamondSoul",
    hint: "RELICS.FlagsDiamondSoulHint",
    section: "RELICS.Feats",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "RELICS.FlagsElvenAccuracy",
    hint: "RELICS.FlagsElvenAccuracyHint",
    section: "RELICS.RacialTraits",
    type: Boolean
  },
  "halflingLucky": {
    name: "RELICS.FlagsHalflingLucky",
    hint: "RELICS.FlagsHalflingLuckyHint",
    section: "RELICS.RacialTraits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "RELICS.FlagsInitiativeAdv",
    hint: "RELICS.FlagsInitiativeAdvHint",
    section: "RELICS.Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "RELICS.FlagsAlert",
    hint: "RELICS.FlagsAlertHint",
    section: "RELICS.Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "RELICS.FlagsJOAT",
    hint: "RELICS.FlagsJOATHint",
    section: "RELICS.Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "RELICS.FlagsObservant",
    hint: "RELICS.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "RELICS.Feats",
    type: Boolean
  },
  "powerfulBuild": {
    name: "RELICS.FlagsPowerfulBuild",
    hint: "RELICS.FlagsPowerfulBuildHint",
    section: "RELICS.RacialTraits",
    type: Boolean
  },
  "reliableTalent": {
    name: "RELICS.FlagsReliableTalent",
    hint: "RELICS.FlagsReliableTalentHint",
    section: "RELICS.Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "RELICS.FlagsRemarkableAthlete",
    hint: "RELICS.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "RELICS.Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "RELICS.FlagsWeaponCritThreshold",
    hint: "RELICS.FlagsWeaponCritThresholdHint",
    section: "RELICS.Feats",
    type: Number,
    placeholder: 20
  },
  "spellCriticalThreshold": {
    name: "RELICS.FlagsSpellCritThreshold",
    hint: "RELICS.FlagsSpellCritThresholdHint",
    section: "RELICS.Feats",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "RELICS.FlagsMeleeCriticalDice",
    hint: "RELICS.FlagsMeleeCriticalDiceHint",
    section: "RELICS.Feats",
    type: Number,
    placeholder: 0
  },
};

// Configure allowed status flags
RELICS.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(RELICS.characterFlags));
