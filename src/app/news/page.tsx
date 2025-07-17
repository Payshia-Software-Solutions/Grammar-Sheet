import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { FeaturedNews } from "@/components/news/featured-news";

export default function NewsPage() {
  return (
    <div>
      <HeroHeaderSection
        title="News & Notices"
        subtitle="Stay updated with the latest announcements, class schedules, and exam tips."
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students teachers group photo"
      />
      <FeaturedNews />
    </div>
  );
}