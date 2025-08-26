import Hero from "@/components/home/hero";
import ListEvent from "@/components/home/list-event";

export default function Home() {
  return (
    <div className="min-h-screen space-y-10">
      <Hero />
      <ListEvent />
    </div>
  );
}
