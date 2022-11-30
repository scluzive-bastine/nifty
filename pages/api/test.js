// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async (req, res) => {
  axios
    .get('https://fakestoreapi.com/products/')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  res.status(200).json({ collections: 'data' })
}
