const Database = require("better-sqlite3");
const tokens = require("./tokens.json");
const config = require("./config.json");

const db = Database("./gitlab.db");
const userIds = Object.keys(tokens);
const query = db.prepare("INSERT INTO token (user_id, gitlab_server, api_token) VALUES (@userId, @server, @token) ON CONFLICT (user_id, gitlab_server) DO NOTHING");
for (const userId of userIds) {
    console.log(`Importing token for ${userId}`);
    query.run({
        userId: userId,
        server: config['gitlab']['domain'] || 'https://gitlab.com',
        token: tokens[userId],
    });
}

db.close();

console.log("Done");
