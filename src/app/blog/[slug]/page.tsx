import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Eduardo Silva`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>All Posts</span>
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors group"
            >
              <Home className="w-5 h-5" />
              <span>Portfolio</span>
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mb-6">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-bg-card text-text-secondary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none 
                          prose-headings:text-text-primary 
                          prose-p:text-text-secondary
                          prose-a:text-accent hover:prose-a:text-accent-secondary
                          prose-strong:text-text-primary
                          prose-code:text-accent prose-code:bg-bg-card prose-code:px-1 prose-code:rounded
                          prose-pre:bg-bg-card prose-pre:border prose-pre:border-border
                          prose-img:rounded-lg
                          prose-ul:text-text-secondary
                          prose-ol:text-text-secondary
                          prose-li:text-text-secondary">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [
                    rehypeSlug,
                    rehypeKatex,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
            />
          </div>

          {/* Footer Navigation */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to all posts</span>
              </Link>
              <div className="flex gap-3">
                <Link
                  href="/#contact"
                  className="px-6 py-2 bg-accent hover:bg-accent-secondary rounded-full transition-colors font-semibold"
                >
                  Get in touch
                </Link>
                <Link
                  href="/"
                  className="px-6 py-2 bg-bg-card hover:bg-accent border-2 border-accent rounded-full transition-colors font-semibold"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
