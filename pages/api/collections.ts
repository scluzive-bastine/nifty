// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { json } from 'stream/consumers'

type Data = {
  collections?: Object
  error?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const username = process.env.COINBASE_API_USERNAME || 'ABFXGNHT2VRRJEDP3FK2'
  const password = process.env.COINBASE_API_PASSWORD || 'JQCS666X4Q2ZIVCHM5THPTBLU5P7EW4UBSZ3UTCH'
  const pageSize = 8
  const page = 1
  const orderBy = 'onedaytradingvolume'

  const URL = `https://mainnet.ethereum.coinbasecloud.net/api/nft/v2/contracts?networkName=ethereum-mainnet&pageSize=${pageSize}&orderBy=${orderBy}&page=${page}`

  try {
    const result = await axios.get(URL, {
      headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' },
      params: { trophies: true },
      auth: {
        username: username,
        password: password,
      },
    })
    const data = await result.data
    res.status(200).send({ collections: data })
  } catch (error) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
