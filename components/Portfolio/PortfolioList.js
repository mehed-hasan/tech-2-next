import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { portfolio } from "/public/data/portfolio";
import Portfolio from "./Portfolio";

function PortfolioList() {


        // We start with an empty list of items.
        const itemsPerPage  = 3;
        const [items,setItems] = useState(portfolio.work);
        const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        const [data,setData]=useState('All');



        useEffect(()=>{
            setItemOffset(0);
            if(data === 'All'){
                setItems(portfolio.work)
            }else{
                const filteredData = portfolio.work.filter((item)=>{ return item.cat === data})
                setItems(filteredData);
            }
        },[data]);

        console.log(items);


            
        useEffect(() => {
            // Fetch items from another resources.
            window.scrollTo(0,0);
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
          }, [itemOffset, itemsPerPage,items]);

                      // Invoke when user click to request another page.
                      const handlePageClick = (event) => {
                        window.scrollTo(0,0);
                        const newOffset = (event.selected * itemsPerPage) % items.length;
                        console.log(
                        `User requested page number ${event.selected}, which is offset ${newOffset}`
                        );
                        setItemOffset(newOffset);

                    };
        

    return ( 
        <>
  <div className="top_page_gap"></div>
       <section className="portfolio_list">
            <div className="container">
                <div className="heading_and_filter">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 className="heading_2">{portfolio.title}</h2>
                        </div>
                        <div className="col-12 col-md-6">
                                <div className="filter">
                                    <select onChange={(e) => setData(e.target.value)} className="form-select" aria-label="Default select example">
                                        {
                                            portfolio.cat.map((item,index)=>
                                            <option key={index} >{item}</option>
                                            )
                                        }
                                      </select>
                                </div>
                        </div>
                    </div>
                </div>
                
        {
            currentItems.map((item)=>
            <Portfolio key={item.id} data={item} />

            )
        }

            <ReactPaginate
                    breakLabel="..."
                    nextLabel="»"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="«"
                    renderOnZeroPageCount={null}
                />
            </div>
       </section>
        <div className="gap"></div>
        </>
     );
}

export default PortfolioList;