"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  editable?: boolean;
  onChange?: (rating: number) => void;
}

export function StarRating({
  rating: initialRating = 0,
  editable = false,
  onChange,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index: number) => {
    if (!editable) return;
    const newRating = index + 1;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const filled = editable
          ? index < (hoverRating || rating)
          : index < rating;

        return (
          <Star
            key={index}
            className={`h-5 w-5 ${
              filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${editable ? "cursor-pointer" : ""}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => editable && setHoverRating(index + 1)}
            onMouseLeave={() => editable && setHoverRating(0)}
          />
        );
      })}
    </div>
  );
}
