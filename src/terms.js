const maxNum = 5;

const $2019 = [
    "boomer",
    "vsco",
    "sfs",
    "fyp",
    "simp",
    "ngl",
    "s/u",
    "iykyk",
    "sb",
    "sksksk",
    "yktv",
    "and i oop"
]

const $2019_1 = $2019.slice(0, 3);
const $2019_2 = $2019.slice(2, 4);
const $2019_3 = $2019.slice(0, 4);

const oneHit = ["slatt", "ants"];

const searchTerms = [];

$2019.forEach((term, i) => {
    if (i < maxNum) {
        searchTerms.push(`what does ${term} mean`)
    }
})


const $2018 = [
    "incel",
    "uwu",
    "mukbang",
    "ibf",
    "blockchain",
    "rng",
    "jit",
    "juuling",
    "gekyume",
    "zaddy",
    "wtm",
    "wig"
]


const $2017 = [
    "non binary",
    "bitcoin",
    "snowflake",
    "pmoys",
    "maga",
    "wasp",
    "boujie",
    "trolls"
]

const $2016 = [
    "gaslighting",
    "sjw",
    "boolin",
    "woke",
    "shill",
    "quash",
    "brandish",
    "triggered",
    "shook",
    "bigly",
    "holosexual",
    "vexing",
    "bough",
    "juju",
    "wavy"
]

const $2015 = [
    "simmer",
    "netflix and chill",
    "chapo",
    "stoop",
    "blase",
    "pleb",
    "lowkey",
    "tome",
    "wap",
    "shudder",
    "burnt",
    "vape"
]

// export { searchTerms };

// export default searchTerms ;

module.exports = { searchTerms, $2019, $2019_1, $2019_2, $2019_3 };