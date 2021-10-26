import { databaseService } from './database.service';

async function getResources(filter = null) {
    const { resources } = await databaseService.getDatabase()
    if (!filter) return resources;
    const regex = new RegExp(filter, 'i');
    return resources.filter(resource => regex.test(resource.name));
}


export const resourceService = {
    getResources
}
