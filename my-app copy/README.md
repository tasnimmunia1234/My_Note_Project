# React + TypeScript + Vite
# Personal Notes App

A simple notes app built with React+Vite, TypeScript, and TailwindCSS.  
This app lets you create, edit, delete, and save notes in local storage.

## Project Setup
Please follow the setup steps below to run the project:
### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) (version 16 or higher)
- Install npm (comes with Node)

### 2. Clone the repo
```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```
### 3. Install dependencies
- npm install

### 4. Run the project
- npm run dev

## Technologies Used
- **Framework / Library:** React, TypeScript  
- **Styling:** TailwindCSS  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Storage:** Browser Local Storage  
- **Build Tool / Package Manager:** Vite, npm  


## Key Features:
- Add new notes with title, description, and types
- Edit and delete existing notes
- Notes persist using local storage
- Responsive layout for mobile, tablet, and desktop

## Project Structure :
src/
 ├── components/
 │    ├── NoteForm.tsx      # Form for creating/editing notes
 │    ├── NoteList.tsx      # Display list of notes
 │    └── NoteItem.tsx      # Single note card
 ├── App.tsx                # Main entry point (contains main folder content)
 ├── Header.tsx             # Main header component
 └── types.ts               # Type definitions


## Project Interface Screenshot
- Screenshot of the project interface showing the notes creation, editing, and listing features.
  Note Crete :<img width="1339" height="394" alt="Create note" src="https://github.com/user- 
   attachments/assets/a00a6f86-f5fd-4a0d-ac1b-9a863ce731de" />

  Editing: <img width="1398" height="687" alt="Editing note" src="https://github.com/user- 
   attachments/assets/68d09903-503e-4068-9150-dad1082d5ca0" />

  Listing: <img width="1349" height="738" alt="Listed note" src="https://github.com/user- 
     attachments/assets/fb87783b-f916-42f2-b83d-87f71f0255ea" />


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
