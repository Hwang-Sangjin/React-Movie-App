

function Input({value,onChange,type,placeholder}){


    return(
        <input value={value} onChange={onChange} type = {type} placeholder={placeholder}></input>
    )
}

export default Input;