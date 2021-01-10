// Generated from src/pattern/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalcLexer extends Lexer {
	public static readonly PLUS = 1;
	public static readonly MINUS = 2;
	public static readonly ASTERISK = 3;
	public static readonly DIVIDE = 4;
	public static readonly NUMBER = 5;
	public static readonly SCIENTIFIC_NUMBER = 6;
	public static readonly PI = 7;
	public static readonly E = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly WS = 11;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"PLUS", "MINUS", "ASTERISK", "DIVIDE", "NUMBER", "SCIENTIFIC_NUMBER", 
		"PI", "E", "LPAREN", "RPAREN", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'*'", "'/'", undefined, undefined, undefined, 
		"'e'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "MINUS", "ASTERISK", "DIVIDE", "NUMBER", "SCIENTIFIC_NUMBER", 
		"PI", "E", "LPAREN", "RPAREN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcLexer._LITERAL_NAMES, CalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rZ\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x06\x06#" +
		"\n\x06\r\x06\x0E\x06$\x03\x06\x03\x06\x07\x06)\n\x06\f\x06\x0E\x06,\v" +
		"\x06\x05\x06.\n\x06\x03\x07\x06\x071\n\x07\r\x07\x0E\x072\x03\x07\x03" +
		"\x07\x07\x077\n\x07\f\x07\x0E\x07:\v\x07\x05\x07<\n\x07\x03\x07\x03\x07" +
		"\x05\x07@\n\x07\x03\x07\x06\x07C\n\x07\r\x07\x0E\x07D\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\bL\n\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x06" +
		"\fU\n\f\r\f\x0E\fV\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x03\x02\x04\x03\x022;\x05\x02\v\f\x0F\x0F\"\"\x02d\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1B" +
		"\x03\x02\x02\x02\x07\x1D\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v\"\x03" +
		"\x02\x02\x02\r0\x03\x02\x02\x02\x0FK\x03\x02\x02\x02\x11M\x03\x02\x02" +
		"\x02\x13O\x03\x02\x02\x02\x15Q\x03\x02\x02\x02\x17T\x03\x02\x02\x02\x19" +
		"\x1A\x07-\x02\x02\x1A\x04\x03\x02\x02\x02\x1B\x1C\x07/\x02\x02\x1C\x06" +
		"\x03\x02\x02\x02\x1D\x1E\x07,\x02\x02\x1E\b\x03\x02\x02\x02\x1F \x071" +
		"\x02\x02 \n\x03\x02\x02\x02!#\t\x02\x02\x02\"!\x03\x02\x02\x02#$\x03\x02" +
		"\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%-\x03\x02\x02\x02&*\x07" +
		"0\x02\x02\')\t\x02\x02\x02(\'\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03" +
		"\x02\x02\x02*+\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02-&\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02.\f\x03\x02\x02\x02/1\t\x02\x02\x020/\x03" +
		"\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x023;\x03" +
		"\x02\x02\x0248\x070\x02\x0257\t\x02\x02\x0265\x03\x02\x02\x027:\x03\x02" +
		"\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02" +
		"\x02\x02;4\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x07G" +
		"\x02\x02>@\x07/\x02\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02" +
		"\x02\x02AC\t\x02\x02\x02BA\x03\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02DE\x03\x02\x02\x02E\x0E\x03\x02\x02\x02FL\x07\u03C2\x02\x02GH" +
		"\x07r\x02\x02HL\x07k\x02\x02IJ\x07R\x02\x02JL\x07K\x02\x02KF\x03\x02\x02" +
		"\x02KG\x03\x02\x02\x02KI\x03\x02\x02\x02L\x10\x03\x02\x02\x02MN\x07g\x02" +
		"\x02N\x12\x03\x02\x02\x02OP\x07*\x02\x02P\x14\x03\x02\x02\x02QR\x07+\x02" +
		"\x02R\x16\x03\x02\x02\x02SU\t\x03\x02\x02TS\x03\x02\x02\x02UV\x03\x02" +
		"\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02XY\b\f\x02" +
		"\x02Y\x18\x03\x02\x02\x02\r\x02$*-28;?DKV\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

