import { Component } from "react";
import { ResourceList } from "./resource-cmps/ResourceList";
import { ResourceSearch } from './resource-cmps/ResourceSearch';

export class AppMenu extends Component {
    render() {
        const { resources, selectedResource, onSetFilter, onSelectResource } = this.props;
        return (
            <section className="app-menu flex column">
                <div className="app-menu-top flex column gap">
                    <h1>My Resources</h1>
                    <ResourceSearch onSetFilter={onSetFilter} />
                </div>
                <ResourceList
                    resources={resources}
                    selectedResource={selectedResource}
                    onSelectResource={onSelectResource} />
            </section>
        )
    }
}