import { JSON } from '@klave/sdk';

@json
export class A {
    propA: string = "";
}

@json
export class B {
    propB!: A;
}

/**
 * @query
 */
export function test(): void {

    let obj = new B();
    obj.propB.propA = "whatever"; // crash
}