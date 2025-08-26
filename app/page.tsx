import Hero from "@/components/home/hero";
import ListEvent from "@/components/home/list-event";
import Testimonials from "@/components/home/testimonials";
import HowItWorks from "@/components/home/how-it-works";
import FAQ from "@/components/home/faq";
import Newsletter from "@/components/home/newsletter";
import Contact from "@/components/home/contact";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Events Section */}
      <ListEvent />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Testimonials Section */}
      <Testimonials />
      
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
