const flat = (arr) => {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {return acc.concat(flat(cur));}
        else {return acc.concat(cur);}
    } , []);
}

let arr = [1, 2, [3, 4, [5, 6]]];

console.log(flat(arr));

function flatten(items) {
    const flat = [];
  
    items.forEach(_item => {
      if (Array.isArray(_item)) {
        flat.push(...flatten(_item));
      } else {
        flat.push(_item);
      }
    });

    return flat;
  }
