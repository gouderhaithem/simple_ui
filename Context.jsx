import { createContext, useState } from "react";
import { initial_contacts } from "./src/mycontacts";
// export
export const AppContext = createContext();
// context function
const ContextNext = ({ children }) => {
  const [contacts, setContacts] = useState(initial_contacts);
  const [new_contacts, setNew_contacts] = useState([]);

  const [posts, setPosts] = useState([
    {
      username: "Gouder Jakson",
      date: 1672017195338,
      content: "hello there people",
      likes: 3,
      image: `https://api.multiavatar.com/GouderJakson.svg`,
    },
   /* {
      username: "ai person",
      date: 1670017105338,
      content: "fuck off niggers",
      likes: 1,
      image: `https://api.multiavatar.com/person.svg`,
    },*/
  ]);
  return (
    <AppContext.Provider
      value={{
        contacts,
        setContacts,
        new_contacts,
        setNew_contacts,
        posts,
        setPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default ContextNext;
