import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import { CollectionPreview } from '../preview-collection/preview-collection.component';
import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
    {
        collections.map(collection => (
            <CollectionPreview title={collection.title} items={collection.items}></CollectionPreview>
        ))
    }
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection,
});


export default connect(mapStateToProps)(CollectionsOverview);