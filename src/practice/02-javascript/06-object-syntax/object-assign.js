const original = { a: 1, b: 2, c: 3 }

// Object.assign は第1引数のオブジェクトに第2引数以降のオブジェクトのプロパティを追加・上書きしていく
const copy = Object.assign({}, original)
console.log(copy)
console.log(copy === original)

// Object.assign は破壊的メソッドのため original にも影響を及ぼす
const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100 })
console.log(assigned)
console.log(original)
