import arrow from '../../assets/img/arrow-right.svg'
import active from '../../assets/img/active.svg'

export function ResourcePreview({ resource, selectedResource, onSelectResource }) {
    const isActive = resource.id === selectedResource?.id;
    return (
        <section className={`resource-preview flex align-center space-between ${isActive ? 'active' : ''}`}
            onClick={() => onSelectResource(resource)}>
            <div className="resource-title align-center flex">
                <img src={active} alt="active" />
                <span>{resource.name}</span>
            </div>
            <img src={arrow} alt="arrow" />
        </section>
    )
}