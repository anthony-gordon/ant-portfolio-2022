import "./style/components/App.css";
import AnthonyPortfolioSite from "./AnthonyPortfolioSite";
import { HelmetProvider } from "react-helmet-async";
import ShopProvider from "./context/shopContext";
import LayoutProvider from "./context/layoutContext";

function App() {
  return (
    <HelmetProvider>
      <ShopProvider>
        <div className="App">
          <LayoutProvider>
            <AnthonyPortfolioSite />
          </LayoutProvider>
        </div>
      </ShopProvider>
    </HelmetProvider>
  );
}

export default App;
