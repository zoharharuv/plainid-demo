import { Component } from 'react';
import help from '../../../assets/img/help-12.svg'

export class ResourceDetails extends Component {
    render() {
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
                    <p className="card-row">x resource</p>
                    <span className="details-info-label">Description</span>
                    <p className="card-row">11</p>
                    <span className="details-info-label">Resource Type</span>
                    <p className="card-row">x resource type</p>
                    <span className="details-info-label">Path</span>
                    <p className="card-row">aa</p>
                </div>
            </section>
        )
    }
}
