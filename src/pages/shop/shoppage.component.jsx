import React from 'react';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collection-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    unsubsctibeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
        });

    }

    render() {
        return (
            <div>
                <CollectionsOverview />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);