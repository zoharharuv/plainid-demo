import { Component } from 'react';

export class ResourceHeader extends Component {
    render() {
        const { name, description } = this.props.headerInfo
        return (
            <section className="resource-header padding15" >
                <h1>{name}</h1>
                <p>{description}</p>
            </section>
        )
    }
}
