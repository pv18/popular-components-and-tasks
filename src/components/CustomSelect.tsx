import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FlexWrapper} from './FlexWrapper';
import {createTheme, InputLabel, ThemeProvider} from '@mui/material';
import {FilterType} from '../tasks/filtering/FilteringContainer';

const themeSelect = createTheme({
    palette: {
        primary: {
            main: '#9400D3FF',
        }
    }
})


export type CustomSelectPropsType = {
    data?: string[]
    changeFilter: (value: string) => void
}

export const CustomSelect: React.FC<CustomSelectPropsType> = (
    {
        data = [],
        changeFilter,
    }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        changeFilter(event.target.value)
    };

    return (
        <FlexWrapper margin={'20px auto'}>
            <FormControl style={{width: '200px'}} size="small">
                <InputLabel>FILTER</InputLabel>
                <ThemeProvider theme={themeSelect}>
                    <Select
                        value={value}
                        fullWidth
                        label={'FILTER'}
                        onChange={handleChange}
                    >
                        {data.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                    </Select>
                </ThemeProvider>
            </FormControl>
        </FlexWrapper>
    );
}
