import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections, updateLoading } from '../../redux/shop/shop.actions';
import { selectLoading } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections, updateLoading} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = await convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            updateLoading(false);
        });

    }

    render() {
        return (
            <div>
                <CollectionsOverviewWithSpinner isLoading={this.props.loading} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
    updateLoading: (loading) => dispatch(updateLoading(loading)),
});

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);