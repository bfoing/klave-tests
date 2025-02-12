import { JSON } from '@klave/sdk';

@json
class A {
    propA: string = "";
}

@json
class B {
    propB: A = new A;
}

/**
 * @query
 */
export function test(): void {

    let obj = new B();
    obj.propB.propA = "whatever"; // no crash 🎉
}