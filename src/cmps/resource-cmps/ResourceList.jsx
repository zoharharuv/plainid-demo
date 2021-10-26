import { Component } from "react";
import { ResourcePreview } from './ResourcePreview';

export class ResourceList extends Component {
    render() {
        const { resources, selectedResource, onSelectResource } = this.props
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
}