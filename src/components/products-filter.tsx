"use client";
import { parseAsInteger, useQueryState } from "nuqs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductsFilterProps {
  refetchProducts: () => Promise<void>;
}

export default function ProductsFilter({
  refetchProducts,
}: ProductsFilterProps) {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
  });
  const [perPage, setPerPage] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(8),
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  const handlePerPageChange = (value: string) => {
    setPerPage(Number(value));
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <div className="flex justify-between gap-3">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="border border-gray-300 p-2 w-full max-w-md rounded-md"
      />
      <Select
        value={perPage.toString()}
        onValueChange={(value) => handlePerPageChange(value)}
      >
        <SelectTrigger className="border border-gray-300 w-24">
          <SelectValue placeholder="Per Page" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="16">16</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="24">24</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
