export function encode(data: Uint8Array) : string {

    let hex = "";
    for (let i = 0; i < data.length; i++) {
        hex += data[i].toString(16);
    }
    return hex;
}