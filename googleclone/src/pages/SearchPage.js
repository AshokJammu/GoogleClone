import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import {Link} from "react-router-dom"
import Search from "../components/Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
 // const {data} = useGoogleSearch(term)

//   console.log(data)

  return (
    <div className="searchPage">
      <div className="searchPage_header">
         <Link to="/">
             <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
         </Link>
         <div className='searchPage_headerBody'>
            <Search hideButtons/>
         </div>
      </div>

      <div className="searchPage_results">

      </div>
    </div>
  );
}

export default SearchPage;

// AIzaSyCt__FjW5hzoWKWlu8h-kqncf6fKc2ThKw

// 5ca163cf86d67ccca
