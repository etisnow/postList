import React from 'react'
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

export default function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput
                placeholder='Поиск...'
                value={filter.query}
                onChange={(event) => setFilter({ ...filter, query: event.target.value })}
            />
            <MySelect
                defaultValue='Сортировка'
                value={filter.sort}
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
                onChange={(event) => setFilter({ ...filter, sort: event.target.value })}
            />
        </div>
    )
}
