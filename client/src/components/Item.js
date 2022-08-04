import ItemCard from './ItemCard';

const Item = ({ itemData }) => {
    // display item cards
    // console.log(itemData)
    const itemCard = itemData.map((i) => {
        return <ItemCard itemId={i.id} itemData={i} key={i.id} />
    })
    return (
        <div className='container'>
            {itemCard}
        </div>
    )
}

export default Item;