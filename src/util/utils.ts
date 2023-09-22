import { useParam } from '@blitzjs/next'

export const useStringParam = (name: string) => {
    const param = useParam(name, "string");

    return param
}
