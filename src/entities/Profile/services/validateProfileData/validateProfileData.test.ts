import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "@/entities/Profile";


const data = {
    first: "Елизавета",
    lastname: "Милюткина",
    password: "123",
    age: 27,
    city: "Moscow",
    username: "admin",
    avatar: "../../../../../components/ui/Avatar/storybook.jpg"

}

describe('loginByUserName.test', () => {

    test('successful data return', async () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first:'', lastname:'' })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined })
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    });

    test('incorrect all', async () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE
        ])
    });
});
