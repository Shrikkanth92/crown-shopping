import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';



const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectCategory = memoize(collectionUrl => createSelector(
    [selectShopCollection],
    categories => categories ? categories[collectionUrl] : null
));

export const selectCategoryForPreview = createSelector(
    [selectShopCollection],
    categories => categories ? Object.keys(categories).map(key => categories[key]) : [],
);

export const selectLoading = createSelector(
  [selectShop],
  shop => shop.loading,
);