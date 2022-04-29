import React, { useState } from "react";

export const Menutwo = (props) => {
    const[selectedDish, setSelectedDish]=useState('');
    const dishes = props.dishes.map(dish => {
        return (
            <tr key={dish.id} onClick={()=>onDishSelect(dish)}>
                <td><img src={dish.image} alt={dish.name}/></td>
                <td>
                    <div>{dish.name}</div>
                    <div>{dish.description}</div>
                </td>
            </tr>
        );
    });

    const onDishSelect=(dish)=>{
        setSelectedDish(dish);
    }

    const renderDish = (dish) => {
        if (dish != null) {
            return (
                <div>
                    <div><img src={dish.image} alt={dish.name}/></div>
                    <div>{dish.name}</div>
                    <div>{dish.description}</div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    let menu = (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    {dishes}
                </tbody>
            </table>
            <hr></hr>
            <div>
                {renderDish(selectedDish)}
            </div>
        </div>
    );
    return menu;
}