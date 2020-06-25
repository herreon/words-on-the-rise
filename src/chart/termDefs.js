const def0 = [`Slide up: usually said on Snapchat.
${"<br />"}&ensp; E.g.: Person 1: bro s / u I need to tell you something.
${"<br />"}&ensp; Person 2: Alright.`
, "Urban Dictionary"]

const def1 = [`OK boomer is a viral internet slang phrase used, often in a humorous or ironic manner, to call out or dismiss out-of-touch or closed-minded opinions associated with the baby boomer generation and older people more generally.`
, "Dictionary.com"]

const def2 = [`VSCO girl is a term, generally used as an insult, for a young, usually white woman who posts trendy pictures of herself edited on the app VSCO.
Stereotypes of the VSCO girl include wearing scrunchies and Birkenstock sandals, drinking out of Hydro Flask reusable water canisters, saying sksksk and I oop, and generally seeking attention online.`
, "Dictionary.com"]

const def3 = [`Shout Out for Shoutout: commonly used by Instagramers to request a return shoutout once a shoutout is provided to another Instagramer in an effort to get more followers.`
, "Urban Dictionary"    
]

const def4 = [`The "For You" page on the massively popular short video app, TikTok. FYP acts like an individual landing page for users which showcases curated videos that TikTok thinks they might watch or like.
TikTok users often hashtag their videos with #fyp in hopes their content will make it onto other users’ FYP, thereby getting more views.
${"<br />"}&ensp; E.g.: My fyp was loaded with cat videos today.`
, "Dictionary.com"
]

const def5 = [`Not Gonna Lie: indicating you are admitting something that may be considered strange. Could be deemed the equivalent of 'just saying' or 'no offence' in the sense that it makes your statement more valid/less offensive.`
, "Urban Dictionary"]

const def6 = [`Simp is a slang insult for men who are seen as too attentive and submissive to women, especially out of a failed hope of winning some entitled sexual attention or activity from them.`
, "Dictionary.com"]

const def7 = [`If You Know You Know: 
${"<br />"}&ensp; E.g. Last nights party was crazy #iykyk`
, "Urban Dictionary"]

const def8 = [`Short for snapback, SB is used on social media platform Snapchat for when you want a user to respond back to a snap, or “message.”`
, "Dictionary.com"]

const termDefs = [
    def0,
    def1,
    def2,
    def3,
    def4,
    def5,
    def6,
    def7,
    def8
]

// function renderDef (termSlice, index, textHolder) {
    //     console.log(termDefs[index]);
    
    //     textHolder.transition()
    //     .text(`definition of ${termSlice.term}: ${termDefs[index]}`)
    
    // }
    
function eraseDef () {
    let question = document.getElementById("def-term");
    question.innerHTML = "";

    let answer = document.getElementById("def-ans");
    answer.innerHTML = "";

    let source = document.getElementById("def-source");
    source.innerHTML = "";
}
    
function renderDef (termSlice, index) {

    let question = document.getElementById("def-term");
    question.innerHTML = `${termSlice.term}:`;

    index = Math.floor(index/3);
    let answer = document.getElementById("def-ans");
    answer.innerHTML = `${termDefs[index][0]}`;
    
    let source = document.getElementById("def-source");
    source.innerHTML = `source: ${termDefs[index][1]}`;

}

module.exports = { renderDef, eraseDef }

