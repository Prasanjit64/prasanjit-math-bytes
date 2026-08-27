import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Interests } from "@/components/portfolio/Interests";
import { Skills } from "@/components/portfolio/Skills";
import { Hobbies } from "@/components/portfolio/Hobbies";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Vision } from "@/components/portfolio/Vision";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Prasanjit Ghosh | Mathematics Student & Web Technology Enthusiast";
const description =
  "Personal portfolio of Prasanjit Ghosh, a B.Sc. Mathematics student interested in mathematics, web technology, current affairs, geopolitics and Indian politics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Prasanjit Ghosh",
          description,
          email: "mailto:abhayghosh750@gmail.com",
          url: "https://prasanjitghosh.lovable.app",
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Surya Sen Mahavidyalaya" },
            {
              "@type": "HighSchool",
              name: "Debinagar Kailash Chandra Radha Rani Vidyapeeth",
            },
          ],
          sameAs: [
            "https://github.com/Prasanjit64",
            "https://github.com/abhayghosh750-code",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Interests />
        <Skills />
        <Hobbies />
        <Projects />
        <Journey />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
