import { UserStatus } from "@utils/types";

export function generateUserStatus(): UserStatus {
  return Math.random() < 0.5 ? 'active' : 'inactive'
}