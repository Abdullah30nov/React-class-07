const Input =({label,type,onChange,value})=>{
    return(
        <>
        <div>
            <label>{label}</label><br />
            <input type={type} value={value} onChange={onChange}/><br/>
        </div><br/>
        </>
    )
}

export default Input;