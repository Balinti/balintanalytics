import '../styles/pages.css'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Acing a Perfect A/B Test: Mastering the Art of an Experiment",
      date: "2024",
      views: 59,
      excerpt: "Achieving an impeccable setup and steering clear of typical pitfalls during the execution of online experiments.",
      category: "A/B Testing"
    },
    {
      id: 2,
      title: "ROAS: The True and Only King!",
      date: "2024",
      excerpt: "Understanding Return On Ad Spend and why it matters for your marketing strategy.",
      category: "Marketing Analytics"
    }
  ]

  return (
    <div className="blog">
      <section className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights, tips, and industry trends in data analytics</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-views">{post.views} views</span>
                </div>
                <a href="#" className="read-more">Read More â†’</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
