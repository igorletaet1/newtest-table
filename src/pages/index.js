const arr = [{test: "rep", rr: "222"},{test: "ddd", rr: "555"}]
arr.map(item => item.test).reduce((a, b) => console.log(a + b))
