# Datagrid Project

This is a React + TypeScript project that implements a dynamic, reusable datagrid component. The table includes functionalities such as row selection, "Select All" functionality with an indeterminate state, and a download button for selected rows with an "Available" status.

## Features

1. **Dynamic Row Selection**:

   - Individual row selection with checkboxes.
   - "Select All" checkbox with indeterminate state.
   - Label indicating the number of selected rows (e.g., "None Selected", "2 Selected").

2. **Conditional Download**:

   - Only rows with the "Available" status can be downloaded.
   - "Download Selected" button is enabled only when all selected rows are "Available".

3. **Reusable Components**:

   - Modular architecture with reusable components such as `Checkbox`, `TableHeader`, and `TableRow`.

4. **Custom Hooks and Utilities**:
   - Custom `useSelection` hook to manage selection state.
   - Utility functions for managing selection logic and status validation.

---

## Project Structure

```
src/
├── components/
│   ├── Checkbox/
│   │   ├── Checkbox.tsx
│   │   ├── Checkbox.css
│   ├── DataGrid/
│   │   ├── DataGrid.tsx
│   │   ├── DataGrid.css
│   ├── Table/
│   │   ├── TableHeader.tsx
│   │   ├── TableRow.tsx
│   │   ├── Table.css
├── hooks/
│   ├── useSelection.ts
├── utils/
│   ├── helpers.ts
├── data/
│   ├── filesData.ts
├── App.tsx
├── index.tsx
```

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Steps to Run the Project Locally

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd datagrid-project
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:5173` to see the app.

4. **Build for Production**:
   To create a production build, run:

   ```bash
   npm run build
   ```

5. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

---

## Sample Data

The table uses the following sample data, located in `src/data/filesData.ts`:

```typescript
export const filesData = [
  {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled'
  },
  {
    name: 'netsh.exe',
    device: 'Targaryen',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
    status: 'available'
  },
  {
    name: 'uxtheme.dll',
    device: 'Lannister',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
    status: 'available'
  },
  {
    name: 'cryptbase.dll',
    device: 'Martell',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
    status: 'scheduled'
  },
  {
    name: '7za.exe',
    device: 'Baratheon',
    path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
    status: 'scheduled'
  }
]
```

---

## Key Functionalities

1. **"Select All" Checkbox**:

   - Selects or deselects all rows.
   - Handles intermediate state when some rows are selected.

2. **Dynamic Download Button**:

   - Enabled only if all selected rows have the "Available" status.
   - Clicking the button shows an alert with the selected rows' data in JSON format.

3. **Status Indicator**:
   - Green dot displayed for rows with "Available" status.

---

## Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Runs the app in development mode.      |
| `npm run build`   | Builds the app for production.         |
| `npm run preview` | Previews the production build locally. |

---

## Deployment

This project can be easily deployed using [Vercel](https://vercel.com/). Follow these steps:

1. Push your code to a GitHub repository.
2. Go to Vercel and connect your repository.
3. Deploy the app using Vercel's interface.
4. Share the deployment link.

---

## Example Usage

1. Start by selecting rows from the datagrid.
2. Use the "Select All" checkbox to select/deselect all rows.
3. View the "Download Selected" button state dynamically change based on row selection.
4. Click "Download Selected" to see the selected rows' data in an alert box.

---

## Additional Notes

- No third-party libraries were used for the datagrid or input components.
- Styling is minimal and written in plain CSS.

---

## Author

Created as part of a coding challenge. Designed with clean architecture, modular components, and reusable hooks for scalability and maintainability.
