const ResultComponent = (props) => {
const {park} = props
const {name,address} = park
    return(
        <div>
      <div>
        <h2>{name}</h2>
        <p>{address}</p>
      </div>

        </div>
    )
}

export default ResultComponent

