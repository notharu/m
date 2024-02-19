const axios = require('axios');

async function getChatGPTResponse(message) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      prompt: message.content,
      max_tokens: 50, // Jumlah token maksimum dalam respons
      temperature: 0.6, // Semakin tinggi nilainya, semakin acak responsnya
      n: 1, // Jumlah respons yang dihasilkan
      stop: '\n', // Tanda berhenti untuk mengakhiri respons
    }, {
      headers: {
        'Authorization': 'Bearer ',const mySecret = process.env['chatp']
        'Content-Type': 'application/json',
      },
    });

    const chatGPTResponse = response.data.choices[0].text.trim();
    return chatGPTResponse;
  } catch (error) {
    console.error('Error:', error);
    return 'Maaf, terjadi kesalahan dalam memproses permintaan.';
  }
}

module.exports = {
  getChatGPTResponse,
};