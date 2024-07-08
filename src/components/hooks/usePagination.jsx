import { useMemo } from "react";

export const usePagination = (pageCount) => useMemo(() => {
    const result = [];
    for (let i = 1; i <= pageCount; i++) {
        result.push(i)
    }
    return result;
}, [pageCount])

export default usePagination;