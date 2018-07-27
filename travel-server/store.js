/**
 * session仓库
 */

const fs = require('fs');
const path = require('path');

module.exports = {

    get(key) {

        const sessionDir = path.resolve(__dirname, './session');
        const files = fs.readdirSync(sessionDir);
        for (let i = 0; i < files.length; i++) {
            if (files[i].startsWith(key)) {
                const filepath = path.resolve(sessionDir, files[i]);
                delete require.cache[require.resolve(filepath)];
                const result = require(filepath);
                return result;
            }
        }
    },

    set(key, session) {

        const filePath = path.resolve(__dirname, './session', `${key}.js`);
        const content = `module.exports = ${JSON.stringify(session)};`;
        fs.writeFileSync(filePath, content);
    },

    destroy(key) {
        const filePath = path.resolve(__dirname, './session', `${key}.js`);
        fs.unlinkSync(filePath);
    }
}