import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "./shared/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0].startsWith("http")
    ? product.images[0]
    : `https://i.imgur.com/${product.images[0]}`;
  return (
    <Card key={product.id} className="p-0 flex flex-col justify-between">
      <CardHeader className="p-0 relative">
        <Image
          src={imageUrl}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <Badge className="absolute top-0 left-2">{product.category.name}</Badge>
        <CardTitle className="p-6">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardDescription>{product.description.slice(0, 80)}...</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xl font-bold">${product.price}</span>
        <Button>
          <ShoppingCartIcon className="size-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
