import { revalidateTag } from "next/cache";
import { getProducts } from "@/server/product";
import type { SearchParams } from "nuqs/server";
import { Product } from "@/components/shared/types";
import { loadSearchParams } from "@/actions/search-params";

import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/products-filter";
import ProductsPagination from "@/components/products-pagination";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search, perPage, offset } = await loadSearchParams(searchParams);

  const transformedOffset = (offset - 1) * perPage;

  const products = await getProducts({
    search,
    perPage,
    offset: transformedOffset,
  });

  async function refetchProducts() {
    "use server";
    revalidateTag("products");
  }

  return (
    <main className="flex flex-col gap-10 justify-center max-w-8xl mx-auto p-10">
      <h1 className="text-2xl font-bold">Best Seller Products</h1>
      <ProductFilter refetchProducts={refetchProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ProductsPagination refetchProducts={refetchProducts} />
    </main>
  );
}
