interface InterfaceA {
    num: number,
    b: Boolean,
    str: String,
    optional?: String,
    add(n1: number, n2: number): number
    readonly r: String
}

let jh: InterfaceA = {
    num: 1,
    b: false,
    str: "111",
    add(n1: number, n2: number): number { return n1 + n2 },
    r: "222"
}

console.log(jh.add(1, 2))