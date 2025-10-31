export interface TOCItem {
  id: string;
  level: number;
  text: string;
  children?: TOCItem[];
}

export function extractTOC(content: string): TOCItem[] {
  const lines = content.split("\n");
  const toc: TOCItem[] = [];
  const stack: TOCItem[] = [];

  lines.forEach((line) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) return;

    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const item: TOCItem = {
      id,
      level,
      text,
    };

    // Remove items from stack that are at same or higher level
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      toc.push(item);
      stack.push(item);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
      stack.push(item);
    }
  });

  return toc;
}
