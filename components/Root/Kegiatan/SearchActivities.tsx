"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function SearchActivities() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearchValue = searchParams.get("title") || "";

  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [debouncedValue] = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue) {
      router.replace(`?title=${debouncedValue}`);
    } else if (searchParams.get("title")) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("title");
      router.replace(`?${params.toString()}`);
    }
  }, [debouncedValue, searchParams, router]);

  return (
    <div className="relative max-lg:w-full">
      <Search className="absolute left-3 top-1/2 size-6 -translate-y-1/2 text-primary" />
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Cari judul kegiatan BGU...."
        className="w-full rounded-full ps-12 lg:h-12 lg:w-[520px] lg:text-lg placeholder:lg:text-lg"
      />
    </div>
  );
}
