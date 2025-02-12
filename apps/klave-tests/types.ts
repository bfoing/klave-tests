import { JSON } from '@klave/sdk';

@json
export class ErrorMessage {
    success!: boolean;
    message!: string;
}