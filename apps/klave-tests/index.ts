import { Crypto, Notifier } from '@klave/sdk';


/**
* @query
*/
export function subtleCryptoECDSA(): void
{
    // Generate EC key
    let eccKeyResult = Crypto.Subtle.generateKey({namedCurve: "P-256"} as Crypto.EcKeyGenParams, true, ["sign", "verify"]);
    if (!eccKeyResult.data)
        return Notifier.sendString(`can't generate key: '${eccKeyResult.err!.message}'`);

    // Sign and Verify
    let ecdsaParams = {hash: "SHA2-256"} as Crypto.EcdsaParams;
    let data = String.UTF8.encode("Hello World");
    let signEcc = Crypto.Subtle.sign(ecdsaParams, eccKeyResult.data!, data);
    if (!signEcc.data)
        return Notifier.sendString(`can't sign: '${signEcc.err!.message}'`);

    let verifyEcc = Crypto.Subtle.verify(ecdsaParams, eccKeyResult.data!, data, signEcc.data!);
    if (!verifyEcc.data)
        return Notifier.sendString(`can't verify: '${verifyEcc.err!.message}'`);

    return Notifier.sendString(`isValid: '${verifyEcc.data!.isValid}'`);
}