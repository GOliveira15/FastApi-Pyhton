import ProductItem from './Product';

export default function ProductView(props) {
    return (
        <div>
            {props.productsList.map(product => <ProductItem product={product} />)}
        </div>
    )
}