module.exports = ({
name: "reject",
code: `
$getVar[yeah] Successfully marked suggestion as declined!
$addMessageReactions[854328513363443732;$message;$getVar[no]]
$clearReactions[854328513363443732;$message;all]
$onlyForServers[888053760348274710;]
`
})