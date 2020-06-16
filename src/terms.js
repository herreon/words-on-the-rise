const $2019 = [
    // "boomer",
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

const oneHit = ["slatt", "ants"];


function searchTermsGenerator(array) {
    const searchTerms = [];

    array.forEach((term) => {
        searchTerms.push(`what does ${term} mean`);
    });

    // console.log(searchTerms);
    return searchTerms;
};


function splitter(array, maxNum, joinIndex) {
    const joinValue = array[joinIndex];
    const interval = - 1+ maxNum;
    let result = [];

    for(let i = 1; i < array.length;) {
        const group = array.slice(i, i + interval); 
        const set = [joinValue].concat(group);
        result.push(set);
        i+= interval;
    }

    // console.log(result)
    return result;
}


const $2019_searchTerms = searchTermsGenerator($2019);
const $2019_sets = splitter($2019_searchTerms, 5, 0);


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



module.exports = { $2019, $2019_searchTerms, $2019_sets };