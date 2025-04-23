import Home from "./pages/Home";
import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <p>{import.meta.env.VITE_API_URL}</p>
      <Footer />
    </>
  );
}
