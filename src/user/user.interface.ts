import { User } from "./user.entity";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
  }
  