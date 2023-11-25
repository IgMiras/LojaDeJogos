import { SubHome1 } from "@/components/HomeSec01";
import { SubHome2 } from "@/components/HomeSec02";
import { Layout } from "@/components/Layout";
import { HomeComponent } from "@/components/Home";

export default function Home() {
  return (
    <div>
      <HomeComponent />
      <SubHome1 />
      <SubHome2 />
    </div>
  );
}
