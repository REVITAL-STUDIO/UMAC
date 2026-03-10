import ProductGrid from "@/components/productGrid";
import RetailOffer from "@/components/retailOffering";
import RetailTitle from "@/components/retailTitle";

export default function Retail() {
  return (
    <main>
      <RetailTitle />
      <ProductGrid />
      <RetailOffer />
    </main>
  );
}
