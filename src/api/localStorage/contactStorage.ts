import storage from "./localStorage";

const CONTACTS_BD_KEY = 'contactsData';
const TOKEN_BD_KEY = 'loginState';

interface Contact {
   firstName: string,
   lastName: string,
   email: string,
   createdAt?: number,
   image?: File,
}


export const saveToken = (token: string) => {
   // if (getToken() === '') return

   storage.save({
      key: TOKEN_BD_KEY,
      data: { token }
   });
}


export const getToken = async () => {
   let res = ''


   try {
      res = await storage.load({ key: TOKEN_BD_KEY }).then((p) => p.token)
   } catch (err: any) {
      switch (err.name) {
         case 'NotFoundError':
            // DO NOTHING;
            break;
         default:
            console.warn(err.message);
            break;

      }
   }

   return res
}

export const removeToken = async () => {
   try {
      await storage.remove({ key: TOKEN_BD_KEY })
   } catch (error) {
      throw Error(error as string)
   }
}


export const apiSaveContact = async (data: Contact) => {
   data.createdAt = Date.now()
   let contacts = await apiLoadContacts();
   contacts.push(data)

   let response = null;

   try {
      await storage.save({
         key: CONTACTS_BD_KEY,
         data: contacts,
         expires: null
      });
      response = "Saved succesfully"
   } catch (_err) {
      console.warn(_err);
      response = "Something went wrong"
   }

   return response
}

export const apiLoadContacts = async () => {
   let response: Contact[] = []

   response = await storage
      .load({ key: CONTACTS_BD_KEY, })
      .then((ret: Contact[]) => {
         return ret
      })
      .catch(err => {
         // any exception including data not found
         // goes to catch()
         console.warn(err.message);
         switch (err.name) {
            case 'NotFoundError':
               // TODO;
               break;
            case 'ExpiredError':
               // TODO
               break;
         }
         return []
      });

   return response
}

