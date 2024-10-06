/* Importing necessary files, module, method etc. */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Importing styles */
import "./index.css";

/* Importing Components */
import App from "./App.jsx";

/* Importing Context Provider */
import { CurrentApartmentsContextProvider } from "./context/CurrentApartmentContext.jsx";
import { ApartmentsContextProvider } from "./context/ApartmentContext.jsx";
import { ApartmentsCountContextProvider } from "./context/ApartmentsCountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApartmentsContextProvider>
      <CurrentApartmentsContextProvider>
        <ApartmentsCountContextProvider>
          <App />
        </ApartmentsCountContextProvider>
      </CurrentApartmentsContextProvider>
    </ApartmentsContextProvider>
  </StrictMode>
);
