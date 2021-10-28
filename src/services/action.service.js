import { databaseService } from './database.service';
import { resourceService } from './resource.service';

async function getActions(actionIds) {
    const { actions } = await databaseService.query()
    return actionIds.map(id => actions.find(action => action.id === id))
}

const resourceIdActionsMap = new Map();

async function getResourceIdActionsMap() {
    if (!resourceIdActionsMap.size) {
        const resources = await resourceService.getResources()
        for (const resource of resources) {
            const actions = await getActions(resource.actionIds)
            resourceIdActionsMap.set(resource.id, actions)
        }
    }
    return resourceIdActionsMap
}


export const actionService = {
    getResourceIdActionsMap,
    getActions
}
