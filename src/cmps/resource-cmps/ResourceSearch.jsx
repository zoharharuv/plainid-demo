import { memo } from 'react'
import search from '../../assets/img/search.svg'

export const ResourceSearch = memo(function _ResourceSearch({ filterBy, handleChange }) {
    return (
        <section className="resource-search">
            <div className="search-bar">
                <input
                    onChange={handleChange}
                    value={filterBy}
                    type="text"
                    placeholder="Search Resource"
                    autoComplete="off" />
                <img src={search} alt="search" />
            </div>
        </section>
    )
})