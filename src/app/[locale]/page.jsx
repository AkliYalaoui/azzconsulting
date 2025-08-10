import Hero from "@/components/sections/Hero";
import ConsultingSection from "@/components/sections/ConsultingSection";
import TrainingSection from "@/components/sections/TrainingSection";
import AboutSection from "@/components/sections/AboutSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import ContactSection from "@/components/sections/ContactSection";
import StatsSection from "@/components/sections/StatsSection";

export default async function Home({ params }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Conseils Section */}
      <ConsultingSection />

      {/* Formations Section */}
      <TrainingSection />

      {/* Blog Section */}
      <BlogPreviewSection lang={locale} />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
