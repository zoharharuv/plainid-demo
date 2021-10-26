import { Component } from "react";
import { ResourcePreview } from './ResourcePreview';

export class ResourceList extends Component {
    render() {
        const { resources } = this.props
        return (
            <section className="resource-list">
                {resources.length ? resources.map(resource => <ResourcePreview
                    key={resource.id}
                    resource={resource} />)
                    : <h1>No resources found!</h1>}
            </section>
        )
    }
}