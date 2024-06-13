import storage from "./localStorage";

const TOKEN_BD_KEY = 'loginState';
const USER_IMG_KEY = 'userImage';


/**
 * TOKEN
 */
export const saveToken = (token: string) => {
   // if (getToken() === '') return
   __set(TOKEN_BD_KEY, token)
}

export const getToken = async () => {
   return await __get(TOKEN_BD_KEY)
}

export const removeToken = async () => {
   __remove(TOKEN_BD_KEY)
}

/**
 * IMAGE
 */
export const saveUserImage = (data: string) => {
   __set(USER_IMG_KEY, data)
}

export const getUserImage = async () => {
   return await __get(USER_IMG_KEY)
}

export const removeUserImage = async () => {
   __remove(USER_IMG_KEY)
}


/**   *  *  *  *  *
 *
 *    Private Methods
 * 
 */


const __set = (KEY: string, DATA: any) => {
   storage.save({
      key: KEY,
      data: DATA
   });
}


const __get = async (KEY: string) => {
   let res = ''
   try {
      res = await storage.load({ key: KEY }).then((data) => data)
   } catch (err: any) {
      console.info(`| Storage __get | '${KEY}' not found `);
      console.info(err.message);
   }
   return res
}


const __remove = async (KEY: string) => {
   try {
      await storage.remove({ key: KEY })
   } catch (error) {
      throw Error(error as string)
   }
}

