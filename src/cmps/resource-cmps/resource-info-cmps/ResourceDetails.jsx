import { Component } from 'react';
import help from '../../../assets/img/help-12.svg'

export class ResourceDetails extends Component {
    render() {
        const {name, description, resourceType, path} = this.props.resource
        return (
            <section className="resource-details flex column card" >
                <div className="card-title flex align-center">
                    <span>
                        General Details
                    </span>
                    <img src={help} alt="help" />
                </div>
                <div className="card-info flex column">
                    <span className="details-info-label">Name</span>
                    <p className="card-row">{name}</p>
                    <span className="details-info-label">Description</span>
                    <p className="card-row">{description}</p>
                    <span className="details-info-label">Resource Type</span>
                    <p className="card-row">{resourceType}</p>
                    <span className="details-info-label">Path</span>
                    <p className="card-row">{path}</p>
                </div>
            </section>
        )
    }
}
