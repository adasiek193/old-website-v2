// FETCHING MY CURRENT AVATAR FROM DISCORD API (SCRIPT COMES FROM CZUBIX#7679 WEBSITE (CZUBIX.ME))

(async () => {
	const avatar = document.querySelector("#avatar-dc > img");
	const now = Date.now();

	if (
		!localStorage.getItem("avatarUrl") ||
		parseInt(now - localStorage.getItem("lastFetch")) > 5 * 60 * 1000
	) {
		const data = await (
			await fetch("https://discord.com/api/invites/P7yzQBEYUu")
		).json();

		localStorage.setItem(
			"avatarUrl",
			"https://cdn.discordapp.com/avatars/" +
				data.inviter.id +
				"/" +
				data.inviter.avatar +
				".png"
		);
		localStorage.setItem("lastFetch", now);
	}

	avatarUrl = localStorage.getItem("avatarUrl");

	avatar.src = avatarUrl;
})();
