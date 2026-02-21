import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Eduardo Silva',
  description: 'Technical blog about neurotechnology, brain-computer interfaces, and computational neuroscience.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-text-primary">
            Blog
          </h1>
          <p className="text-text-secondary text-xl mb-12">
            Technical posts about neurotechnology, brain-computer interfaces, and my journey into computational neuroscience.
          </p>

          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">Featured</h2>
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="bg-bg-card rounded-2xl p-8 hover:bg-accent transition-all group cursor-pointer mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-accent text-text-primary rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                      <time className="text-text-secondary text-sm">
                        {format(new Date(post.date), 'MMM dd, yyyy')}
                      </time>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-text-primary text-text-primary">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary text-lg mb-4 group-hover:text-text-primary">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-bg-primary group-hover:bg-bg-card text-text-secondary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary group-hover:text-text-primary">
                      <span>{post.readingTime}</span>
                      <span>→ Read more</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-6 text-text-primary">All Posts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {regularPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="bg-bg-card rounded-2xl p-6 hover:bg-accent transition-all group cursor-pointer h-full flex flex-col">
                    <time className="text-text-secondary text-sm mb-2">
                      {format(new Date(post.date), 'MMM dd, yyyy')}
                    </time>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-text-primary text-text-primary">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary mb-4 group-hover:text-text-primary flex-grow">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-bg-primary text-text-secondary rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary group-hover:text-text-primary">
                        {post.readingTime}
                      </span>
                      <span className="text-accent group-hover:text-text-primary">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
