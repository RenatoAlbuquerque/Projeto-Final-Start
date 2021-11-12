import './style.scss';


const SkeletonCard = () => {
  return (
    <div className="loadingCard">
      <div className="loadingImage"></div>
      <div className="loadingRowOne">
        <div className="loadingName"></div>
        <div className="loadingBrand"></div>
        <div className="loadingCategory"></div>
        <div className="loadingPrice"></div>
        <div className="loadingRating"></div>
      </div>
      <div className="loadingGapDetail">
        <div className="loadingDetail"></div>
      </div>
    </div>
  )

}

const LoadingSkeleton = () => {
  return (
    <SkeletonCard />
  )
}
export default LoadingSkeleton