import Home from "./pages/Home";
import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";

const fromEmail = import.meta.env.VITE_FROM_EMAIL;

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <p>{fromEmail}</p>
      <Footer />
    </>
  );
}
