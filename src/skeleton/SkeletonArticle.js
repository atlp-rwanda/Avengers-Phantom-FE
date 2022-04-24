import React from 'react'
import SkeletonElement from './SkeletonElement.js'
import Shimmer from './shimmer.js'
const SkeletonArticle = ({ theme }) => {
    const themeClass = theme || "light"
    return (
        <div className={`Skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonArticle