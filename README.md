## Responsive Healthcare Contact & Appointment UI (React + TypeScript + Tailwind CSS)

> This micro project serves as a ready-to-use template for building a responsive Contact & Appointment section on the React platform. Rather than being part of a larger application, it is intentionally scoped to a single component, allowing developers to study, reuse, and adapt it without the complexity of a full project setup. Built with React.js, TypeScript, and Tailwind CSS, it demonstrates core React concepts including component architecture, scoped styling, and performance conscious development in a focused and digestible way. It showcases **essential front-end development skills** commonly used in real-world applications, delivering a **clean**, **responsive**, and **interactive** user interface. The project mimics a real world user experience that could easily be part of a modern healthcare provider's website, offering both contact information and a seamless way for patients to request appointments online.

---

### Table of Contents:

- [Preview](#preview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage Guide](#usage-guide)
- [Tools and Programming Languages Used](#tools-and-programming-languages-used)
- [Key Features](#key-features)
- [Performance](#performance)
- [Disclaimer](#disclaimer)
- [License](#license)
- [Credits Section](#credits-section)

---

### Preview

<img width="1920" height="2074" alt="Riverside Medical Clinic Contact Us" src="https://github.com/user-attachments/assets/1cdba1e9-d8c7-4620-8651-f7fa6483749b" />

---

### Getting Started

#### Prerequisites

- Node.js `v18+`
- npm or pnpm

#### Installation

1. Clone the repo: `git clone https://github.com/kovymun/react-contact-us-section.git`
2. Navigate into the project: `cd react-contact-section`
3. Install dependencies: `npm install` OR `npm i`
4. Start development server: `npm run dev`
5. Build for Production: `npm run build`
6. Preview Production Build: `npm run preview`

#### Usage Guide

Follow the steps below to interact with the application:

1. **Start the application:** Follow the steps outlined in the Installation guide to run the project.
2. **Explore the Contact Us Section:** This section provides contact details such as _opening hours_, _phone numbers_, _email address_, and _physical location_.
3. **Request an Appointment:** If the user wishes to book an appointment.
4. **Fill in the Appointment Form:** User can enter their appointment information. **Form validation** ensures that required fields are correctly filled out before submission.
5. **Submit the Form:** After completing the form, the user can click the **Request Secure Appointment** button. A toast notification will confirm successful submission.
6. **View Output:** For demo purposes, the submitted appointment details will be printed as a JavaScript object in the browser's console.

---

### Tools and Programming languages used

![React](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white) ![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF4154?style=for-the-badge&logo=react&logoColor=white)

#### Other:

- Code Editor / IDE: I would recommend using **Microsoft Visual Studio Code (VS Code)** as your preferred code editor / IDE to explore this project. If you do not have VS Code installed and require assistance with downloading and installation, please refer to this guide: https://code.visualstudio.com/docs/setup/setup-overview

---

### Key features

- Modern front-end development stack.
- Fully responsive design across all screen sizes.
- Clean and intuitive user experience.
- Interactive appointment scheduling modal.
- Client-side form validation.
- Efficient event handling with delegation.
- Real-time user feedback via toast notifications.

---

### Performance

This project's performance is evaluated using **Google Lighthouse**, run locally on the _localhost_ URL to simulate how the app would behave in a production environment.

**Google Lighthouse** is an open-source tool from Google that audits a web or mobile application's performance. It helps developers identify issues and improve the overall quality of their apps.

To test and preview the app performance:

1. Navigate to your project's root directory.
2. Open your preferred terminal or the integrated terminal in VS Code.
3. Run npm run build - this compiles the app and generates a production ready version in the **dist** folder.
4. Run npx serve dist - this serves the built app locally, usually at http://localhost:3000, allowing Google Lighthouse to analyze it as if it were deployed.
5. Open your browser and visit http://localhost:3000 to view the app.

Run Google Lighthouse:

1. In Google Chrome, open browser DevTools.
2. Go to the Lighthouse tab. If the Lighthouse Chrome extension isn’t installed, you can grab it here: https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1
3. Choose the categories you want to test (Performance, Accessibility, SEO, etc.).
4. Click **Analyze page load** to generate your Lighthouse report.

This workflow ensures performance testing reflects a real world scenario, helping identify areas for optimization before deployment.

#### Initial Performance Score:

<img width="338" alt="Image" src="https://github.com/user-attachments/assets/17fe3098-48da-4f81-b35a-bc7ae115feb2" />

**Optimization Areas Identified**: While initial scores were strong, **Best Practices** and **SEO** had room for improvement:

#### Optimization Efforts:

1. **Best Practices:** Fixed all console errors and warnings to ensure a clean browser console and improve Lighthouse score.

2. **SEO:**

- Added a meta description tag to improve search engine visibility.
- Included a robots.txt file to guide search engine crawlers and enhance indexing behavior.
- These actions improved the SEO score significantly, boosting it from 90% to 100%

#### Post Optimization Scores

<img width="323" alt="Image" src="https://github.com/user-attachments/assets/550f2bf0-e5fb-4739-9877-08e4e786e4ef" />

Score Improvements Summary:

| Metric         | Before | After |
| -------------- | ------ | ----- |
| Performance    | 100%   | 100%  |
| Accessibility  | 100%   | 100%  |
| Best Practices | 96%    | 100%  |
| SEO            | 90%    | 100%  |

---

### Disclaimer

All names, addresses, locations, and contact details used in this project, such as _Riverside Medical Centre_ and the names of _medical practitioners_, are entirely fictional and intended solely for demonstration purposes to showcase how a healthcare contact section might appear. Any resemblance to real individuals, clinics, centres, or organizations is purely coincidental.

---

### License

MIT: free to use, adapt, and build upon.

---

### Credits Section:

Sole contributor to this project.
