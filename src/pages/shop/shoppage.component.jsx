import React from 'react';
import { SHOP_DATA } from './shop.data';
import { CollectionPreview } from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA,
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(collection => (
                        <CollectionPreview title={collection.title} items={collection.items}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;