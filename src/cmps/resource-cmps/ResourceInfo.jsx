import { memo } from 'react';
import { ResourceHeader } from './resource-info-cmps/ResourceHeader';
import { ResourceDetails } from './resource-info-cmps/ResourceDetails';
import { ActionsMenu } from './resource-info-cmps/ActionsMenu';

export const ResourceInfo = memo(function _ResourceInfo({ resource }) {
  const { name,
    description,
    resourceType,
    path,
    actionIds } = resource
  return (
    <section className="resource-info" >
      <div className="resource-container flex column">
        <ResourceHeader headerInfo={{ name, description }} />
        <div className="resource-inner-container flex">
          <ResourceDetails details={{
            name,
            description,
            'resource type': resourceType,
            path
          }} />
          {actionIds && <ActionsMenu actionIds={actionIds} />}
        </div>
      </div>
    </section>
  )
})
