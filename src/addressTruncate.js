export function TruncateAddress(addr) {
    let first = addr.substr(0,10);
    let second = addr.substr(addr.length - 6);
    return `${first}....${second}`.toLowerCase()
}