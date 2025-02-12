import { Notifier, JSON } from '@klave/sdk';

@json
class A {
    propA: string = "";
}

@json
class B {
    propB: A = new A;
}

@json
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

/**
 * @query
 */
export function test(): void {

    let obj = new B();
    obj.propB.propA = "whatever";

    Notifier.sendJson<ErrorMessage>({ success: true, message: `✅ Success!!` });
}