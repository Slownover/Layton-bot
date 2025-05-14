module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log('Je suis prêt!');

    const devGuild = client.guilds.cache.get('YOUR SERVER ID HERE');
    devGuild.commands.set(client.commands.map(cmd => cmd));
  },
};
