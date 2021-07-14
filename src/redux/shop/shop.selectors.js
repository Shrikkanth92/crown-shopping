import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const CATEGORY_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectCategory = memoize(collectionUrl => createSelector(
    [selectShopCollection],
    categories => categories.find(category => category.id === CATEGORY_ID_MAP[collectionUrl])
));