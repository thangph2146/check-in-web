import Hero from "@/components/home/hero";
import ListEvent from "@/components/home/list-event";
import HowItWorks from "@/components/home/how-it-works";
import FAQ from "@/components/home/faq";
import Newsletter from "@/components/home/newsletter";
import Contact from "@/components/home/contact";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Events Section */}
      <ListEvent />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
