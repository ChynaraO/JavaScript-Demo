const numbers = [1,2,-1,3,4];

// const filtered = numbers.filter(n => n >=0);
// const items = filtered.map(n => '<li>' + n + '</li>')
// console.log(filtered);
// console.log(items);
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);