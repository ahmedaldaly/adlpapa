import { ProductType } from '@/@types/api/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ProductCardProps {
  product: ProductType
  isCarousel?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isCarousel=true
}) => {
  return (
    <Link href={`/products/${product?.id}/`}>
    <article className="relative">
      <div className="aspect-square overflow-hidden items-center h-32 md:h-52 w-full bg-gray-100">
        <img
          height={500}
          width={500}
          className="group-hover:scale-125 w-full h-full object-contain transition-all duration-300"
          src={product?.image}
          alt={product?.name}
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h4 className="text-xs sm:text-sm text-gray-500">
            <span className="cursor-pointer text-gray-400">
              {product?.category}
            </span>
          </h4>
          <h3 className="font-semibold text-xs sm:text-base md:text-lg text-gray-500">
            <span className="cursor-pointer">{product?.name}</span>
          </h3>
        </div>
        <div className="text-end flex flex-col items-end">
          <div className="flex items-end">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`block h-3 w-3 align-middle ${
                  index < (product?.rating || 4) ? 'text-yellow-500' : 'text-gray-400'
                } sm:h-4 sm:w-4`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="..." />
              </svg>
            ))}
          </div>
          <div className='flex gap-x-2 items-center'>
            <p className="text-xs sm:text-sm md:text-base text-primary font-bold">
              {product?.price}
            </p>
          </div>
        </div>
      </div>
    </article>
  </Link>
  
  );
};

export default ProductCard;