const gDatabase = require('../data/data.json');

async function getDatabase(){
    return gDatabase
}

export const databaseService = {
    getDatabase
}
