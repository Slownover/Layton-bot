const Logger = require('../../utils/Logger');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    Logger.client('- prêt à être utilisé');

    // const devGuild = client.guilds.cache.get('YOUR SERVER ID HERE');
    const devGuild = client.guilds.cache.get('1369247304145436693');
    devGuild.commands.set(client.commands.map(cmd => cmd));
  },
};
