import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const searchInput = event => {
    const {searchInputGetProduct} = props
    if (event.key === 'Enter') {
      searchInputGetProduct()
    }
  }
  const changeSearchInputEl = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const onClickFilterBtn = () => {
    const {onClickClearButtonTrigger} = props
    onClickClearButtonTrigger()
  }
  const renderCategoryOptions = () => {
    const {categoryOptions, changecategoryOptions} = props
    return (
      <div className="filtersgroup_categoryContainer">
        <h1 className="filtersgroup_category_heading">Category</h1>
        <ul className="filtersgroup_category_ListContainer">
          {categoryOptions.map(eachItem => {
            const {activecategoryOptions} = props
            const ActiveFilter =
              activecategoryOptions === eachItem.categoryId
                ? 'ActiveFilterEl'
                : null
            const changecategory = () => {
              changecategoryOptions(eachItem.categoryId)
            }
            return (
              <li onClick={changecategory} key={eachItem.categoryId}>
                <p className={`filtersgroup_category_para ${ActiveFilter}`}>
                  {eachItem.name}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  const renderRatingOptions = () => {
    const {ratingsList, changeRatingOptions} = props
    return (
      <div className="filtersgroup_categoryContainer">
        <h1 className="filtersgroup_rating_heading">Rating</h1>
        <ul className="filtersgroup_rating_ListContainer">
          {ratingsList.map(eachItem => {
            const {activeratingsList} = props
            const ActiveRatingFilter =
              activeratingsList === eachItem.ratingId ? 'ActiveFilterEl' : null
            const changefilter = () => {
              changeRatingOptions(eachItem.ratingId)
            }
            return (
              <li
                className="listItem"
                key={eachItem.ratingId}
                onClick={changefilter}
              >
                <img
                  src={eachItem.imageUrl}
                  className="filtersgroup_rating_image"
                  alt={`rating ${eachItem.ratingId}`}
                />
                <p className={`filtersgroup_rating_para ${ActiveRatingFilter}`}>
                  & UP
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  return (
    <div className="filters-group-container">
      <div className="filtersgroup_searchContainer">
        <input
          type="search"
          placeholder="Search"
          className="filtersgroup_searchinput"
          onChange={changeSearchInputEl}
          onKeyDown={searchInput}
        />
        <BsSearch />
      </div>
      {renderCategoryOptions()}
      {renderRatingOptions()}
      <button type="button" className="BtnEl" onClick={onClickFilterBtn}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
