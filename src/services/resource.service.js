import { databaseService } from './database.service';

async function getResources() {
    const {resources} = await databaseService.getDatabase()
    return resources;
}


export const resourceService = {
    getResources
}
