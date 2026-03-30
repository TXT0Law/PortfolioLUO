/**
 * Blog posts data - add new posts here
 * Each post needs: id, title, date, excerpt, content
 * Optional: images - array of { src, alt, caption? }
 *
 * How to add images:
 * 1. Put your images in src/assets/blog/
 * 2. Import: import myImage from '../assets/blog/your-image.png';
 * 3. Add to post: images: [{ src: myImage, alt: 'Description', caption: 'Optional caption' }]
 *
 * Image size options:
 * - size: 'small' | 'medium' | 'large' (preset max-width)
 * - maxWidth: 400 or '50%' (custom)
 * - width: 300 or '200px' (fixed width)
 */

import myIcon from '../assets/myicon.jpg';
import ObriCheckImg from '../assets/ObriCheck.png';

export const blogPosts = [
    {
        id: '1',
        title: 'My First Blog',
        date: 'Mar 2026',
        excerpt: 'Welcome everyone. I will keep sharing updates on cybersecurity, software development, and more.',
        content: `This is my first blog. Welcome everyone to read!

I will continue to update with more information and insights. Feel free to reach out and connect with me to exchange ideas on cybersecurity, software development, and related topics.
`,
        images: [
            { src: myIcon, alt: 'Profile', size: 'small' }
        ]
    },
    {
        id: '2',
        title: 'Building OrbiCheck — An OSINT Web Security Platform',
        date: 'Mar 2026',
        excerpt: 'A deep dive into how I built OrbiCheck, a full-stack website security assessment platform with 30+ automated reconnaissance modules.',
        content: `OrbiCheck is an external-perspective website security assessment platform I developed from the ground up. Give it a URL, and it returns a comprehensive reconnaissance report covering IP, DNS, SSL/TLS, HTTP headers, tech stack, threat intelligence, and 30+ more modules — all from an outsider's point of view. The project is open-source and available on GitHub: https://github.com/TXT0Law/OrbiCheck

The idea came from a simple question: how much can you learn about a website without ever logging in? During my studies in cybersecurity, I noticed that most security tools were either too fragmented (one tool per check) or too expensive for individual use. I wanted a single platform that could run a full OSINT sweep with one click and present the results in a clean, actionable dashboard.

The architecture follows a three-service design. The frontend is built with Next.js 14 (App Router), React 18, and TypeScript, styled with Tailwind CSS and shadcn/ui components. The backend API is powered by Python FastAPI with SQLAlchemy (async) and Pydantic for data validation, backed by PostgreSQL for persistence and Redis for caching and task brokering. The third piece is a dedicated Node.js Scan Service running Express, which wraps all 30+ OSINT modules and is called exclusively by the backend via HTTP.

One of the biggest technical challenges was handling real-time scan progress. Each scan triggers dozens of independent modules — IP geolocation, DNS records, WHOIS lookup, certificate chain analysis, WAF detection, tech stack fingerprinting, and more. I implemented Server-Sent Events (SSE) so the frontend receives live updates as each module completes, giving users immediate visual feedback through a module grid with progress indicators.

The scan modules are organized into six categories: Network (IP, DNS, WHOIS, traceroute, open ports), SSL/TLS (certificate chains, cipher suites, protocol versions), Security (HTTP headers, HSTS, DNSSEC, WAF detection, security.txt), Content (cookies, robots.txt, sitemap, linked pages), Threat Intel (malware/phishing detection, blocklist lookups), and Site Profile (tech stack via Wappalyzer, social tags, quality metrics, screenshots). Each module runs independently and reports results back to the backend, which aggregates them into an automated risk analysis with severity scoring.

Beyond one-off scans, I built a Continuous Monitoring system using Celery workers. Users can track uptime, content changes, SSL certificate expiry, and even visual diffs over time. The alerting system supports configurable thresholds and delivery channels, sending notifications when something changes or breaks.

Testing was a priority from day one. The project uses Vitest for frontend unit tests, pytest for backend unit/integration/e2e tests, Jest for the scan service modules, and Playwright for end-to-end browser testing across the full stack. CI runs all test suites through GitHub Actions on every push.

Building OrbiCheck taught me a great deal about full-stack architecture at scale — managing async Python services, orchestrating dozens of concurrent network probes, designing real-time streaming APIs, and building a polished UI that makes complex security data accessible. It reinforced my belief that security tools should be open, transparent, and easy to use.

If you are interested, feel free to check out the source code and try it out. Contributions and feedback are always welcome.`,
        images: [
            { src: ObriCheckImg, alt: 'OrbiCheck Dashboard', size: 'large' }
        ]
    },
];

export const getBlogById = (id) => blogPosts.find((post) => post.id === id);
