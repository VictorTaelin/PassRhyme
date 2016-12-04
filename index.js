module.exports = (function(){
  var vocab = require("./data/vocabulary.json");
  var rhymes = require("./data/rhymes.json");
  var upperVocab = {};
  for (var key in vocab)
    upperVocab[key] = vocab[key].map(function(word){
      return word.toUpperCase();
    });
  function fromWords(w){
    var poem = "";
    var v = vocab;
    var a = v.nouns[w[4]], b = rhymes[a];
    poem += "The "+v.adjs[w[0]]+" "+v.nouns[w[1]]+" "+v.advs[w[2]]+" "+v.verbs[w[3]]+" the "+a+"\n";
    poem += "The "+v.adjs[w[5]]+" "+v.nouns[w[6]]+" "+v.advs[w[7]]+" "+v.verbs[w[8]]+" the "+b+"\n";
    return poem;
  };
  function toWords(poem){
    var words = poem.replace(/\n/g," ").split(" ").map(function(word){
      return word.toUpperCase();
    }).filter(function(word){
      return word && word !== "THE";
    });
    return [
      upperVocab.adjs.indexOf(words[0]),
      upperVocab.nouns.indexOf(words[1]),
      upperVocab.advs.indexOf(words[2]),
      upperVocab.verbs.indexOf(words[3]),
      upperVocab.nouns.indexOf(words[4]),
      upperVocab.adjs.indexOf(words[5]),
      upperVocab.nouns.indexOf(words[6]),
      upperVocab.advs.indexOf(words[7]),
      upperVocab.verbs.indexOf(words[8])];
  };
  return {
    fromWords: fromWords,
    toWords: toWords};
})();
