import { Notifier, Crypto } from '@klave/sdk';
import { ErrorMessage } from './types';
import { encode } from './hex-encoder';

/**
 * @query
 */
export function createCode(): void {

    let rnd = Crypto.getRandomValues(8);
    let hex = encode(rnd!);
    let code = hex.substring(0, 8);

    Notifier.sendJson<ErrorMessage>({ success: true, message: `Code is ${code}` });
}