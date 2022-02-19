import "./style/components/App.css";
import AnthonyPortfolioSite from "./AnthonyPortfolioSite";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <AnthonyPortfolioSite />
      </div>
    </HelmetProvider>
  );
}

export default App;
