import { Section } from "@/components/primitives/Section";
import { getPageByPath } from "@/lib/wp";
import { toSemanticHtml } from "@/lib/sanitize";

// Legal pages render the live WordPress text VERBATIM (pulled at build, hourly
// revalidate), restyled with our typography. If WP cannot be reached the build
// fails rather than publishing a paraphrase.
export async function LegalPage({ title, path }: { title: string; path: string }) {
  const page = await getPageByPath(path);
  if (!page) throw new Error(`Legal page not found in WordPress: ${path}`);
  const html = toSemanticHtml(page.content, { dropH1: true });

  return (
    <Section className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl text-ink sm:text-5xl">{title}</h1>
        <div className="legal-prose mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Section>
  );
}
