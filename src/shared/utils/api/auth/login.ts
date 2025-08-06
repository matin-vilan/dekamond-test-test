import request from "@/shared/utils/toolkit/request";
import { authApiEndpoints } from "../endpoints";
import { LoginRequest, LoginResponse } from "@/shared/types/auth";

export const login = async (body: LoginRequest): Promise<LoginResponse> => {
  const data = await request.post(authApiEndpoints.login, body);

  return data;
};
