// This file initializes the task pane for the Excel add-in.
// It sets up the Office.js context and handles any UI interactions related to the task pane.

import { TESTVELIXO } from '../functions/factorialRow';

Office.onReady((info) => {
    if (info.host === Office.HostType.Excel) {
        // Initialize the task pane
        const runButton = document.getElementById("run");
        if (runButton) {
            runButton.onclick = run;
        }
    }
});

async function run() {
    try {
        await Excel.run(async (context) => {
            const n = parseInt((document.getElementById("inputN") as HTMLInputElement).value);
            const result = TESTVELIXO.FACTORIALROW(n);
            const range = context.workbook.worksheets.getActiveWorksheet().getRange("A1:A" + n);
            range.values = result.map(value => [value]);
            range.format.autofitColumns();
            await context.sync();
        });
    } catch (error) {
        console.error(error);
    }
}