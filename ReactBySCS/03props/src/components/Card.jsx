
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
