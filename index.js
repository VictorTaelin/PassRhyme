module.exports = (function(){
  var vocab = require("./data/vocabulary.json");
  var rhymes = require("./data/rhymes.json");
  return function passPoem(w){
    var poem = "";
    var v = vocab;
    var a = v.nouns[w[8]], b = rhymes[a];
    poem += "The "+v.adjs[w[0]]+" "+v.nouns[w[1]]+" "+v.advs[w[2]]+" "+v.verbs[w[3]]+" the "+a+"\n";
    poem += "The "+v.adjs[w[4]]+" "+v.nouns[w[5]]+" "+v.advs[w[6]]+" "+v.verbs[w[7]]+" the "+b+"\n";
    return poem;
  };
})();
