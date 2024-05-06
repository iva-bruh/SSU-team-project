import { writable } from 'svelte/store'

export const isAuth = writable(false)

const login = 'admin'
const password = 'hvdom86'

export function auth(loginDTO: string, passwordDTO: string) {
    if(login === loginDTO && password === passwordDTO) {
        isAuth.set(true)
        return
    }
    isAuth.set(false)
}
