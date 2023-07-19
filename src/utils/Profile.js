import {Link} from "react-router-dom";

export default function Profile()
{
  return(
  <div>
<Link to="/">Back</Link>
<h1>Profile</h1>
<p>List of saves here</p>
<button>Each save will have a delete button</button>
  </div>
  );
}