import React from "react";

export const Menuone = (props) => {
    const onDishSelect=(dish)=>{
        alert(
            `id: ${dish.id}, name: ${dish.name}`
        )
    }
    const state = {
        dishes: [
            {
                id: 0,
                name: 'Uthappizza',
                image: 'assets/images/uthappizza.png',
                category: 'mains',
                label: 'Hot',
                price: '4.99',
                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
            },
            {
                id: 1,
                name: 'Zucchipakoda',
                image: 'assets/images/zucchipakoda.png',
                category: 'appetizer',
                label: '',
                price: '1.99',
                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
            },
            {
                id: 2,
                name: 'Vadonut',
                image: 'assets/images/vadonut.png',
                category: 'appetizer',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
            },
            {
                id: 3,
                name: 'ElaiCheese Cake',
                image: 'assets/images/elaicheesecake.png',
                category: 'dessert',
                label: '',
                price: '2.99',
                description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
            }
        ]
    };

    return (
        <div className="container">
            <h3>Menu Table</h3>
            <table>
                <thead></thead>
                <tbody>
                    {
                        state.dishes.map(dish=>{
                            return(
                                <tr key={dish.id} onClick={()=>onDishSelect(dish)}>
                                    <td><img src={dish.image}  alt={dish.name}></img></td>
                                    <td>{dish.description}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}