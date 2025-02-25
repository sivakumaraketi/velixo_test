// This file defines command functions that can be triggered from the task pane or ribbon.
// It may include functions to interact with the Excel workbook.

import { TESTVELIXO } from '../functions/factorialRow';

export async function runFactorialRowCommand(n: number): Promise<void> {
    try {
        const result = TESTVELIXO.FACTORIALROW(n);
        await Excel.run(async (context: Excel.RequestContext) => {
            const range = context.workbook.getSelectedRange();
            range.values = [result];
            range.formulas = [[`=TESTVELIXO.FACTORIALROW(${n})`]];
            await context.sync();
        });
    } catch (error) {
        console.error(error);
    }
}