import "./ProductCard.css"

const ProductCard = ([title, price=0, isRed, login]) =>{

    const saludar = () =>{
        console.log("Wena ");
    }

    const saludar2 = ( nombre) => {
        console.log("Wena " + nombre);
    }

    return (
        <div>
            <h1 className={ isRed ? "red" : "green"}> {title} </h1>
            <h2> {price}</h2>
            <button onClick={saludar}>Saludar</button>
            <button onClick={ () => saludar2("Kevin")}>Saludar dos</button>
            <button onClick={login}>Ingresar</button>
        </div>
    )
}

export default ProductCard