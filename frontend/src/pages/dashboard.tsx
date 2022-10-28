import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function Dasboard() {
  const { user } = useContext(AuthContext);
  
  return <div>Helooo {user?.email}</div>;
}
