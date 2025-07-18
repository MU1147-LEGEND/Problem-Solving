var kthCharacter = function(k) {
    let word = 'a'
    
    if(k==1){
      return 'a'
    }
    
    while(word.length < k){
      let nextPart = '';
      for(c in word){
        nextPart += nextChar(word[c])
      }
      word+=nextPart
    }
    
    return word[k-1];
};

// util functions
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}