import { ResourceList } from "./resource-cmps/ResourceList";
import { ResourceSearch } from './resource-cmps/ResourceSearch';
import arrow from '../assets/img/arrow-right.svg'

export function AppMenu({ 
    isMenuShown, 
    toggleMenu,
    resources, 
    selectedResource, 
    onSetFilter, 
    onSelectResource }) {
    return (
        <section className={`app-menu flex column ${isMenuShown ? 'open' : ''}`}>
            <div className="app-menu-top flex column gap">
                <h1>My Resources</h1>
                <ResourceSearch onSetFilter={onSetFilter} />
            </div>
            <ResourceList
                resources={resources}
                selectedResource={selectedResource}
                onSelectResource={onSelectResource} />
                <span class="toggle-btn" onClick={toggleMenu}><img src={arrow} alt="arrow" /></span>
        </section>
    )
}