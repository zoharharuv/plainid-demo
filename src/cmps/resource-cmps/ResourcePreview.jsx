import { Component } from "react";
import arrow from '../../assets/img/arrow-right.svg'
import active from '../../assets/img/active.svg'

export class ResourcePreview extends Component {
    render() {
        const { resource } = this.props
        return (
            <section className="resource-preview flex align-center space-between">
                <div className="resource-title align-center flex">
                    <img src={active} alt="active" />
                    <span>{resource.name}</span>
                </div>
                    <img src={arrow} alt="arrow" />
            </section>
        )
    }
}