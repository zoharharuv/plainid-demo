import { databaseService } from './database.service';

async function getActions() {
    const { actions } = await databaseService.getDatabase()
    return actions;
}


export const resourceService = {
    getActions
}
