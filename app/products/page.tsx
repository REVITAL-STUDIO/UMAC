import HighQuality from "@/components/highQuality";
import Industry from "@/components/Industry";
import ProductCategories from "@/components/productCategories";
import ProductIntro from "@/components/productIntro";

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
