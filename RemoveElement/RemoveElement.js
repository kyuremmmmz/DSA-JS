var lengthOfLastWord = function (s) {
    let length = 0;
    let index = s.length - 1;
    while (index >= 0 && s[index] == ' ') {
        index -= 1
    }
    while (index >= 0 && s[index] != ' ') {
        length += 1;
        index -= 1;
    }
    console.log(length);
    return length


};
lengthOfLastWord("luffy is still joyboy")