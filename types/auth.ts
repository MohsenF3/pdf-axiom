export type User = {
  id: string;
  email: string;
};

export type SessionPayload = {
  user: User;
  expiresAt: Date;
};
