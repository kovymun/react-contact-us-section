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

<img width="338" alt="Image" src="https://github.com/user-attachments/assets/e845a54e-d20e-4555-8e3d-37e46b0da0c8" />

Optimization Areas Identified: While initial scores were strong, **Best Practices** and **SEO** had room for improvement:

### Optimization Efforts:

1. **Best Practices:** Fixed all console errors and warnings to ensure a clean browser console and improve Lighthouse score.

2. **SEO:**

- Added a meta description tag to improve search engine visibility.
- Included a robots.txt file to guide search engine crawlers and enhance indexing behavior.
- These changes improved the SEO score from 90% to 100%.

### Post Optimization Scores

<img width="323" alt="Image" src="https://github.com/user-attachments/assets/e5935ba2-4013-4928-81f6-559a94eb50ca" />

Score Improvements Summary:

| Metric         | Before | After |
| -------------- | ------ | ----- |
| Performance    | 100%   | 100%  |
| Accessibility  | 100%   | 100%  |
| Best Practices | 96%    | 100%  |
| SEO            | 90%    | 100%  |
