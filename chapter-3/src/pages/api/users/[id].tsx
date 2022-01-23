import { NextApiRequest, NextApiResponse }  from 'next'


export default function users (request: NextApiRequest, response: NextApiResponse)  {
  console.log(request.query);
  

  const users = [
    {id: 1, name:'Diego'},
    {id: 1, name: 'suzan'},
    {id: 1, name: 'Thiago'},
  ]

  return response.json({ users });
}