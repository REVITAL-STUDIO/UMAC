import HighQuality from "@/components/HighQuality";
import Industry from "@/components/Industry";
import ProductCategories from "@/components/ProductCategories";
import ProductIntro from "@/components/ProductIntro";

export default function Products() {
  return (
    <main>
      <ProductIntro />
      <ProductCategories />
      <HighQuality />
      <Industry />
    </main>
  );
}
