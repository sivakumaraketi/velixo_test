declare var global: any;

import { runFactorialRowCommand } from './commands';
import { TESTVELIXO } from '../functions/factorialRow';

jest.mock('../functions/factorialRow', () => ({
    TESTVELIXO: {
        FACTORIALROW: jest.fn((n: number) => Array.from({ length: n }, (_, i) => i + 1)),
    },
}));

describe('runFactorialRowCommand', () => {
    it('should execute without errors', async () => {
        // Mock the Excel.run function
        const mockExcelRun = jest.fn().mockImplementation(async (callback) => {
            const context = {
                workbook: {
                    getSelectedRange: () => ({
                        values: [],
                        formulas: [],
                        load: jest.fn(),
                    }),
                },
                sync: jest.fn(),
            };
            await callback(context);
        });

        // Replace the real Excel.run with the mock
        global.Excel = { run: mockExcelRun };

        // Call the function with a test value
        await runFactorialRowCommand(5);

        // Check that Excel.run was called
        expect(mockExcelRun).toHaveBeenCalled();

        // Check that the TESTVELIXO.FACTORIALROW function was called with the correct argument
        expect(TESTVELIXO.FACTORIALROW).toHaveBeenCalledWith(5);
    });
});