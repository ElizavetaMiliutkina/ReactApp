export { profileActions, profileReducer } from './model/slice/profileSlice.ts'
export type {
    Profile,
    ProfileSchema
} from './model/types/profile.ts'

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData.ts'
export { ProfileCard } from './ui/ProfileCard/ProfileCard.tsx'
