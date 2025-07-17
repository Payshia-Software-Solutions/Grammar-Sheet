import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { FeaturedNews } from "@/components/news/featured-news";
import { NewsList } from "@/components/news/news-list";
import { StayUpdatedSection } from "@/components/news/stay-updated-section";

export default function NewsPage() {
  return (
    <div className="bg-gray-50/50">
      <HeroHeaderSection
        title="News & Notices"
        subtitle="Stay updated with the latest announcements, class schedules, and exam tips."
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students teachers group photo"
      />
      <FeaturedNews />
      <NewsList />
      <StayUpdatedSection />
    </div>
  );
}
