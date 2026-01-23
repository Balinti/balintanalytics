import { useState } from 'react'
import '../styles/pages.css'

const BLOG_POSTS = [
  {
    id: 1,
    title: "Acing a Perfect A/B Test: Mastering the Art of an Experiment",
    author: "Edoe Balint",
    date: "Aug 27, 2023",
    readTime: "5 min read",
    category: "A/B Testing",
    excerpt: "Achieving an impeccable setup and steering clear of typical pitfalls during the execution of an online experiment.",
    content: `If you have previously conducted an AB test, you are likely familiar with the frustration that can arise from not witnessing the anticipated outcomes, observing no discernible differences between the variants, or persistently continuing the test in hopes of achieving the desired results to no avail.

Having conducted over 500 experiments, we are here to impart the best practices that rely on straightforward reasoning. Additionally, by ensuring that you have these practical demonstrations, you can reduce the reliance on complex scientific explanations.

**Key Factors for Reaching Conclusions:**

• **User Base** - A larger user base enables us to draw conclusions more quickly.
• **Expected outcome** - A greater difference in the expected outcome will enable us to observe a significant impact sooner.
• **Duration** - A longer experiment duration increases the likelihood of establishing differentiation between the variants.
• **Standard deviation** - If the daily fluctuations of the KPIs we wish to measure are minimal, even a small expected change can lead to conclusive results.

**Best Practice for Experiment Runtime:**

Considering these factors, it is crucial to establish duration expectations prior to commencing the experiment. Falling into the common trap of anticipating a particular change, not observing it, and subsequently extending the duration should be avoided.

**The Most Important Point:**

The true question we need to ask: For any additional data point we collect, is it gaining confidence towards concluding or are we keeping the same trend? Usually you can predict what is going to happen based on what you have collected thus far.

Our primary attention should be directed at the business objective rather than getting caught up in the analytical aspect. If we ascertain that our experimental concepts were either detrimental or unhelpful to the business, and this realization takes a considerable amount of time, what would be the outcome?

**How to Save Data Collections by Looking at Dx ARPU:**

Instead of looking at the end goal, we look at all the components towards the goal. For instance, we are running a pricing experiment for 3 weeks. Who will win? The variant with the highest d21 ARPU. But instead of looking at this data point, we will have a look at all the curve prior to d21 ARPU metric.

**Key Learnings from Variant Analysis:**

• For Variant 1, time is not helping nor hurting the spread from control but it is solid
• For Variant 2, the time is not helping the test and therefore gaining more data points will probably won't help in concluding
• For Variant 3, time is helping the spread and the data is already solid for concluding

**Important Additional Points:**

• If we are limited with volume, it might be better to take only one variant at a time
• When things are solid at the early beginning, there is no point to keep the experiment running
• We should follow what we see to conclude and not based on a model
• Outliers: Consider eliminating the biggest customers from the test to make sure one outlier was not skewing the results`
  },
  {
    id: 2,
    title: "ROAS (Return On Ad Spend) is the True and Only King!",
    author: "Edoe Balint",
    date: "Jul 11, 2023",
    readTime: "3 min read",
    category: "Marketing Analytics",
    excerpt: "Understanding Return On Ad Spend and why it matters for your marketing strategy in the modern era of user acquisition.",
    content: `In the past, user acquisition teams were relying on metrics such as conversion rates or overall traffic. These days are gone. Also, in hindsight it can be deceptive. For instance, it may be more profitable to focus on identifying an individual huge customer, rather than 1000 small ones, or even 100,000 'empty' users who have visited your digital product but have not yet paid a single cent.

If someone argues that traffic will eventually result in generating revenue through the viral effect, we would respond by stating a simple fact: just as a friend refers similar friends, a revenue generator will attract more revenue generators. Conversely, empty installs may lead to more empty installs.

**Key ROAS Principles:**

At a glance, on paid marketing (no matter what is the source or which layer), we would like to make sure on each dollar we will invest:

• It will mature into ROAS positive eventually
• We will get a clear recoup (payback) window
• Conclude this ASAP so if it won't work we can stop the spend and revise it into something more profitable
• We will be able to drill down as much as possible while maintaining workable margins of error

**Factors That Impact Model Accuracy:**

• The more historical data we have collected on a specific source, the less we will be dependent on the power curve model
• The higher the spend ($100k spend a day will usually bring more traffic than $10k a day)
• The stronger the early signal (the time it takes a potential customer to respond to an ad and generate revenue)
• Lower variance (similar ROAS curves between 2 cohorts from the same source)

**ROAS Curve Analysis:**

We can generate a ROAS curve setting 100 percent as our initial spend. The ROAS curve is not linear but is very similar to a power curve. We can mathematically extract the power coefficients:

ROAS % = b × (Days Since Start)^c

Through this method, we can identify the profitability of each source at an early stage. With more data, we can reduce our reliance on the power curve model and shift the weight of our predictions towards the multipliers.

**Measuring Alternatives to Paid Marketing:**

For instance, if we are able to tag the potential customers that were coming from a specific sponsorship (like influencers) by giving them a token for faster adoption, it will normalize it to an apple to apple ROAS comparison.

Best measurable commission model with influencers might be based only on revenue share. This way you won't have the risk of paying them to bring empty traffic to your website and they will see the benefits only after they bring some valuable creators onboard.`
  }
]

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null)

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

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
          <div className="blog-list">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-article">
                <div className="blog-article-header">
                  <span className="blog-category">{post.category}</span>
                  <div className="blog-meta">
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>

                {expandedPost === post.id && (
                  <div className="blog-full-content">
                    {post.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return <h3 key={index}>{paragraph.replace(/\*\*/g, '')}</h3>
                      }
                      if (paragraph.startsWith('•')) {
                        return (
                          <ul key={index}>
                            {paragraph.split('\n').map((item, i) => (
                              <li key={i}>{item.replace('• ', '').replace(/\*\*/g, '')}</li>
                            ))}
                          </ul>
                        )
                      }
                      return <p key={index}>{paragraph.replace(/\*\*/g, '')}</p>
                    })}
                  </div>
                )}

                <button
                  className="read-more-btn"
                  onClick={() => togglePost(post.id)}
                >
                  {expandedPost === post.id ? 'Show Less' : 'Read More'} →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
