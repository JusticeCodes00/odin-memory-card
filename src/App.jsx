import "./styles/App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <CardContainer />
      </main>
      <Footer />
    </div>
  );
}
