//"terms-only" arrays

const $2019 = [
    "ok boomer",
    "vsco",
    "sfs",
    "fyp",
    "s/u",
    "ngl",
    "simp",
    "iykyk",
    "sb"
    // "and i oop",
    // "sksksk",
    // "yktv"
]

const oneHit = ["slatt", "ants"];


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
  "wig",
];

const $2017 = [
  "non binary",
  "bitcoin",
  "snowflake",
  "pmoys",
  "maga",
  "wasp",
  "boujie",
  "trolls",
];

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
  "wavy",
];

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
  "vape",
];

// takes in a "terms-only" array;
// returns an array of the actual search queries to be made using the Google Trends API
function searchTermsGenerator(array) {
    const searchTerms = [];

    array.forEach((term) => {
        searchTerms.push(`what does ${term} mean`);
    });

    // console.log(searchTerms);
    return searchTerms;
};

// Input arg "array" is the array of search queries; 
// "maxNumOfQueries" is the max num of queries allowed on Google Trends API;
// "joinIndex" is the index of the common query on which we calibrate each subdataset.
// Function splitter returns an array of querySubsets, and a a terms-only array rearranged with the common term at index 0.
// Each querySubset is an array that contains the common query along with other queries; subarray.length = maxNumOfQueries.
// Later, each querySubset is used to make 1 API call to obtain a dataSubset.
function splitter(termsArray, maxNumOfQueries, joinIndex) {
    
    // remove the common query from the termsArray on which we'll iterate over to get the subsets of queries,
    // and save the common query to const joinTerm
    const joinTerm = termsArray.splice(joinIndex, 1);

    const interval = maxNumOfQueries - 1;

    let querySubsets = [];

    for (let i = 0; i < termsArray.length;) {
        // each set of queries excluding common query
        const group = termsArray.slice(i, i + interval);

        // each subarray has the common query as the first element, followed by other queries
        const querySubset = joinTerm.concat(group);

        querySubsets.push(querySubset);

        // jump to the next element in array which hasn't yet been added to a querySubset
        i += interval;
    }

    termsArray = joinTerm.concat(termsArray);

    return [querySubsets, termsArray];
}


const $2019_searchTerms = searchTermsGenerator($2019);
const $2019_splitQueries = splitter($2019_searchTerms, 5, $2019_searchTerms.length / 2);

module.exports = { $2019_splitQueries };