const acceptedWords = Object.freeze({
    HELP: Symbol('help'),
    LS: Symbol('ls'),
    DIR: Symbol('dir'),
    CD: Symbol('cd')
});

const tokenTypes = Object.freeze({
    WORD: Symbol('word'),
    NUMBER: Symbol('number'),
    OPERATOR: Symbol('operator'),
    LPAREN: Symbol('leftParenthesis'),
    RPAREN: Symbol('rightParenthesis')
});

class Token {
    constructor(tokenType, data) {
        if (tokenType in tokenTypes) {
            this.type = tokenType;
            this.data = data;
        } else {
            console.error('Unknown token type!');
        }
    }

    get tokenType() {
        return this.type;
    }

    get tokenData() {
        return this.data;
    }

    toString() {
        return `${this.type}[${this.data}]`;
    }
}

const isCharDigit = n => n < 58 && n >= 48;
const isCharCodeLetter = n => (n >= 65 && n < 91) || (n >= 97 && n < 123);

function lex(text) {
    let start = 0;
    let end;
    const result = [];

    for (; start < text.length; start = end) {
        const currentChar = text.charAt(start);
        const currentCharCode = text.charCodeAt(start);
        end = start + 1;

        if (isCharDigit(currentCharCode)) {
            for (; end < text.length && isCharDigit(text.charCodeAt(end)); end++)
            {}
            result.push(new Token('NUMBER', text.substr(start, end - start)));
        } else if (isCharCodeLetter(currentCharCode)) {
            for (; end < text.length && isCharCodeLetter(text.charCodeAt(end)); end++)
            {}
            result.push(new Token('WORD', text.substr(start, end - start)));
        } else switch (currentChar) {
            case '(':
                result.push(new Token('LPAREN', currentChar.toString()));
                break;
            case ')':
                result.push(new Token('RPAREN', currentChar.toString()));
                break;
            default:
                if (currentChar === '+' | currentChar === '-' | currentChar === '*' | currentChar === '/')
                {
                    result.push(new Token('OPERATOR', currentChar.toString()));
                }
                else
                {
                    console.error(`Could not lex: ${currentChar}`);
                }
                break;
        }
    }
    return result;
}

export  {
    lex,
    acceptedWords,
    tokenTypes
};
