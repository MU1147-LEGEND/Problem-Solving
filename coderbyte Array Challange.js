function ArrayChallenge(strArr) {
  const childToParent = {}; // child (key): parent (value)
  const parentToChildren = {};

  for (let pair of strArr) {
    const [child, parent] = pair.replace('(', '').replace(')', '').split(',').map(Number);
    
    // child (key) : parent (value) // ekta child ekta parent
    if(childToParent[child]) return false; 
    childToParent[child] = parent;
    
    // parent(key) : [childrens] (value)
    if(!parentToChildren[parent]) parentToChildren[parent] = [];
    parentToChildren[parent].push(child)
    
    // console.log(parentToChildren[parent])
    if(parentToChildren[parent].length > 2){
      return false;
    }
    
}

  const allParents = [...new Set(Object.values(childToParent))]
  const allChilds = [...new Set(Object.keys(childToParent).map(Number))]
    
  const root = allParents.filter((parent)=> !allChilds.includes(parent) )
  
  if(root.length > 1) return false;
  return true;
}



console.log(ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]))

// ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])
