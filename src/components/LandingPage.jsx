// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function LandingPage(){
//   return (
//     <section className='landing'>
//       <div className='hero'>
//         <div className='hero-content'>
//           <h1>Paradise Nursery</h1>
//           <p>Curated houseplants delivered to your home.</p>
//           <Link className='btn' to='/products'>Get Started</Link>
//         </div>
//       </div>
//     </section>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <section className='landing'>
      <div className='hero'>
        <div className='hero-grid'>
          {/* Left column: hero content */}
          <div className='hero-content'>
            <h1>Paradise Nursery</h1>
            <p>Curated houseplants delivered to your home.</p>
            <Link className='btn' to='/products'>Get Started</Link>
          </div>

          {/* Right column: about company */}
          <div className='about-company'>
            <h2>About Us</h2>
            <p>
              At Paradise Nursery, we believe that plants bring life, beauty, 
              and calmness to every space. Our collection is carefully curated 
              from trusted growers around the world, ensuring that each plant 
              thrives in your home. Whether you’re a seasoned plant parent or 
              just starting your green journey, we’re here to help you create 
              your personal indoor paradise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
