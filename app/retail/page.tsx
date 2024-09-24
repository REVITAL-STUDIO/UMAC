import Nav from "@/components/Nav";
import ProductGrid from "@/components/productGrid";
import RetailTitle from "@/components/retailTitle";
import UMARetail from "@/components/UMARetail";

export default function Retail() {
  return (
    <main>
      <Nav />
      <RetailTitle />
      <ProductGrid />
      <UMARetail />
    </main>
  );
}
