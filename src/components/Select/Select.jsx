import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    {
        label: 'Moscow',
        value: 'msc',
        filterName: 'city',
        caption: 'good city',
    },
    {
        label: 'New York',
        value: 'nyc',
        filterName: 'city',
    },
    {
        label: 'Tokyo',
        value: 'tok',
        filterName: 'city',
        caption: 'best city',
    },
    {
        label: 'Beijing',
        value: 'bei',
        filterName: 'city',
        isDisabled: true
    }
]

const SelectComponent = () => {
    const [value,setValue] = useState(null);
    
    const handleSetValue = (elem) => {
        setValue(elem)
    }

    return (
        <div style={{ height: '300px', width: '250px'}}>
            <Select 
                options={options} 
                onChange={handleSetValue}
                value={value}
                isClearable={true}
                isSearchable={true}
                placeholder="Выберите город"
                noOptionsMessage={() => 'Нет данных'}
                // styles={{ option: () => ({ backgroundColor: '#CEDFF4', cursor: 'pointer'})}}
            />
        </div>
    )
};

export default SelectComponent
