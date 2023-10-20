const Pagination = ({length, setPage, page}) => {
    const itemsPerPage = 8
    const totalPages = Math.ceil(length / itemsPerPage);
    console.log('Pagination')

    return ( 
    <>
   
    <div className="button-container"> 
        <span onClick={()=>{page == 1 ? setPage(page) : setPage(page-1)}} className="previous-round" ></span>
        <span onClick={()=>{page == totalPages ? setPage(page) : setPage(page+1)}} className="next-round" ></span>
    </div>
    <div className="page-container">
        <p className="pages"> {page} of {totalPages} </p>
    </div>
    
    </>
     
    );
}
 
export default Pagination;
