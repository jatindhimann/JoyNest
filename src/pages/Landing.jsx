import { FeaturedProducts, Hero } from '../components'
import Categories from '../components/Categories'

import { customFetch } from '../utils'
const url = '/products?featured=true'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)

  const products = response.data.data
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedProducts />
    </>
  )
}
export default Landing
