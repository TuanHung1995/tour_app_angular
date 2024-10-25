export interface Jwt {
  token: string;
  expires: number;
  issued: number;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  scope: string;
  jti: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
  };
}
