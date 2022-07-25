import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./context/CarContext";
import { ColorProvider } from "./context/ColorContext";
import { BrandProvider } from "./context/BrandContext";
import { RentalProvider } from "./context/RentalContext";
import { FilterProvider } from "./context/FilterContext";
import { UserProvider } from "./context/UserContext";
import { CreditCardProvider } from "./context/CreditCardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CarProvider>
      <ColorProvider>
        <BrandProvider>
          <RentalProvider>
            <FilterProvider>
              <UserProvider>
                <CreditCardProvider>
                  <App />
                </CreditCardProvider>
              </UserProvider>
            </FilterProvider>
          </RentalProvider>
        </BrandProvider>
      </ColorProvider>
    </CarProvider>
  </BrowserRouter>
);
