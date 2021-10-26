import { Component } from 'react';
import { ResourceHeader } from './resource-info-cmps/ResourceHeader';
import { ResourceDetails } from './resource-info-cmps/ResourceDetails';
import { ResourceActions } from './resource-info-cmps/ResourceActions';

export class ResourceInfo extends Component {
  render() {
    const { resource } = this.props;
    return (
      <section className="resource-info" >
        <div className="resource-container flex column">
          <ResourceHeader headerInfo={{ name: resource.name, description: resource.description }} />
          <div className="resource-inner-container flex">
            <ResourceDetails resource={resource} />
            <ResourceActions actionIds={resource.actionIds} />
          </div>
        </div>
      </section>
    )
  }
}
