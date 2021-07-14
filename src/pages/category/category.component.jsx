import React from 'react';

import './category.styles.scss';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/shop/shop.selectors';
 
const CategoryPage = ({ category }) => {
    console.log(category);
    return (
    <div className='category-page'>
    </div>
);
}

const mapStateToProps = (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryId)(state),
});


export default connect(mapStateToProps)(CategoryPage);