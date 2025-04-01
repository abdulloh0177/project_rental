import React from 'react'
import { Button } from '../ui/button';
const ProportyDescription = () => {
  return (
    <div className="mb-8">
      <h2
        data-aos="zoom-out-left"
        className="mb-4 text-lg primary-color font-semibold"
      >
        Description
      </h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Occupying over 1,600 square feet, perched over 100 feet in the air
          with absolutely breathtaking panoramic 360-degree views of Manhattan
          City and the surrounding tri-state area. The 82nd Floor at 432 Park
          Avenue has been completely reimagined by one of the world's
          sought-after design houses in London and represents an utterly unique
          opportunity to own a truly significant property.
        </p>
        <p>
          The residence is comprised of 5 bedrooms, 2 master bathrooms, an
          en-suite guest bathroom, 2 powder rooms, 2 offices, 2 dressing rooms,
          a media room, an oversized eat-in gourmet chef's kitchen, and a
          sprawling 1,100 square-foot Great Room perfectly situated in the prime
          southwest corner of the floor.
        </p>
        <Button variant="link" className="p-0 text-blue-500">
          Show more
        </Button>
      </div>
    </div>
  );
}

export default ProportyDescription