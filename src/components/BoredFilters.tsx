import React from 'react';
import { BoredFilter, BoredTypeEnum} from "../interfaces/bored.interface";

export const BoredFilters = ({filters, setFilters}: { filters: BoredFilter, setFilters: any }) => {

    const boredTypesEnum: BoredTypeEnum[] = Object.values(BoredTypeEnum);
    const onChangeFilters = (key: any, value: any) => {
        document.getElementById(`summary-${key}`)?.click()
        setFilters({...filters, [key]: value})
    };
    const arrayNumber: number[] = new Array(10).fill(0).map((_, i) => i + 1);

    return (
        <div>
            <div className="grid">
                <details role="list">
                    <summary aria-haspopup="listbox" id="summary-participants">Participants: { filters.participants }</summary>
                    <ul role="listbox" >
                        {
                            arrayNumber?.map( (num) => (
                                <li onClick={ () => onChangeFilters('participants', num) }>{ num }</li>)
                            )
                        }
                    </ul>
                </details>
                <label htmlFor="range">Accessibility (min: {filters.minaccessibility} - max: {filters.maxaccessibility})
                    <div className="grid">
                        <input type="range" min="0" max="1" step="0.01" id="minaccessibility"
                               value={filters.minaccessibility}
                               onChange={(e) => onChangeFilters('minaccessibility', e.target.value)}
                        />
                        <input type="range" min="0" max="1" step="0.01" id="maxaccessibility"
                               value={filters.maxaccessibility}
                               onChange={(e) => onChangeFilters('maxaccessibility', e.target.value)}
                        />
                    </div>
                </label>
            </div>

            <div className="grid">
                <details role="list">
                    <summary aria-haspopup="listbox" id="summary-type">Type: { filters.type }</summary>
                    <ul role="listbox">
                        {
                            boredTypesEnum.map( (boredEnum) => (
                                <li onClick={ () => onChangeFilters('type', boredEnum)}>{ boredEnum }</li>)
                            )
                        }
                    </ul>
                </details>
                <label htmlFor="range">Price (min: {filters.minprice} - max: {filters.maxprice})
                    <div className="grid">
                        <input type="range" min="0" max="1" step="0.01" id="minprice" value={filters.minprice}
                               onChange={(e) => onChangeFilters('minprice', e.target.value)}
                        />
                        <input type="range" min="0" max="1" step="0.01" id="maxprice" value={filters.maxprice}
                               onChange={(e) => onChangeFilters('maxprice', e.target.value)}/>
                    </div>
                </label>
            </div>
        </div>
    )
}
