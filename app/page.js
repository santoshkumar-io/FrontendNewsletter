import Header from "./components/Header";
import NewsletterSection from "./components/NewsletterSection";
import PastNewsletters from "./components/PastNewsletters";
import SubscribeSection from "./components/SubscribeSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="relative top-24">
        <NewsletterSection />
        <TeamSection />
        <PastNewsletters />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}
