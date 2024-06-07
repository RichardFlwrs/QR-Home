import axios from "axios";


const mongodb = axios.create({
   baseURL: 'https://617f-189-152-68-96.ngrok-free.app/',
})

export const httpLogin = async ({ email, password }: any) => {
   const res = await mongodb.post('/signin', { email, password }).then((_res) => {
      // console.log('[ _res ] | ', _res.data);
      return _res.data as string
   })
      .catch((_err) => {
         // console.log('[ _err ] | ', JSON.stringify(_err))
         throw new Error(_err.message)
      })

   return res
}

export default mongodb;