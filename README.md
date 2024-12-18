# Property Listing App

This is a property listing web application built using Vite + React. The app allows users to view property listings, providing an intuitive and responsive interface. It is powered by a mock backend server for demonstration purposes.

## Features

- Property Listings: Display a list of properties with relevant details like images, prices, and address.
- Responsive Design: Optimized for use on desktop, tablet, and mobile devices.

## Tech Stack

- Frontend: React with Vite as the build tool
- Backend: Mock backend server for API simulation
- Styling: Tailwind CSS

## Installation

1. Clone the repository:
   git clone https://github.com/manugee95/property-listing-frontend.git

2. Install dependencies:
   npm install

3. Run the application:
   - To run the frontend development server:
     npm run dev
     
   - To run the mock backend server:
     npm run server
   
   - To run both the frontend and backend concurrently:
     npm run start
     
     The `npm run start` command uses [concurrently](https://www.npmjs.com/package/concurrently) to run both servers simultaneously. Ensure that all configurations are correctly set in the `package.json` scripts section.

4. Access the application:
   Open your browser and navigate to `http://localhost:5173` (default Vite development server port).

## Mock Backend

The application uses a mock backend server for demonstration purposes. Ensure the mock server is running while using the application.

### Mock Server Setup

If additional steps are required to start the mock server (e.g., running `json-server`):
json-server --watch db.json --port 3000

Ensure the API endpoints in the app match the mock server's configuration.

## Scripts

- Start the frontend development server:
  npm run dev

- Start the mock backend server:
  npm run server

- Start both servers concurrently:
  npm run start

- Build for production:
  npm run build

## Dependencies

- React
- Vite
- json-server (for mock backend)
- concurrently (for running frontend and backend simultaneously)
- Tailwind CSS

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to use and customize this application as needed. Happy coding!

