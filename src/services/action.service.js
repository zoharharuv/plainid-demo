import { databaseService } from './database.service';

async function getActions(actionIds) {
    const { actions } = await databaseService.query()
    return actionIds.map(id => actions.find(action => action.id === id))
}

export const actionService = {
    getActions
}
