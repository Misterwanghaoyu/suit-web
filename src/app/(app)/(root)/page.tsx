import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Lookbook from '@/components/Lookbook';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Collection />
      <Lookbook />
      <Features />
    </main>
  );
}
