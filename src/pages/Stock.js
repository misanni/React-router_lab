function Stock(props){

    const symbol = props.match.params.symbol

    const stock = props.stocks.find((stock) => stock.symbol === symbol)

    return <div>
        <h3> Name: {stock.name}</h3>
        <h3>Price: {stock.lastPrice}</h3>
        
    </div>
}

export default Stock