export type User = {
  id: number;
  email: string;
  username: string;
};

export type SessionPayload = {
  user: User;
  expiresAt: Date;
};
