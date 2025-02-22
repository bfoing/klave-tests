import { Crypto, Notifier } from '@klave/sdk';


/**
* @query
*/
export function subtleCryptoECDSA(): void
{
    // Generate EC key
    let eccKeyResult = Crypto.Subtle.generateKey({namedCurve: "P-256"} as Crypto.EcKeyGenParams, true, ["sign"]);
    if (!eccKeyResult.data)
        return Notifier.sendString(`Can't generate key: '${eccKeyResult.err!.message}'`);

    // Sign
    let ecdsaParams = {hash: "SHA2-256"} as Crypto.EcdsaParams;
    let data = String.UTF8.encode("Hello World");
    let signEcc = Crypto.Subtle.sign(ecdsaParams, eccKeyResult.data!, data);
    if (!signEcc.data)
        return Notifier.sendString(`Can't sign: '${signEcc.err!.message}'`);

    // Verify
    let verifyEcc = Crypto.Subtle.verify(ecdsaParams, eccKeyResult.data!, data, signEcc.data!);
    if (!verifyEcc.data)
        return Notifier.sendString(`Can't verify: '${verifyEcc.err!.message}'`);

    // Return
    return Notifier.sendString(`isValid: '${verifyEcc.data!.isValid}'`);
}