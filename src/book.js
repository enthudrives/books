import {useParams} from "react-router-dom";

function Book() {
  let { id } = useParams();
  return (
  		<div>Book displayed here for id: {id}</div> 
  );
}

export default Book;
