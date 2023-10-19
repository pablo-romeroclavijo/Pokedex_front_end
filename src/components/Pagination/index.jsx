const Pagination = ({length, setPage, page}) => {
    const itemsPerPage = 10
    const totalPages = Math.ceil(length / itemsPerPage);
    console.log('Pagination')

    return ( 
    <div className="pagination">
        <button onClick={()=>{page == 1 ? setPage(page) : setPage(page-1)}} class="previous round" >&#8249;</button>
        <p> Page {page} of {totalPages} </p>
        <button onClick={()=>{page == totalPages ? setPage(page) : setPage(page+1)}} class="next round" >&#8250;</button>
    </div> 
    );
}
 
export default Pagination;
