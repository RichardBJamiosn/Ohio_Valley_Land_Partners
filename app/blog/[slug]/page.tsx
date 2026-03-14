import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/blog-data';
import { ArticleSchema } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.metaDescription}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
      />

      <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge>{post.category}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  month: 'long', day: 'numeric', year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
              <span className="font-medium text-foreground">Ohio Valley Land Partners</span>
            </div>
          </header>

          {/* Post body */}
          <div
            className="prose prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-8
              prose-li:text-muted-foreground prose-li:leading-7
              prose-ol:space-y-2 prose-ul:space-y-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Keywords (for SEO context, hidden visually) */}
          <div className="sr-only" aria-hidden="true">
            {post.keywords.join(', ')}
          </div>

          {/* CTA box */}
          <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Ready to Get a Cash Offer on Your Land?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              No obligation. No agent fees. We buy land across the Ohio Valley — any condition, any situation.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get My Cash Offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Prev / Next navigation */}
          {(prevPost || nextPost) && (
            <nav className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-border pt-10">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-5 hover:border-accent/50 transition-colors"
                >
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowLeft className="h-3.5 w-3.5" /> Previous
                  </span>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 text-sm">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-5 hover:border-accent/50 transition-colors text-right sm:ml-auto sm:w-full"
                >
                  <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                    Next <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 text-sm">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
