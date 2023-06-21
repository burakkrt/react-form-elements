import {useState} from "react";

export default function Input() {

    const [input, setInput] = useState("");

    return (
        <div>
            <label className="input-group">
                <span className="input-group-text">Username</span>
                <input className="form-control" type="text" value={input} onChange={e => setInput(e.target.value)}/>
                {input !== "" ? <span className="input-group-text">{input}</span> : null}
            </label>
        </div>
    );
}