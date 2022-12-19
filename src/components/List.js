import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BRF" ano_lancamento={2018}></Item>
                <Item marca="JBS" ano_lancamento={2019}></Item>
                <Item></Item>
            </ul>
        </>
    )
}
export default List