import ProductItem from './Product';

export default function ProductView(props) {
    return (
        <div>
            <ul>
                {props.productsList.map(product => <ProductItem product={product} />)}
            </ul>
        </div>
    )
}