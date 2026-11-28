// Reduce WordPress/Elementor HTML to plain semantic markup so it can be styled
// by our design system: keeps headings, paragraphs, lists, links, and emphasis;
// drops scripts, styles, wrappers, classes, and inline styles. Text is untouched
// (verbatim), which matters for legal pages.

const KEEP = "h1|h2|h3|h4|h5|h6|p|ul|ol|li|a|strong|b|em|i|br";

export function toSemanticHtml(html: string, opts: { dropH1?: boolean } = {}): string {
  let out = html
    .replace(/<(script|style|noscript|iframe)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    // remove every tag that is not in KEEP
    .replace(new RegExp(`<(?!\\/?(?:${KEEP})\\b)[^>]*>`, "gi"), "")
    // strip attributes from kept tags, except href on <a>
    .replace(new RegExp(`<(${KEEP})\\b[^>]*>`, "gi"), (tag, name: string) => {
      if (name.toLowerCase() !== "a") return `<${name.toLowerCase()}>`;
      const href = /href="([^"]*)"/i.exec(tag)?.[1] ?? "";
      const safe = /^(https?:|mailto:|tel:|\/|#)/i.test(href) ? href : "";
      return safe ? `<a href="${safe}">` : "<a>";
    })
    // drop empty paragraphs (Elementor spacers)
    .replace(/<p>(?:\s|&nbsp;| |<br>)*<\/p>/gi, "");

  if (opts.dropH1) out = out.replace(/<h1>[\s\S]*?<\/h1>/gi, "");
  return out.replace(/\n\s*\n+/g, "\n").trim();
}
