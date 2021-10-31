import { databaseService } from './database.service';

async function _fetchActions(actionIds) {
    const { actions } = await databaseService.query()
    return actionIds.map(id => actions.find(action => action.id === id))
}

const actionMap = new Map();

async function getActions(actionIds) {
    const key = JSON.stringify(actionIds);
    var actions = actionMap.get(key)
    if (!actions) {
        actions = await _fetchActions(actionIds)
        actionMap.set(key, actions)
    }
    return actions
}

// getActions performance results
// First item fetching: 0.221923828125 ms
// Second item fetching: 0.13916015625 ms
// First item refetch: 0.009033203125 ms
// Second item refetch: 0.006103515625 ms


export const actionService = {
    getActions
}
