import { UserProfile } from "./UserProfile";
import { enhancer } from "./UserProfile.enhancer";

export const UserProfileContainer = enhancer(UserProfile);
