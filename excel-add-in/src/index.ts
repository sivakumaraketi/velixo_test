
Office.onReady((info) => {
    if (info.host === Office.HostType.Excel) {
        Excel.run(async (context: Excel.RequestContext) => {
            const sheet = context.workbook.worksheets.getActiveWorksheet();
            sheet.getRange("A1").values = [[`=TESTVELIXO.FACTORIALROW(5)`]];
            await context.sync();
});
    }
});
