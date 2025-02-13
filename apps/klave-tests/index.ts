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

@json
class D {
    value: string = "";
    blob: Uint8Array = new Uint8Array(0);
}

@json
class E {
    instD!: D;
    blob: Uint8Array = new Uint8Array(0);;
}

@json
class F {
    value: string = "";
    blob!: Uint8Array;
}

@json
class G {
    instF!: F;
    blob!: Uint8Array;
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

    let arr = new Uint8Array(3);
    arr[0] = 1;
    arr[1] = 12;
    arr[2] = 123;
    Notifier.sendJson<Uint8Array>(arr);

    let objE = new E();
    objE.blob = arr;
    objE.instD = new D();
    objE.instD.value = "whatever E";
    objE.instD.blob = arr;
    Notifier.sendJson<E>(objE);

    let objG = new G();
    objG.blob = arr;
    objG.instF = new F();
    objG.instF.value = "whatever G";
    objG.instF.blob = arr;
    Notifier.sendJson<G>(objG);
}