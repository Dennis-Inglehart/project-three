import { useState } from "react"
import ResultComponent from "./ResultComponent"
const ResultsComponent = (props) => {
const [results,setResults] = useState([]) //once search complete display results
const SearchResults = (
    <div>
        {
            results.map(result=><ResultComponent result={result}/>)

        }
    </div>
)
    return(
        <div>
{
    results ? <SearchResults /> : null 
}
        </div>
    )
}

export default ResultsComponent