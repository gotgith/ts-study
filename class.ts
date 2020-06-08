{
    class A {
        constructor(a1: number) {
            this.a1 = a1
        }
        a1: number;
        a2(para: string): void { console.log("我是个方法") }
    }
    class B extends A {
        constructor(b1: string) {
            super(123)
            this.b1 = b1
        };
        b1: string;
        b2(para: string): void { console.log(para) }

    }
    let bbb = new B("234")
    console.log(bbb.b2("123"))
}