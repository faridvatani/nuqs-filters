"use server";

import { Product } from "@/components/shared/types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
  const data = await res.json();

  return data;
}
