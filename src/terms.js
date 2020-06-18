const $2019 = [
    "sb",
    // "ok boomer",
    // "vsco",
    "sfs",
    "fyp",
    "s/u",
    "ngl",
    "simp",
    "and i oop"
    // "yktv",
    // "iykyk",
    // "sksksk"
]

const oneHit = ["slatt", "ants"];

// takes in the (terms only) array;
// returns an array of the actual search queries to be made using the Google Trends API
function searchTermsGenerator(array) {
    const searchTerms = [];

    array.forEach((term) => {
        searchTerms.push(`what does ${term} mean`);
    });

    // console.log(searchTerms);
    return searchTerms;
};

// Output: returns an array of arrays; each subarray will contain the 
// search queries to be made, up to the maxNumOfQueries allowed on Google Trends API.
// Thus, each subarray will later return a subdataset, each with a common term.
// Input arg "array" is the array of terms as search queries.
// Input arg joinIndex is the index of the common term on which we calibrate each subdataset.
function splitter(array, maxNumOfQueries, joinIndex) {
    const joinValue = array[joinIndex]; 
    const interval = - 1+ maxNumOfQueries;
    let result = [];

    for(let i = 1; i < array.length;) {
        const group = array.slice(i, i + interval); 
        const set = [joinValue].concat(group);
        result.push(set);
        i+= interval; // jump to the next element in array which hasn't yet been added to a subarray
    }

    // console.log("splitter",result)
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