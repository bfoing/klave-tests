import { JSON } from '@klave/sdk';

@json
export class ErrorMessage {
    success!: boolean;
    message!: string;
}


@json
export class UserVerifiableAttribute {
    value: string = "";
    challenge: string = "";
    //attempts!: u64[];
    verified: bool = false;
    //verifiers: string[] = [];
    //lastVerificationTime: u64 = 0;
}

@json
export class PushNotificationUserConfiguration {
    token!: string;
    encryptionKey!: Uint8Array;
}

@json
export class User {
    userId!: string;
    devicePublicKeyHash!: string;
    seedTOTP!: string;
    email!: UserVerifiableAttribute;
    pushNotifCfg!: string;
}