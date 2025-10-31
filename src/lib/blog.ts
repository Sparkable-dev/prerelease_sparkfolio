import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  content: string;
  excerpt?: string;
  image?: string;
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const slug = file.replace(/\.md$/, "");
        const fullPath = path.join(contentDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        // Extract title from first h1 if not in frontmatter
        let title = data.title || "";
        if (!title && content.trim()) {
          const h1Match = content.match(/^#\s+(.+)$/m);
          if (h1Match) {
            title = h1Match[1].trim();
          } else {
            title = slug.replace(/-/g, " ");
          }
        }

        // Extract description/excerpt
        let description = data.description || "";
        if (!description && content.trim()) {
          // Get first paragraph or first few sentences
          const text = content.replace(/^#+\s+.*$/gm, "").trim();
          const firstParagraph = text.split("\n\n")[0]?.replace(/\[.*?\]\(.*?\)/g, "").trim();
          if (firstParagraph && firstParagraph.length > 0) {
            description = firstParagraph.substring(0, 200);
            if (firstParagraph.length > 200) {
              description += "...";
            }
          }
        }

        // Extract first image from markdown
        let image = data.image || "";
        if (!image && content.trim()) {
          const imageMatch = content.match(/!\[.*?\]\(([^)]+)\)/);
          if (imageMatch) {
            image = imageMatch[1];
          }
        }

        return {
          slug,
          title: title || slug,
          description: description || data.description || "",
          date: data.date || "",
          content,
          excerpt: description,
          image: image || undefined,
        };
      })
      .sort((a, b) => {
        // Sort by date if available, otherwise by filename
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return b.slug.localeCompare(a.slug);
      });

    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    let title = data.title || "";
    if (!title && content.trim()) {
      const h1Match = content.match(/^#\s+(.+)$/m);
      if (h1Match) {
        title = h1Match[1].trim();
      } else {
        title = slug.replace(/-/g, " ");
      }
    }

    // Extract first image from markdown
    let image = data.image || "";
    if (!image && content.trim()) {
      const imageMatch = content.match(/!\[.*?\]\(([^)]+)\)/);
      if (imageMatch) {
        image = imageMatch[1];
      }
    }

    return {
      slug,
      title: title || slug,
      description: data.description || "",
      date: data.date || "",
      content,
      excerpt: data.description || "",
      image: image || undefined,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading blog post slugs:", error);
    return [];
  }
}
