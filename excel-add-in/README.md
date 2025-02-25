# Excel Add-in: Factorial Row Function

This project is an Excel add-in that implements a custom function, `FACTORIALROW`, within the `TESTVELIXO` namespace. The function calculates the factorials of numbers from 1 to N and returns them as a spill range in Excel.

## Project Structure

- **src/**
  - **functions/**: Contains the custom function implementations.
    - `factorialRow.ts`: Implements the `FACTORIALROW` function.
  - **taskpane/**: Contains the task pane logic.
    - `taskpane.ts`: Initializes the task pane and handles UI interactions.
  - **commands/**: Contains command definitions for the add-in.
    - `commands.ts`: Defines functions that can be triggered from the task pane or ribbon.
  - `index.html`: Main HTML entry point for the task pane.
  - `index.ts`: Main entry point for the TypeScript code, initializing the Office add-in.
  - **types/**: Contains TypeScript definitions for Office.js.
    - `office.d.ts`: Type definitions for the Office API.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file specifying compiler options.
- `webpack.config.js`: Configuration for Webpack to bundle the add-in.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd excel-add-in
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build the Project**
   ```bash
   npm run build
   ```

4. **Run the Add-in**
   - Open Excel and sideload the add-in to test the functionality.

## Usage

To use the `FACTORIALROW` function in Excel, enter the following formula in a cell:

```
=TESTVELIXO.FACTORIALROW(N)
```

Replace `N` with a numeric value to get the factorials from 1! to N! in a spill range.

## License

This project is licensed under the MIT License. See the LICENSE file for details.