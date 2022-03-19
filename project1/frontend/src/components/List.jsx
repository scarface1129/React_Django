function List(props){
  const{title,content,delection,id} = props
      function handleClick(){
    deletion(id)
  }
    return (
        <div className="note">
          <h1 >  Titles: {title} </h1>
          <p > Content: {content}</p>
{/*          <button onClick={handleClick}>Delete</button>
*/}        </div>
    )
  }

export default List;