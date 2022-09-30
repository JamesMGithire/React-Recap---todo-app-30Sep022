import { useParams } from "react-router-dom";


function Invoice() {
  let params = useParams();
  console.log(params)
  return <h1>Invoice {params.val}</h1>;
}

export default Invoice