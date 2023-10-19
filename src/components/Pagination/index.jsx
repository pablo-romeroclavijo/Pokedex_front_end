const Pagination = ({length, setPage, page}) => {
    const itemsPerPage = 8
    const totalPages = Math.ceil(length / itemsPerPage);
    console.log('Pagination')

    return ( 
    <>
   
    <div className="button-container"> 
        <box onClick={()=>{page == 1 ? setPage(page) : setPage(page-1)}} class="previous-round" ></box>
        <box onClick={()=>{page == totalPages ? setPage(page) : setPage(page+1)}} class="next-round" ></box>
    </div>
    <div className="page-container">
        <p className="pages"> {page} of {totalPages} </p>
    </div>
    
    </>
     
    );
}
 
export default Pagination;
