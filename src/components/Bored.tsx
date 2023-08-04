import React, { useState } from 'react';
import { BoredFilter, BoredInterface, initialBoredFilters } from '../interfaces/bored.interface';
import { useQueryClient } from "@tanstack/react-query";
import { fetcher } from "../utils/react-query.util";
import { BoredInfo } from "./BoredInfo";
import { BoredFilters } from './BoredFilters';


export const Bored = () => {

    const queryClient = useQueryClient();

    const [filters, setFilters] = useState<BoredFilter>(initialBoredFilters);

    const [bored, setBored] = useState<BoredInterface | null>(null);
    const [isLoading, setIsLoading] = useState<BoredInterface | null>(null);


    const applyFilters = async () => {
        setIsLoading(true as any);
        const data = await queryClient.fetchQuery(
            ['https://www.boredapi.com/api/activity', filters],
            ({ queryKey }: any) => fetcher({ queryKey } as any))
        setBored(data as any);
        setIsLoading(false as any);
    };

    return (
        <div style={classBoredFilters}>
            <BoredFilters  filters={filters} setFilters={setFilters} />

            <BoredInfo bored={bored} />

            <button aria-busy={!!isLoading} onClick={applyFilters}>
                {isLoading ? 'Please wait...' : 'Give me Something to do'}
            </button>
        </div>
    )
}

const classBoredFilters = {
    display: 'flex',
    flexDirection: 'column' as 'row',
    height: '100%',
    justifyContent: 'space-between'
}
