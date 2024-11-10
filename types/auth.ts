export type User = {
  id: number;
  email: string;
};

export type SessionPayload = {
  user: User;
  expiresAt: Date;
};
