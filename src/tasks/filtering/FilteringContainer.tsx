import React, {useEffect, useState} from 'react';
import {Filtering} from './Filtering';
import {IUsers} from '../../types/types';
import axios from 'axios';

export type FilterType = 'username' | 'name' | 'city' | 'phone' | 'email' | 'all'
const filterData = ['username', 'name', 'city', 'phone', 'email', 'all']

export const FilteringContainer = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const [filter, setFilter] = useState<string>('username')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
    }, [])

    const filteredUsers = ((type: string) => {
        switch (type) {
            case 'username':
                return users.sort((a, b) => a.username.toLowerCase() <= b.username.toLowerCase() ? -1 : 1)
            case 'name':
                return users.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)
            case 'city':
                return users.sort((a, b) => a.address.city.toLowerCase() <= b.address.city.toLowerCase() ? -1 : 1)
            case 'phone':
                return users.sort((a, b) => a.phone.toLowerCase() <= b.phone.toLowerCase() ? -1 : 1)
            case 'email':
                return users.sort((a, b) => a.email.toLowerCase() <= b.email.toLowerCase() ? -1 : 1)
            default:
                return users
        }
    })(filter)

    return <Filtering data={filteredUsers}
                      filterData={filterData}
                      changeFilter={setFilter}
    />
};

