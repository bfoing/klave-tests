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
    blob: u8[] = [];
}

@json
class E {
    instD!: D;
    blob: u8[] = [];
}

@json
class F {
    value: string = "";
    blob: u8[] = [];
}

@json
class G {
    instF!: F;
    blob: u8[] = [];
}

export function toU8Array(data : Uint8Array) : u8[] {
    let ret : u8[] = [];
    for (let i = 0; i < data.length; i++) {
        ret.push(data[i]);
    }
    return ret;
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

    Notifier.sendJson<String>("test");
    let xxx = JSON.stringify(arr);
    Notifier.sendJson<String>(xxx);

    let objE = new E();
    objE.blob = toU8Array(arr);
    objE.instD = new D();
    objE.instD.value = "whatever E";
    objE.instD.blob = toU8Array(arr);
    Notifier.sendJson<E>(objE);

    let objG = new G();
    objG.blob = toU8Array(arr);
    objG.instF = new F();
    objG.instF.value = "whatever G";
    objG.instF.blob = toU8Array(arr);
    Notifier.sendJson<G>(objG);
}