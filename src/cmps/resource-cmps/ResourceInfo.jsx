import { Component } from 'react';
import { ResourceHeader } from './resource-info-cmps/ResourceHeader';
import { ResourceDetails } from './resource-info-cmps/ResourceDetails';
import { ResourceActions } from './resource-info-cmps/ResourceActions';

export class ResourceInfo extends Component {
  render() {
    const resource = {
      "id": "1",
      "name": "Item 1",
      "description": "This is Item 1 description",
      "resourceType": "x resource type 1",
      "path": "servers/security/resources/item_1",
      "actionIds": ["1", "2", "3", "4", "5"]
    }
    const { name, description } = resource;
    return (
      <section className="resource-info" >
        <div className="resource-container flex column">
          <ResourceHeader headerInfo={{ name, description }} />
          <div className="resource-inner-container flex">
            <ResourceDetails />
            <ResourceActions />
          </div>
        </div>
      </section>
    )
  }
}
