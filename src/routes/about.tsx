import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Experience } from "@/components/Experience";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";

const title = "About — Zam Zam Fragrances Canada";
const description =
  "A Vancouver-based fragrance brand curating luxury-inspired scents for everyday moments and lasting impressions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="surface-night px-5 pt-36 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="About"
            title="Every Scent — A Statement"
            subtitle="Zam Zam Fragrances is a Canadian fragrance brand built around one idea: a memorable scent should never feel out of reach."
          />
        </div>
      </section>
      <About />
      <Benefits />
      <Experience />
      <CTA />
    </main>
  );
}
