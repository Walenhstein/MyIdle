const suffixes = [
    '', //0
    'k', //1
    'kk', //2
    'b', //3
    'bb', //4
    'a', //5
    'aa', //6
    'K', //7
    'A', //8
    'AA', //9
]

export default function countPrettier(count:number): string {
    if (count < 1000) return count.toFixed(1);
    const countFormatted = parseInt(count.toFixed(1));
    const numberOfZero: number = Math.log10(countFormatted);
    const suffixCompare: number = Math.floor(numberOfZero/3);
    const shortCount: string = (countFormatted/1000**suffixCompare).toFixed(1);
    const fullRenderedCount: string = shortCount + suffixes[suffixCompare];
    return fullRenderedCount;
}