export namespace TESTVELIXO {
    export function FACTORIALROW(n: number): number[] {
        const factorial = (num: number): number => {
            if (num <= 1) return 1;
            return num * factorial(num - 1);
        };
        return Array.from({ length: n }, (_, i) => factorial(i + 1));
    }
}