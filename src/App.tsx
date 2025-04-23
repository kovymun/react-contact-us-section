import "./index.css";
import ContactUs from "./components/ContactUs";
import { mediCentreDB } from "./data/medi-centre-db";

function App() {
  return (
    <main>
      <ContactUs data={mediCentreDB} />
    </main>
  );
}

export default App;
