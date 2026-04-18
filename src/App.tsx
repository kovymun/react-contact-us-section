import "./index.css";
// import ContactUs from "./components/ContactUs";
// import { mediCentreDB } from "./data/medi-centre-db";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import ContactSect from "./components/ContactSect";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    /* UI Re-design */
    <main className="min-h-screen">
      <Nav />
      <Intro />
      <ContactSect />
      <Footer />
      <Toaster position="top-right" />
    </main>
    /* Previous Implementation */
    // <main>
    //   <ContactUs data={mediCentreDB} />
    //   <Form />
    //   <Toaster position="top-right" />
    // </main>
  );
}

export default App;
