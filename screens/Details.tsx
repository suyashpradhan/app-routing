import {ProductDetails} from "../components/ProductDetails";

const Details = ({route}: { route: any }) => {
    const itemId = route.params.itemId;

    return <ProductDetails itemId={itemId}/>
}

export default Details;