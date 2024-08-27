import { jwtDecode } from "jwt-decode";

export const veriFytoken = (token: string) => {
  return jwtDecode(token);
};
