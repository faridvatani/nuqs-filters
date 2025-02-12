import ProductCard from "@/components/product-card";
import { Product } from "@/components/shared/types";

import { getProducts } from "@/server/product";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex flex-col gap-10 justify-center max-w-8xl mx-auto p-10">
      <h1 className="text-2xl font-bold">Best Seller Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
