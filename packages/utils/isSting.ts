import { getTypeString } from "./util"; 
export const isSting = (obj: unknown): boolean => {
return 'string' === getTypeString(obj)
}
