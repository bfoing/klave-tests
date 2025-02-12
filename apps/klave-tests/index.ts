import { Notifier, JSON } from '@klave/sdk';

@json
class A {
    value: string = "";
}

@json
class B {
    instA: A = new A;
}

@json
class C {
    instA!: A;
}

/**
 * @query
 */
export function test(): void {

    let objB = new B();
    objB.instA.value = "whatever";

    Notifier.sendJson<B>(objB);

    let objC = new C();
    objC.instA = new A();
    objC.instA.value = "whatever";

    Notifier.sendJson<C>(objC);
}