class Scanner {
    constructor(content) {
        this.content = content;
        this.position = 0;
        this.currentCharacter = content.charAt(this.position);
    }

    Advance() {
        this.position++;
        if(this.position > this.content.length)
            this.currentCharacter = null;
        else 
            this.currentCharacter = this.content.charAt(this.position);
    }

    SkipWhitespace() {
        while(!isWhitespace(this.currentCharacter) && this.currentCharacter)
            this.Advance();
    }

    Identifier() {
        let result = '';
        while(this.currentCharacter && isLetter(this.currentCharacter)) {
            result += this.currentCharacter;
            this.Advance();
        }
        return result;
    }

    Number() {
        let result = '';
        while(this.currentCharacter && isDigit(this.currentCharacter)) {
            result += this.currentCharacter;
            this.Advance();
        }
        return result;
    }

    NextToken() {
        while(this.currentCharacter) {
            if(isWhitespace(this.currentCharacter)) {
                this.SkipWhitespace();
                continue;
            }

            if(isLetter(this.currentCharacter)) {
                return this.Identifier();
            }

            if(isDigit(this.currentCharacter)) {
                return this.Number();
            }
        }
    }
}

function isWhitespace(character) {
    if(character === ' ')
        return true;
    return false;
}

function isDigit(character) {
    if(character >= '0' && character <= '9')
        return true;
    return false;
}

function isLetter(character) {
    if(character >= 'A' && character <= 'z')
        return true;
    return false;
}

module.exports = Scanner;