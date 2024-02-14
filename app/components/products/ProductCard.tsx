"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Rating } from "@mui/material";
import { formatPrice, truncateText } from "@/utils";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const { id, images, name, reviews, price } = data;

  const productRating =
    reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    reviews.length;

  return (
    <div onClick={() => router.push(`/product/${id}`)} className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={images[0].image}
            alt={name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
