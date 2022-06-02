import React, {useState} from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {IUsers} from '../../types/types';
import {ListItem} from '../../components/ListItem';
import {CustomSelect} from '../../components/CustomSelect';
import {FilterType} from './FilteringContainer';

type FilteringPropsType = {
    data: IUsers[]
    filterData: string[]
    changeFilter: (value: string) => void
}

export const Filtering: React.FC<FilteringPropsType> = (
    {
        data,
        filterData,
        changeFilter
    }
) => {
    return (
        <>
            <CustomSelect data={filterData} changeFilter={changeFilter}/>
            <FlexWrapper direction={'column'}>
                {data.map(u => <ListItem key={u.id} width={400}>
                    <div>username: {u.username}</div>
                    <div>name: {u.name}</div>
                    <div>phone: {u.phone}</div>
                    <div>email: {u.email}</div>
                    <div>address: {u.address.city}</div>
                </ListItem>)}
            </FlexWrapper>
        </>

    );
};

