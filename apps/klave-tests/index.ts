import { Notifier, JSON } from '@klave/sdk';

@json
class A {
    value: string = "";
}

@json
class A2 {
    value: string = "";
    blob!: Uint8Array;
}

@json
class B {
    instA: A = new A;
}

@json
class C {
    instA!: A;
}

@json
class D {
    instA2!: A2;
}

/**
 * @query
 */
export function test(): void {

    let objB = new B();
    objB.instA.value = "whatever B";
    Notifier.sendJson<B>(objB);

    let objC = new C();
    objC.instA = new A();
    objC.instA.value = "whatever C";
    Notifier.sendJson<C>(objC);

    let objD = new D();
    objD.instA2 = new A2();
    objD.instA2.value = "whatever D";
    let arr = new Uint8Array(3);
    arr[0] = 1;
    arr[1] = 12;
    arr[2] = 123;
    objD.instA2.blob = arr;
    Notifier.sendJson<D>(objD);
}