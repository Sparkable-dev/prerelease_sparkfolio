"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["anchor-link"],
              },
            },
          ],
        ]}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="font-inter mb-6 mt-8 text-3xl sm:text-4xl font-bold text-foreground first:mt-0"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="font-inter mb-4 mt-8 text-2xl sm:text-3xl font-semibold text-foreground scroll-mt-20"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="font-inter mb-3 mt-6 text-xl sm:text-2xl font-semibold text-foreground scroll-mt-20"
              {...props}
            />
          ),
          h4: ({ ...props }) => (
            <h4
              className="font-inter mb-2 mt-4 text-lg sm:text-xl font-semibold text-foreground scroll-mt-20"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p
              className="mb-4 text-base leading-7 font-inter text-foreground/90"
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a
              className="text-purple-500 underline-offset-4 hover:text-purple-600 hover:underline font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="text-foreground/90 leading-7" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-purple-500/30 pl-4 italic font-inter text-foreground/80 my-4"
              {...props}
            />
          ),
          code: ({ inline, ...props }: { inline?: boolean; children?: React.ReactNode; className?: string }) => {
            if (inline) {
              return (
                <code
                  className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground"
                  {...props}
                />
              );
            }
            return (
              <code
                className="block rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto"
                {...props}
              />
            );
          },
          pre: ({ ...props }) => (
            <pre className="mb-4 overflow-x-auto rounded-lg" {...props} />
          ),
          img: ({ alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="my-8 rounded-lg border shadow-lg w-full"
              alt={alt || ""}
              {...props}
            />
          ),
          hr: ({ ...props }) => (
            <hr className="my-8 border-border" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
