import { JSON } from '@klave/sdk';

@json
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

@json
export class UserVerifiableAttribute {
    value: string = "";
}

@json
export class User {
    email!: UserVerifiableAttribute;
}