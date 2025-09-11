export function healthCheck(unit) {
    return unit['health'] >= 15 ? (unit['health'] >= 51 ? 'healthy' : 'wounded') : "critical";
}
