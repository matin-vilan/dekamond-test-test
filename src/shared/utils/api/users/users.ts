import request from "@/shared/utils/toolkit/request";
import { usersApiEndpoints } from "../endpoints";

export const getUsers = async () => {
  const data = await request.get(usersApiEndpoints.getUsers);
  return data;
};
