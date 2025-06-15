import { createContext } from "react";

interface UserContextType {
  user: any;
  fetchUserDetails: () => Promise<void>;
}

const Context = createContext<UserContextType | null>(null);

export default Context