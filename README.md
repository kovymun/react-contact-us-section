## Responsive Healthcare Contact & Appointment UI (React + TypeScript + Tailwind CSS)

![React](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Table of Contents:

- [Description and Purpose](#description-and-purpose)
- [Disclaimer](#disclaimer)
- [Key Features](#key-features)
- [Tools and Programming Languages Used](#tools-and-programming-languages-used)
- [Installation Guide](#installation-guide)
- [Usage Guide](#usage-guide)
- [Performance](#performance)
- [Credits Section](#credits-section)

### Description and Purpose

This is a small **front-end** project built using **React**, **TypeScript**, and **Tailwind CSS**, designed to simulate a functional **Contact Us section** for a fictional medical centre - **Riverside Medical Centre**. It showcases **essential front-end development skills** commonly used in real-world applications, delivering a **clean**, **responsive**, and **interactive** user interface. The project mimics a real world user experience that could easily be part of a modern healthcare provider's website, offering both contact information and a seamless way for patients to request appointments online.

### Disclaimer

All names, addresses, locations, and contact details used in this project, such as _Riverside Medical Centre_ and the names of _medical practitioners_, are entirely fictional and intended solely for demonstration purposes to showcase how a healthcare contact section might appear. Any resemblance to real individuals, clinics, centres, or organizations is purely coincidental.

### Key features

- Modern front-end development stack.
- Fully responsive design across all screen sizes.
- Clean and intuitive user experience.
- Interactive appointment scheduling modal.
- Client-side form validation.
- Efficient event handling with delegation.
- Real-time user feedback via toast notifications.

### Tools and Programming languages used

- React.js, TypeScript, and Vite (for scaffolding and development).
- Tailwind CSS: Utility first CSS framework for rapid UI styling.
- DaisyUI: A component library built on top of Tailwind CSS, used for the modal and UI enhancements.

#### Additional Libraries:

- **React Hook Form** - Handles form state and provides client-side validation for required fields and input formats.
- **React Hot Toast** - Provides feedback to users via toast notifications after form submission (success or error messages).

#### Other:

- Code Editor / IDE: I would recommend using Microsoft Visual Studio code (VS Code) as your preferred code editor / IDE to explore this project. If you do not have VS Code installed and require assistance with downloading and installation, please refer to this guide: https://code.visualstudio.com/docs/setup/setup-overview

### Installation Guide

Follow these steps to set up the project on your local machine:

#### Pre-requisites:

- Node.js (v18 or later), which includes npm by default. **LINK**: https://nodejs.org/en

#### Steps:

1. **Clone the repository:** Open your terminal and run: git clone https://github.com/kovymun/react-contact-us-section.git
2. **Navigate into the project directory:** cd `<directory-name>`
3. **Open the project in Visual Studio Code:** Once you're inside the project folder, open it in VS Code by running code .
4. **Install dependencies:** npm install
5. **Start the development server:** npm run dev
6. The project should now be running locally at localhost:5173

### Usage Guide

Follow the steps below to interact with the application:

1. **Start the application:** Follow the steps outlined in the Installation guide to run the project on your local machine.
2. **Explore the Contact Us Section:** Once the app loads, you'll be presented with a responsive **Contact Us** section for the fictional **Riverside Medical Centre**. This section provides contact details such as _opening hours_, _phone numbers_, _email address_, and _physical location_.
3. **Request an Appointment:** If the user wishes to book an appointment, they can click the **Request Appointment** button.
4. **Fill in the Appointment Form:** A modal will appear containing an **appointment booking form**, where the user can enter their _contact information_, _preferred appointment date and time_, the _medical practitioner_ they would like to see, and the _reason for the visit_. **Form validation** ensures that required fields are correctly filled out before submission.
5. **Submit the Form:** After completing the form, the user can click the **Schedule Appointment** button. A toast notification will confirm successful submission.
6. **View Output:** For demonstration purposes, the submitted appointment details will be printed as a JavaScript object in the browser's console.

![Image](https://github.com/user-attachments/assets/4616723a-6ba5-4398-b9c0-afe767471cbc)

![Image](https://github.com/user-attachments/assets/81e0f796-f09d-43d1-9b93-5dd3a5d47c7a)

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

### Credits Section:

Sole contributor to this project.
