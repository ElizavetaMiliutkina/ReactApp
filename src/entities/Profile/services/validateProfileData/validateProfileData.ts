import { Profile, ValidateProfileError } from "../../model/types/profile.ts";

export const validateProfileData = (profile?: Profile) => {
    const errors:ValidateProfileError[] = []

    if(!profile) {
        errors.push(ValidateProfileError.NO_DATA)
        return errors
    }
    const { first, lastname, age } = profile



    if(!first || !lastname){
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if(!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    return errors
}
