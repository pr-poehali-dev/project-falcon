import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;