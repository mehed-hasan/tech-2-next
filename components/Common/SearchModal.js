import { useEffect } from "react";
import { useState } from "react";

function SearchModal({isActive, isClicked}) {

    useEffect(() =>{
        if(isActive){
            let time = setTimeout(() =>{
                document.querySelector(".search-wrapper").classList.add('active');
            },500);

            return () => clearTimeout(time);

        }else{
                document.querySelector(".search-wrapper").classList.remove('active');

        }
    })

    return ( 

        <>
            <section    id="search_modal" className={isActive && 'active' }>
                <div className="search-wrapper" >
                    <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Type to search" />
                        <button className="search-icon nav_search" > <img src={`/images/icons/Search.webp`}alt="" srcSet=""/></button>
                    </div>
                    <span onClick={isClicked} className="nav_search_close">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M25.5303 6.46967C25.8232 6.76256 25.8232 7.23744 25.5303 7.53033L7.53033 25.5303C7.23744 25.8232 6.76256 25.8232 6.46967 25.5303C6.17678 25.2374 6.17678 24.7626 6.46967 24.4697L24.4697 6.46967C24.7626 6.17678 25.2374 6.17678 25.5303 6.46967Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.46967 6.46967C6.76256 6.17678 7.23744 6.17678 7.53033 6.46967L25.5303 24.4697C25.8232 24.7626 25.8232 25.2374 25.5303 25.5303C25.2374 25.8232 24.7626 25.8232 24.4697 25.5303L6.46967 7.53033C6.17678 7.23744 6.17678 6.76256 6.46967 6.46967Z" fill="white"/>
</svg>

                    </span>
                </div>
            </section>
        </>
     ); 
}

export default SearchModal;