import { Component } from "react";
import { ResourceList } from "./ResourceList";

export class AppMenu extends Component {
    render() {
        const { resources } = this.props;
        return (
            <section className="app-menu flex column">
                <ResourceList resource={resources} />
            </section>
        )
    }
}