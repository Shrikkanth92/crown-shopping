import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = ({ dataLoaded }) =>  (
    <div>
        <CollectionsOverviewWithSpinner isLoading={!dataLoaded} />
    </div>
)
    



const mapStateToProps = createStructuredSelector({
    dataLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps)(ShopPage);