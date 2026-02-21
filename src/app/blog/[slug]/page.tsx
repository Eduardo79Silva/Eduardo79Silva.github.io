import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Eduardo Silva`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mb-6">
              <time dateTime={post.date}>
                {format(new Date(post.date), "MMMM dd, yyyy")}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
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
          <div
            className="prose prose-lg prose-invert
  prose-headings:text-text-primary
  prose-lead:text-text-secondary
  prose-p:text-text-secondary prose-p:mb-6 prose-p:leading-relaxed
  prose-li:mb-2 prose-ul:my-6 prose-ol:my-6
  prose-blockquote:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-accent/50
  prose-h1:mb-8 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mb-4
  prose-code:before:content-none prose-code:after:content-none
  prose-code:text-accent prose-code:bg-bg-card/80 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
  prose-pre:bg-bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto
  prose-a:text-accent prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-accent/50
  prose-strong:text-text-primary prose-strong:font-semibold
  prose-img:rounded-lg prose-img:shadow-lg prose-img:my-4
  max-w-none"
          >
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [
                    rehypeSlug,
                    rehypeKatex,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  ],
                },
              }}
            />
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <a
                href="/blog"
                className="text-accent hover:text-accent-secondary transition-colors"
              >
                ← Back to all posts
              </a>
              <a
                href="/contact"
                className="px-6 py-2 bg-accent hover:bg-accent-secondary rounded-full transition-colors"
              >
                Get in touch
              </a>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
