import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { blogPosts } from '../blogs/blogData';

// GamePack - link to GitHub repo (static, rarely changes)
const GAMEPACK_GITHUB_URL = 'https://github.com/TXT0Law';
// Writeups - link to GitHub repo (static, rarely changes)
const WRITEUP_GITHUB_URL = 'https://github.com/TXT0Law';

const BLOGS_PER_PAGE = 6;

const SectionCTF = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / BLOGS_PER_PAGE);
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const displayedBlogs = blogPosts.slice(startIndex, startIndex + BLOGS_PER_PAGE);

    return (
        <Parallax className='Section-CTF' strength={300}>
            <div className='section-content' id='CTF'>
                <h1 className='section-title'>Sharings</h1>

                {/* Blogs section - frequently updated */}
                <div className='subsection-block'>
                    <h2 className='subsection-title'>Blogs</h2>
                    <div className='ctf-grid blogs-grid'>
                        {blogPosts.length > 0 ? (
                            displayedBlogs.map((blog, index) => (
                                <Link
                                    to={`/blogs/${blog.id}`}
                                    key={blog.id}
                                    className='ctf-card simple-mode blog-card'
                                >
                                    <div className='ctf-header-simple'>
                                        <span className='date'>{blog.date}</span>
                                    </div>
                                    <h3>{blog.title}</h3>
                                    {blog.excerpt && <p className='blog-excerpt'>{blog.excerpt}</p>}
                                    <p className='view-writeup'>Read More &rarr;</p>
                                </Link>
                            ))
                        ) : (
                            <p className='blogs-placeholder'>Coming soon...</p>
                        )}
                    </div>
                    {totalPages > 1 && (
                        <div className='blogs-pagination'>
                            <button
                                className='pagination-btn'
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                            <span className='pagination-info'>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className='pagination-btn'
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

                {/* GamePack section - static link to GitHub */}
                <div className='subsection-block'>
                    <h2 className='subsection-title'>GamePack</h2>
                    <a
                        href={GAMEPACK_GITHUB_URL}
                        className='writeup-link-card'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className='writeup-icon'></span>
                        <h3>View GamePack on GitHub</h3>
                        <p>My game projects and assets are hosted on GitHub</p>
                        <span className='writeup-arrow'>→</span>
                    </a>
                </div>

                {/* Writeups section - static link to GitHub */}
                <div className='subsection-block'>
                    <h2 className='subsection-title'>CTF Writeups</h2>
                    <a
                        href={WRITEUP_GITHUB_URL}
                        className='writeup-link-card'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className='writeup-icon'></span>
                        <h3>View Writeups on GitHub</h3>
                        <p>All my CTF writeups are hosted on GitHub</p>
                        <span className='writeup-arrow'>→</span>
                    </a>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCTF;
