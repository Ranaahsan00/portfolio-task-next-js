"use client";

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Experience />
      <Clients />
      <Approach />
      <RecentProjects />
      <Footer />
    </main>
  );
}
