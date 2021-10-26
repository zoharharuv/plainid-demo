import { databaseService } from './database.service';

async function getActions(actionIds) {
    const { actions } = await databaseService.getDatabase()
    const res = actionIds.map(id => actions.find(action => action.id === id))
    console.log("🚀 ~ file: action.service.js ~ line 6 ~ getActions ~ res", res)
}

export const actionService = {
    getActions
}
