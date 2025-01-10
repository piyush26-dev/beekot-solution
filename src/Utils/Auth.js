import { getItemLocalStorage } from "./browserServices"

export const isLogin = () => {
    const token = getItemLocalStorage("token")
    if (token) return true
    else return false
}