import {useState} from "react";

export default function Checkbox() {

    const [check, setCheck] = useState(false);

    return (
        <div className="form-check">

            <label className="form-check-label">
                I have read and approved the privacy policy and user agreement.
                <input className="form-check-input" type="checkbox" value={check}
                       onChange={e => setCheck(e.target.checked)}/>
            </label>
            <button className="btn btn-secondary m-2" disabled={!check}>Continue</button>
        </div>
    );
}