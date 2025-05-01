### Table of Contents:

- [Description and Purpose](#description-and-purpose)
- [Disclaimer](#disclaimer)
- [Key Features](#key-features)
- [Tools and Programming languages used](#tools-and-programming-languages-used)
- [Installation Guide](#installation-guide)
- [Usage guide](#usage-guide)

## Healthcare Contact & Appointment UI Component (React + TypeScript)

### Description and Purpose:

This is a small front-end project built using **React** and **TypeScript**, designed to simulate a simple yet functional **Contact Us** section for a fictional medical centre - _Riverside Medical Centre_. It mimics a real-world user experience that could easily be part of a modern healthcare provider's website, offering both contact information and an interactive way for patients to request appointments online.

### Disclaimer

All names, addresses, locations, and contact details used in this project, such as _Riverside Medical Centre_, are entirely fictional and intended solely for demonstration purposes to showcase how a healthcare contact form might appear. Any resemblance to real individuals, clinics, or organizations is purely coincidental.

## Installation Guide

Follow these steps to set up the project on your local machine:

### Pre-requisites:

- Node.js (v18 or later), which includes npm by default. LINK: https://nodejs.org/en

### Steps:

- **Clone the repository:** Open your terminal and run: git clone https://github.com/kovymun/react-contact-us-section.git
- **Navigate into the project directory:** cd `<directory-name>`
- **Install dependencies:** npm install
- **Start the development server:** npm run dev
- The project should now be running locally at localhost:5173

## Performance

This project's performance is evaluated using Google Lighthouse, run locally on the _localhost_ URL to simulate how the app would behave in a production environment.

**Google Lighthouse** is an open-source tool from Google that audits a web or mobile application's performance. It helps developers identify issues and improve the overall quality of their apps.

To test and preview the app performance:

1. Navigate to your project's root directory.
2. Open your preferred terminal or the integrated terminal in VS Code.
3. Run npm run build - this compiles the app and generates a production ready version in the **dist** folder.
4. Run npx serve dist - this serves the built app locally, ussually at http://localhost:3000, allowing Google Lighthouse to analyze it as if it were deployed.
5. Open your browser and visit http://localhost:3000 to view the app.

Run Google Lighthouse:

1. In Google Chrome, open browser DevTools.
2. Go to the Lighthouse tab. If the Lighthouse Chrome extension isn’t installed, you can grab it here: https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1
3. Choose the categories you want to test (Performance, Accessibility, SEO, etc.).
4. Click **Analyze page load** to generate your Lighthouse report.

This workflow ensures performance testing reflects a real world scenario, helping identify areas for optimization before deployment.

### Initial Performance Score:

<img width="338" alt="Image" src="https://github.com/user-attachments/assets/17fe3098-48da-4f81-b35a-bc7ae115feb2" />

**Optimization Areas Identified**: While initial scores were strong, **Best Practices** and **SEO** had room for improvement:

### Optimization Efforts:

1. **Best Practices:** Fixed all console errors and warnings to ensure a clean browser console and improve Lighthouse score.

2. **SEO:**

- Added a meta description tag to improve search engine visibility.
- Included a robots.txt file to guide search engine crawlers and enhance indexing behavior.
- These changes improved the SEO score from 90% to 100%.

### Post Optimization Scores

<img width="323" alt="Image" src="https://github.com/user-attachments/assets/550f2bf0-e5fb-4739-9877-08e4e786e4ef" />

Score Improvements Summary:

| Metric         | Before | After |
| -------------- | ------ | ----- |
| Performance    | 100%   | 100%  |
| Accessibility  | 100%   | 100%  |
| Best Practices | 96%    | 100%  |
| SEO            | 90%    | 100%  |
