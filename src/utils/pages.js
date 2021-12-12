export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

// Сделать так, чтобы массив не пересчитывался при каждом
// рендере, а только тогда, когда пересчитывается общее
// количество страниц (useMemo) - сделать хук usePagination

export const getPagesArray = (totalPages) => {

    let pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }

    return pagesArray;

}