// Renders body HTML that comes from the client's own WordPress (headless).
// The live content carries its own scoped styles (.lsi-blog, .li-loc), which
// already use the brand palette, so it is rendered as-is inside our layout.
export function WpBody({ html, className = "" }: { html: string; className?: string }) {
  return <div className={`wp-content ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
