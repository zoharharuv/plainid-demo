import { memo } from 'react';
import { ResourceHeader } from './resource-info-cmps/ResourceHeader';
import { ResourceDetails } from './resource-info-cmps/ResourceDetails';
import { ResourceActions } from './resource-info-cmps/ResourceActions';

export const ResourceInfo = memo(function _ResourceInfo({ resource }) {
  return (
    <section className="resource-info" >
      <div className="resource-container flex column">
        <ResourceHeader headerInfo={{ name: resource.name, description: resource.description }} />
        <div className="resource-inner-container flex">
          <ResourceDetails resource={resource} />
          <ResourceActions resource={resource} />
        </div>
      </div>
    </section>
  )
})
