import type { ReactNode } from "react";

type MarkdownBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export function renderMarkdown(markdown: string) {
  return parseMarkdown(markdown).map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === "heading") {
      const className =
        block.level === 2
          ? "mt-0 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          : "mt-12 text-2xl font-semibold leading-snug text-foreground";

      return block.level === 2 ? (
        <h2 key={key} className={className}>
          {renderInline(block.text)}
        </h2>
      ) : (
        <h3 key={key} className={className}>
          {renderInline(block.text)}
        </h3>
      );
    }

    if (block.type === "quote") {
      return (
        <blockquote key={key} className="my-8 border-l-2 border-accent pl-5 text-xl leading-9 text-foreground">
          {renderInline(block.text)}
        </blockquote>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={key} className="my-7 space-y-3 pl-5 text-lg leading-8 text-muted">
          {block.items.map((item) => (
            <li key={item} className="list-disc marker:text-accent">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={key} className="my-7 text-lg leading-9 text-muted sm:text-xl sm:leading-10">
        {renderInline(block.text)}
      </p>
    );
  });
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = markdown.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: trimmed.slice(4) });
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, text: trimmed.slice(3) });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: trimmed.slice(2) });
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${part}-${index}`;

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={key} className="rounded bg-accent/10 px-1.5 py-0.5 text-[0.9em] text-accent">
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={key} className="text-foreground">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}
