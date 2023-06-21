import Input from './formComponents/Input.jsx'
import Radio from "./formComponents/Radio.jsx";
import SelectList from "./formComponents/SelectList.jsx";

function App() {

    return (
        <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <Input/>
            <Radio/>
            <SelectList/>
        </div>
    )
}

export default App