const greeter = (target) => () => console.log(`Hi, ${target}!`)

const greet = greeter('Step Jun')
greet()

// 引数に関数を取る もしくは 戻り値で関数を返す関数を「高階関数」という
