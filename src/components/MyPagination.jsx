import React from 'react'

export default function MyPagination({ totalPages, currentPage }) {

    const offset = 2;
    let pages = [];

    if (totalPages <= 5 + 2 * offset) {
        // Если страниц мало, чтобы применять многоточие, просто показать все страницы
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        // Первая страница всегда отображается
        pages.push(1);

        // Левая сторона
        if (currentPage - offset > 2) {
            pages.push('...');
        }

        // Средний диапазон страниц
        for (let i = Math.max(2, currentPage - offset); i <= Math.min(totalPages - 1, currentPage + offset); i++) {
            pages.push(i);
        }

        // Правая сторона
        if (currentPage + offset < totalPages - 1) {
            pages.push('...');
        }

        // Последняя страница всегда отображается
        pages.push(totalPages);

    }

    return (
        <div className='MyPagination' style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
            {pages}
        </div>
    )
}
