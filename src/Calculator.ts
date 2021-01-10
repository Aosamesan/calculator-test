import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import {CalcLexer} from './pattern/CalcLexer';
import {CalcParser} from './pattern/CalcParser';
import CalcListener from './pattern/CalculatorListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

export default async function calculate(input: string): Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            if (validateInput(input)) {
                const charStream: CharStream = CharStreams.fromString(input);
                const lexer: CalcLexer = new CalcLexer(charStream);
                const tokens: CommonTokenStream = new CommonTokenStream(lexer);
                const parser: CalcParser = new CalcParser(tokens);
                const listener: CalcListener = new CalcListener();
                const tree = parser.statement();
                ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree);
                if (listener.result.result) {
                    resolve(listener.result.result);
                    return;
                }
            }
            reject(new Error(`Invliad input : ${input}`));
        } catch (err) {
            reject(err);
        }
    });
}

function validateInput(input: string): boolean {
   let result = true;

   // check parenthesis
    result &&= checkParenthesis(input);

   return result;
}

function checkParenthesis(input: string): boolean {
    const stack = [];
    for (let s of input) {
        if (s === '(') {
            stack.push(s);
        }
        if (s === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}