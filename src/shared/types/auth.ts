export interface LoginResponse {
  success: boolean;
  message: string;
  user: {
    id: string;
    email: string;
    name: string;
    picture: string;
    username: string;
    accessToken: string;
  };
}

export interface LoginRequest {
  userName: string;
  password: string;
}
