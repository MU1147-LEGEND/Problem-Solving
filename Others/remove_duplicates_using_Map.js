let arr = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Alice" },
];

let uArr = arr.map((item)=>{
  return [item.id, item]
});

new Map(uArr)

console.log([...new Map(uArr).values()]);