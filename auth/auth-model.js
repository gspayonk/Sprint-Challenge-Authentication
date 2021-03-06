const db = require('../database/dbConfig.js');

module.exports = {
    register,
    remove,
    find,
    findBy,
    findById,
};

function find() {
    return db('users')
    .select('id', 'username');
}

function findBy(filter) {
    return db('users')
    .where(filter);
}

async function register(user) {
    const [id] = await db('users')
    .insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

async function remove(id) {
    const [deleted] = await findById('id')

    await db('users')
    .where({ id })
    .del();

    return deleted;
}
