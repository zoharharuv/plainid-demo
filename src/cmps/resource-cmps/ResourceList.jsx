import { ResourcePreview } from './ResourcePreview';

export function ResourceList({ resources, selectedResource, onSelectResource }) {
    return (
        <section className="resource-list flex column">
            {resources.length ? resources.map(resource => <ResourcePreview
                key={resource.id}
                resource={resource}
                selectedResource={selectedResource}
                onSelectResource={onSelectResource} />)
                : <h1>No resources found!</h1>}
        </section>
    )
}