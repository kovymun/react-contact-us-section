import { footerSections } from "../data/footer";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white border-t border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-slate-500">
          <div>
            <p className="font-bold text-blue-900 mb-2">
              Riverside Medical Centre
            </p>
            <p className="leading-relaxed">© {year} Your Clinical Sanctuary.</p>
          </div>
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <p className="font-bold text-blue-900 mb-3">{title}</p>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="hover:text-amber-600 transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
