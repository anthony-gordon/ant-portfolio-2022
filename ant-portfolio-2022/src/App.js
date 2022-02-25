import "./style/components/App.css";
import AnthonyPortfolioSite from "./AnthonyPortfolioSite";
import { HelmetProvider } from "react-helmet-async";
import ShopProvider from "./context/shopContext";

function App() {
  return (
    <HelmetProvider>
      <ShopProvider>
        <div className="App">
          <AnthonyPortfolioSite />
        </div>
      </ShopProvider>
    </HelmetProvider>
  );
}

export default App;
