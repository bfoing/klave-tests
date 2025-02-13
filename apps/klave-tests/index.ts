import { Notifier, JSON } from '@klave/sdk';

@json
class A {
    value: string = "";
}

@json
class B {
    objA: A = new A;
}

/**
 * @query
 */
export function test(): void {

    let objB = new B();
    objB.objA.value = "whatever";
    Notifier.sendJson<B>(objB);
}