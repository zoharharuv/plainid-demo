const gDatabase = require('./data.json');

async function getDatabase(){
    return gDatabase
}

export const databaseService = {
    getDatabase
}
