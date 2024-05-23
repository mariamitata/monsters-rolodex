import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'
class CardList extends Component {

    render() {
        const { monsters } =  this.props
        return (
            <div className="card-list">
                   {monsters.map((monster) => {
                    const {id, name, email} = monster;
                   return (
                    <div className="card-container" key={id}>
                    <img className={`monster ${name}`} src={`https://www.robohash.org/${id}?set=set2&size=180x180`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    </div>
                )})}
            </div>
        );
    }
}

export default CardList;