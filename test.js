import test from "ava"
import is from "@sindresorhus/is"
import defenderPath from "."

test("main", (t) => {
	if (process.platform === "win32") t.true(is.string(defenderPath))
	else t.true(is.null(defenderPath))
})
