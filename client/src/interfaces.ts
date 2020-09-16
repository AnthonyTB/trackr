export interface ICurrentUser {
  user: string;
}

export interface IJwtPayload {
  user_id: number;
  name: string;
  sub: string;
}
