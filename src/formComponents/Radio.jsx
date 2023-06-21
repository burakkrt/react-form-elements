import {useState} from "react";

export default function Radio() {

    const [radio, setRadio] = useState([
        {key: 1, value: "I want extra milk", checked: false},
        {key: 2, value: "I don't want extra milk", checked: true}
    ]);

    const milkHandler = (key, checked) => {
        setRadio(radios => radios.map(radio => {
                if (radio.key === key) {
                    radio.checked = checked;
                } else radio.checked = !checked
                return radio;
            }
        ))
    }

    return (
        <>
            <div className="d-flex gap-5 my-3">
                {radio.map(object => (
                    <div className="form-check" key={object.key}>
                        <label className="form-check-label">
                            {object.value}
                            <input className="form-check-input" type="radio" checked={object.checked}
                                   onChange={e => milkHandler(object.key, e.target.checked)}/>
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <pre>
                    {JSON.stringify(radio, null, 2)}
                </pre>
            </div>
        </>
    );
}