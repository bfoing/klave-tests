import { Notifier, Crypto } from '@klave/sdk';
import { ErrorMessage, User } from './types';
import { encode } from './hex-encoder';

/**
 * @query
 */
export function createCode(): void {

    Notifier.sendJson<ErrorMessage>({ success: true, message: `✅ Enter function` });

    let user = new User();

    Notifier.sendJson<ErrorMessage>({ success: true, message: `✅ Create user` });

    user.email.value = "whatever";

    Notifier.sendJson<ErrorMessage>({ success: true, message: `✅ Set email` });

    let rnd = Crypto.getRandomValues(8);
    let hex = encode(rnd!);
    let code = hex.substring(0, 8).toUpperCase();

    Notifier.sendJson<ErrorMessage>({ success: true, message: `Code is ${code}` });
}