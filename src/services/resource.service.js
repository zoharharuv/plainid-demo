import { databaseService } from './database.service';

async function getResources(filter = null) {
    const {resources} = await databaseService.getDatabase()
    return resources;
}


export const resourceService = {
    getResources
}
