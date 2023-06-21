import {useState} from "react";

export default function SelectList() {

    const [coffees, setCoffees] = useState([
            {key: 1, coffee: "IceCoffee"},
            {key: 2, coffee: "GreenColdCoffee"},
            {key: 3, coffee: "HotCoffee"},
            {key: 4, coffee: "GodCoffee"}
        ]
    );

    const [select, setSelect] = useState(0);

    const selectCoffee = coffees.find(coffee =>
        coffee.key === +select
    )

    return (
        <div>
            <label>
                Choose your coffee
                <select className="form-select mt-2"
                        aria-label="Floating label disabled select example" value={select}
                        onChange={e => setSelect(e.target.value)}>
                    <option value="0" disabled>Open this select menu</option>
                    {coffees.map(coffee => (
                        <option value={coffee.key} key={coffee.key}>{coffee.coffee}</option>
                    ))}
                </select>
            </label>
            {select > 0 &&
                <span
                    className="d-block my-2 text-success">{selectCoffee && selectCoffee.coffee} is a good choice!</span>}
        </div>
    );
}