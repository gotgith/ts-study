function add<T>(a: any, b: any): T {
    console.log(a + b)
    return a + b
}
add<number>(1, 2)
add<string>("12", "34")





// function returnIt<T>(arg: T): T{
//     console.log(arg.length) // error
//     return arg;
// }

// 泛型约束
interface HasLength {
    length: number
}

function returnIt<T extends HasLength>(arg: T): T {
    console.log(arg.length)
    return arg;
}