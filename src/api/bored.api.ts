import { BoredInterface } from "../interfaces/bored.interface";
import { useFetch } from "../utils/react-query.util";


export const useGetFilteredBored = (filters?: any): any => {
    useFetch<BoredInterface[]>('https://www.boredapi.com/api/activity');
}
