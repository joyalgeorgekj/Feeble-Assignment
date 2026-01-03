export function findPercent(position: number, total: number): string {
    return ((position / total) * 100).toFixed(2) + "%";
}