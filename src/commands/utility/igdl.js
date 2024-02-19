bot.functionManager.createFunction({
    name: "igdl",
    type: "djs",
    code: async (message, args) => {
    if (args.length === 0) {
      message.channel.send("**[ERROR]**: Mohon kirim link Instagram.");
      return;
    }

    const link = args[0]; // Mengambil link Instagram dari pesan pengguna

    try {
      const links = await instagramGetUrl(link);
      console.log(links);
      message.channel.send(links); // Mengirim hasil ke channel Discord
    } catch (error) {
      console.error(error);
      message.channel.send("Terjadi kesalahan saat mengambil link Instagram.");
    }
  }
});