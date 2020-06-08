function add<T>(a: any, b: any): T {
    console.log(a + b)
    return a + b
}
add<number>(1, 2)
add<string>("12", "34")