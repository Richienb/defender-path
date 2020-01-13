"use strict"

const path = require("path")
const fs = require("fs")

module.exports = (() => {
	// Current OS isn't Windows.
	if (process.platform !== "win32") return null

	// Join directory.
	const dir = path.resolve(process.env.ProgramFiles, "Windows Defender", "MpCmdRun.exe")

	// Joined directory doesn't exist.
	if (!fs.existsSync(dir)) return null

	// Return directory.
	return dir
})()
