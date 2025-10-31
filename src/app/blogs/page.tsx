import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/ui/blog-card";
import { Header } from "@/components/Header";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";

export const metadata = {
  title: "Blogs | SparkFolio",
  description: "Read our latest articles on brand design, strategy, and more.",
};

export default function BlogsPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-inter mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Our Blog
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg font-inter text-muted-foreground">
              Explore insights on brand design, strategy, and building memorable
              brand identities.
            </p>
          </div>

          {/* Blog Cards Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No blog posts available yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`}>
                  <BlogCard className="group h-full cursor-pointer hover:scale-[1.02] hover:border-purple-500/50">
                    {/* Image */}
                    {post.image ? (
                      <div className="relative w-full h-64 overflow-hidden bg-muted">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                        <BookOpen className="size-12 text-purple-500/30" />
                      </div>
                    )}

                    <div className="relative flex h-full flex-col p-6">
                      {/* Title */}
                      <h2 className="font-inter mb-3 text-xl sm:text-2xl font-semibold leading-tight text-foreground group-hover:text-purple-500 transition-colors">
                        {post.title}
                      </h2>

                      {/* Description */}
                      {post.description && (
                        <p className="mb-0 line-clamp-3 flex-1 text-sm font-inter text-muted-foreground">
                          {post.description}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                        {post.date && (
                          <div className="flex items-center gap-2 text-xs font-inter text-muted-foreground">
                            <Calendar className="size-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm font-medium font-inter text-purple-500 group-hover:gap-3 transition-all">
                          <span>Read more</span>
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </BlogCard>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
