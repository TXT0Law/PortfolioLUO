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
        title: 'Thinking',
        date: 'Mar 2026',
        excerpt: 'ThinkingThinkingThinkingThinking',
        content: `ThinkingThinkingThinkingThinking`
    },
];

export const getBlogById = (id) => blogPosts.find((post) => post.id === id);
