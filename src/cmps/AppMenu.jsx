import { Component } from "react";
import { ResourceList } from "./resource-cmps/ResourceList";
import { ResourceSearch } from './resource-cmps/ResourceSearch';

export class AppMenu extends Component {
    render() {
        const { resources, onSetFilter } = this.props;
        return (
            <section className="app-menu flex column">
                <h1>My Resources</h1>
                <ResourceSearch onSetFilter={onSetFilter}/>
                <ResourceList resources={resources} />
            </section>
        )
    }
}