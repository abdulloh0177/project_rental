import CardComponent from '@/components/favourites/CardComponent'
import React from 'react'

const FavouritePage = () => {
  return (
    <div className="container">
      <CardComponent
        title="Favourite"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
    </div>
  );
}

export default FavouritePage