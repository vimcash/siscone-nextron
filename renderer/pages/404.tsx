import Link from 'next/link'
import React from 'react'

export const FourOhFour = () => (
  <>
    <h1>404 - Page Not Found</h1>
    <Link href="/home">
        Go back home
    </Link>
  </>
)


export default FourOhFour