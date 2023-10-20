import React from 'react'
import HomeNav from '../app/components/homeNav'
import Home from '../app/dashboard/home'

// export default function Home() {
//   return (
//     <main>
//       <Home/>
//     </main>
//   )
// }



const page = () => {
  return (
    <div>
      <HomeNav/>
      <Home/>

    </div>
  )
}

export default page

