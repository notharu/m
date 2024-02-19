const { getChatGPTResponse } = require('./chatgpt.js');

module.exports = {
  name: 'chat',
  code: async (message) => {
    const response = await getChatGPTResponse(message);
    bot.sendMessage({
      content: response,
      messageReference: {
        messageID: message.id,
      },
    });
  },
};
