import "./index.css";
import ContactUs from "./components/ContactUs";
import { mediCentreDB } from "./data/medi-centre-db";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <ContactUs data={mediCentreDB} />
      <Toaster position="top-right" />
    </main>
  );
}

export default App;
