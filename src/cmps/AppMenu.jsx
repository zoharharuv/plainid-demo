import { ResourceList } from "./resource-cmps/ResourceList";
import { ResourceSearch } from './resource-cmps/ResourceSearch';
import arrow from '../assets/img/arrow-right.svg'
import { memo } from "react";

export const AppMenu = memo(function _AppMenu({
    isMenuShown,
    toggleMenu,
    resources,
    selectedResource,
    filterBy,
    handleChange,
    onSelectResource }) {
    return (
        <section className={`app-menu flex column ${isMenuShown ? 'open' : ''}`}>
            <div className="app-menu-top flex column gap">
                <h1>My Resources</h1>
                <ResourceSearch
                    filterBy={filterBy}
                    handleChange={handleChange} />
            </div>
            <ResourceList
                resources={resources}
                selectedResource={selectedResource}
                onSelectResource={onSelectResource} />
            <span className="toggle-btn" onClick={toggleMenu}><img src={arrow} alt="arrow" /></span>
        </section>
    )
})