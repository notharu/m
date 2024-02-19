module.exports = [{
        name: "function",
        aliases: ["func"],
        code: `
    $addButton[1;Source Code;link;$nonEscape[$replacetext[$nonEscape[$getObjectProperty[src]];Source Code not found.;https://aoi.js.org/docs]];false]
    $addButton[1;Documentation;link;$nonEscape[$replacetext[$nonEscape[$getObjectProperty[link]];Documentation not found.;https://aoi.js.org/docs]];false]
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $title[$advancedTextSplit[$getObjectProperty[usage];[;1]]
    $a ectProperty[link] "aoi.js documentation") instead.*]]
    $addField[Usage;\`$replaceText[$getObjectProperty[usage];\r;]\`]
    $addField[Description;$getObjectProperty[desc]]
    $color[$getGuildVar[color]]
    $addTimestamp
    $onlyIf[$getObjectProperty[err]!=DOCS NOT FOUND||$getObjectProperty[err]!=Documentation not found.;]
    $createObject[$jsonRequest[http://pnode1.danbot.host:1463/api/aoijs/function?name=$message]]
    $onlyIf[$checkContains[$message[1];$]==true;]
    $suppressErrors
    `
}]