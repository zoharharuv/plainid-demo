import { Component } from "react";

export class ResourcePreview extends Component {
    render() {
        const { resource } = this.props
        return (
            <section className="resource-preview">
                <div className="resource-card flex align-center space-between">
                    <img src={resource.imgUrl} />
                    <div className="resource-details flex col align-center gap" >
                        <span>{resource.title}</span>
                        <span>{resource.description}</span>
                        <span>Date: {resource.publishedAt.substring(0, 10)}</span>
                    </div>
                </div>
            </section>
        )
    }
}