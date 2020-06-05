#!/usr/bin/env ts-node
// let a: number = parseInt(process.argv[2])
// let b = parseInt(process.argv[3])
// if (Number.isNaN(a) || Number.isNaN(b)) {
//     console.log("出错了")
//     process.exit()
// }
// console.log(a + b)

class Person {
    public children: Person[] = []
    constructor(public name: string) {
    }
    addChild(child: Person): void {
        this.children.push(child)
    }
    introduceFamily() {
        console.log(this.name)
        this.children.forEach((item) => {
            item.introduceFamily()
        })
    }
}
let aa = new Person("jh")
let bb = new Person("jhh")
let cc = new Person("jhhh")
aa.addChild(bb)
aa.addChild(cc)
aa.introduceFamily()

