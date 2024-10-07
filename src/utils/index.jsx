import axios from 'axios'

const productionUrl = ' https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
})

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}

import category1 from '../assets/categories/beds.png'
import category2 from '../assets/categories/chairs.png'
import category3 from '../assets/categories/kids.png'
import category4 from '../assets/categories/sofas.png'
import category5 from '../assets/categories/tables.png'
import category6 from '../assets/categories/cabinets.png'

export const categories = [
  { id: 1, img: category1, text: 'Beds', count: 5 },
  { id: 2, img: category2, text: 'Chairs', count: 8 },
  { id: 3, img: category3, text: 'Kids', count: 9 },
  { id: 4, img: category4, text: 'Sofas', count: 7 },
  { id: 5, img: category5, text: 'Tables', count: 4 },
  { id: 6, img: category6, text: 'Cabinets', count: 3 },
]