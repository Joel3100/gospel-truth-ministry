import Hero from "../components/Home/Hero";
import WhoWeAre from "../components/Home/WhoWeAre";
import ServiceTimes from "../components/Home/ServiceTimes";
import LatestSermons from "../components/Home/LatestSermons";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import LatestBlogPosts from "../components/Home/LatestBlogPosts";
import CallToAction from "../components/Home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServiceTimes />
      <LatestSermons />
      <UpcomingEvents />
      <LatestBlogPosts />
      <CallToAction />
    </>
  );
}
