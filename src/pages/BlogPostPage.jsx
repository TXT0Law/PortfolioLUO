import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../blogs/blogData';
import TopNavigation from '../components/topnavigation.jsx';

const BlogPostPage = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    const post = getBlogById(id);

    if (!post) {
        return (
            <>
                <TopNavigation />
                <div className="blog-post-page blog-post-not-found">
                    <h1>Blog post not found</h1>
                    <Link to="/" state={{ scrollTo: 'CTF' }}>Back to Blogs</Link>
                </div>
            </>
        );
    }

    const paragraphs = post.content
        .trim()
        .split(/\n\n+/)
        .map((p, i) => <p key={i}>{p}</p>);

    const images = post.images || [];

    return (
        <>
            <TopNavigation />
            <article className="blog-post-page">
                <div className="blog-post-container">
                <Link to="/" state={{ scrollTo: 'CTF' }} className="blog-post-back">&larr; Back to Blogs</Link>
                <header className="blog-post-header">
                    <span className="blog-post-date">{post.date}</span>
                    <h1 className="blog-post-title">{post.title}</h1>
                </header>
                <div className="blog-post-content">
                    {paragraphs}
                    {images.map((img, i) => {
                        const imgStyle = {};
                        if (img.maxWidth) imgStyle.maxWidth = typeof img.maxWidth === 'number' ? `${img.maxWidth}px` : img.maxWidth;
                        if (img.width) imgStyle.width = typeof img.width === 'number' ? `${img.width}px` : img.width;
                        const sizeClass = img.size ? `blog-post-image--${img.size}` : '';
                        return (
                            <figure key={i} className={`blog-post-image ${sizeClass}`.trim()}>
                                <img src={img.src} alt={img.alt} style={Object.keys(imgStyle).length ? imgStyle : undefined} />
                                {img.caption && <figcaption>{img.caption}</figcaption>}
                            </figure>
                        );
                    })}
                </div>
                </div>
            </article>
        </>
    );
};

export default BlogPostPage;
