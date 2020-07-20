# Campus Discuss: Mobile app

#### (Work in progress)

This is the repository for the mobile app of Campus Discuss. To start the development server for this app:

### Running the app

1. On the terminal, `cd` into the project folder and run `yarn start`. This starts the Metro app bundler on your browser.

2. Enable developer mode on your phone :)

3. Download the Expo app on your phone and use it to scan the QR code shown in the Metro bundler. The app should start on your phone, hopefully with live reloading.

### TypeScript

The codebase uses TypeScript for type-checking.

- Types for objects like streams, posts, etc that are fetched from the server are in `types/index.d.ts`. These types can be used throughout the codebase without having to explicitly import them.

- If your component uses JSX syntax, name your file as `*.tsx`. Otherwise, name it as `*.ts`.

- Reusable components should be added in `ui/` folder, while components that represent screens of the app should be added in `ui/screens/`.

- I've added a very basic sample component at `ui/sample-counter.tsx`. Have a look at that to get an idea of what React components look like in TypeScript.
