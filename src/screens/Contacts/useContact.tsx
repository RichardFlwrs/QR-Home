import { useEffect, useState } from "react";
import { apiLoadContacts } from "api/localStorage/contactStorage";


export default () => {
   const [contactList, setResults] = useState([]);
   const [errMsg, setErrMsg] = useState("");

   const searchApi = async () => {
      try {
         const response = await apiLoadContacts()
         setResults(response as any);
      } catch (error) {
         console.warn(error);
         setErrMsg("Something went wrong");
      }
   };

   useEffect(() => {
      searchApi();
   }, []);

   return [searchApi, contactList, errMsg];
};
