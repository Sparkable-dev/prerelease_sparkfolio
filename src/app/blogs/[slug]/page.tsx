import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { extractTOC } from "@/lib/toc";
import { BlogContent } from "@/components/BlogContent";
import { TableOfContents } from "@/components/TableOfContents";
import { Header } from "@/components/Header";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const toc = extractTOC(post.content);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 text-sm font-inter text-muted-foreground transition-colors hover:text-purple-500"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Blogs</span>
          </Link>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
              {/* Main Content */}
              <article className="min-w-0 max-w-4xl">
                {/* Post Header */}
                <header className="mb-8 pb-6 border-b border-border">
                  <h1 className="font-inter mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    {post.title}
                  </h1>
                  {post.date && (
                    <div className="flex items-center gap-2 text-sm font-inter text-muted-foreground">
                      <Calendar className="size-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  )}
                </header>

                {/* Blog Content */}
                <div className="blog-post-content">
                  <BlogContent content={post.content} />
                </div>
              </article>

              {/* Right TOC - Desktop Only */}
              <aside className="hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto">
                <TableOfContents items={toc} />
              </aside>
            </div>

            {/* Mobile TOC - Bottom of page */}
            <div className="lg:hidden mt-12">
              <TableOfContents items={toc} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | SparkFolio Blog`,
    description: post.description || post.excerpt,
  };
}
