import { Country } from "@/shared/const/common.ts";
import { Currency } from "@/entities/Currency"

export interface Profile {
    first?: string,
    lastname?: string,
    password?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly : boolean
}
