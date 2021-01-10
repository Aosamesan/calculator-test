// Generated from src/pattern/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CalcListener } from "./CalcListener";

export class CalcParser extends Parser {
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
	public static readonly RULE_statement = 0;
	public static readonly RULE_rest_expression = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_rest_term = 3;
	public static readonly RULE_neg_term = 4;
	public static readonly RULE_term = 5;
	public static readonly RULE_number = 6;
	public static readonly RULE_constant = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "rest_expression", "expression", "rest_term", "neg_term", 
		"term", "number", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'*'", "'/'", undefined, undefined, undefined, 
		"'e'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "MINUS", "ASTERISK", "DIVIDE", "NUMBER", "SCIENTIFIC_NUMBER", 
		"PI", "E", "LPAREN", "RPAREN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcParser._LITERAL_NAMES, CalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalcParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.expression();
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.PLUS || _la === CalcParser.MINUS) {
				{
				{
				this.state = 17;
				this.rest_expression();
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rest_expression(): Rest_expressionContext {
		let _localctx: Rest_expressionContext = new Rest_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalcParser.RULE_rest_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === CalcParser.PLUS || _la === CalcParser.MINUS)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 24;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CalcParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.NUMBER:
			case CalcParser.SCIENTIFIC_NUMBER:
			case CalcParser.PI:
			case CalcParser.E:
			case CalcParser.LPAREN:
				{
				this.state = 26;
				this.term();
				}
				break;
			case CalcParser.MINUS:
				{
				this.state = 27;
				this.neg_term();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.ASTERISK || _la === CalcParser.DIVIDE) {
				{
				{
				this.state = 30;
				this.rest_term();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rest_term(): Rest_termContext {
		let _localctx: Rest_termContext = new Rest_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalcParser.RULE_rest_term);
		let _la: number;
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CalcParser.ASTERISK || _la === CalcParser.DIVIDE)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 37;
				this.term();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CalcParser.ASTERISK || _la === CalcParser.DIVIDE)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 39;
				this.neg_term();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public neg_term(): Neg_termContext {
		let _localctx: Neg_termContext = new Neg_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalcParser.RULE_neg_term);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(CalcParser.MINUS);
			this.state = 43;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcParser.RULE_term);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.NUMBER:
			case CalcParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 45;
				this.number();
				}
				break;
			case CalcParser.PI:
			case CalcParser.E:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 46;
				this.constant();
				}
				break;
			case CalcParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.match(CalcParser.LPAREN);
				this.state = 48;
				this.statement();
				this.state = 49;
				this.match(CalcParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CalcParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			_la = this._input.LA(1);
			if (!(_la === CalcParser.NUMBER || _la === CalcParser.SCIENTIFIC_NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CalcParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_la = this._input.LA(1);
			if (!(_la === CalcParser.PI || _la === CalcParser.E)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r<\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x07\x02\x15\n\x02\f\x02\x0E\x02" +
		"\x18\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\x1F\n\x04\x03" +
		"\x04\x07\x04\"\n\x04\f\x04\x0E\x04%\v\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05+\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x076\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x02" +
		"\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02" +
		"\x06\x03\x02\x03\x04\x03\x02\x05\x06\x03\x02\x07\b\x03\x02\t\n\x029\x02" +
		"\x12\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b" +
		"*\x03\x02\x02\x02\n,\x03\x02\x02\x02\f5\x03\x02\x02\x02\x0E7\x03\x02\x02" +
		"\x02\x109\x03\x02\x02\x02\x12\x16\x05\x06\x04\x02\x13\x15\x05\x04\x03" +
		"\x02\x14\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02\x02\x16\x14\x03\x02\x02" +
		"\x02\x16\x17\x03\x02\x02\x02\x17\x03\x03\x02\x02\x02\x18\x16\x03\x02\x02" +
		"\x02\x19\x1A\t\x02\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x05\x03\x02\x02" +
		"\x02\x1C\x1F\x05\f\x07\x02\x1D\x1F\x05\n\x06\x02\x1E\x1C\x03\x02\x02\x02" +
		"\x1E\x1D\x03\x02\x02\x02\x1F#\x03\x02\x02\x02 \"\x05\b\x05\x02! \x03\x02" +
		"\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\x07\x03" +
		"\x02\x02\x02%#\x03\x02\x02\x02&\'\t\x03\x02\x02\'+\x05\f\x07\x02()\t\x03" +
		"\x02\x02)+\x05\n\x06\x02*&\x03\x02\x02\x02*(\x03\x02\x02\x02+\t\x03\x02" +
		"\x02\x02,-\x07\x04\x02\x02-.\x05\f\x07\x02.\v\x03\x02\x02\x02/6\x05\x0E" +
		"\b\x0206\x05\x10\t\x0212\x07\v\x02\x0223\x05\x02\x02\x0234\x07\f\x02\x02" +
		"46\x03\x02\x02\x025/\x03\x02\x02\x0250\x03\x02\x02\x0251\x03\x02\x02\x02" +
		"6\r\x03\x02\x02\x0278\t\x04\x02\x028\x0F\x03\x02\x02\x029:\t\x05\x02\x02" +
		":\x11\x03\x02\x02\x02\x07\x16\x1E#*5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcParser.__ATN) {
			CalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcParser._serializedATN));
		}

		return CalcParser.__ATN;
	}

}

export class StatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public rest_expression(): Rest_expressionContext[];
	public rest_expression(i: number): Rest_expressionContext;
	public rest_expression(i?: number): Rest_expressionContext | Rest_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rest_expressionContext);
		} else {
			return this.getRuleContext(i, Rest_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class Rest_expressionContext extends ParserRuleContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CalcParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CalcParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_rest_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterRest_expression) {
			listener.enterRest_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitRest_expression) {
			listener.exitRest_expression(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public neg_term(): Neg_termContext | undefined {
		return this.tryGetRuleContext(0, Neg_termContext);
	}
	public rest_term(): Rest_termContext[];
	public rest_term(i: number): Rest_termContext;
	public rest_term(i?: number): Rest_termContext | Rest_termContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rest_termContext);
		} else {
			return this.getRuleContext(i, Rest_termContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class Rest_termContext extends ParserRuleContext {
	public _op!: Token;
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(CalcParser.ASTERISK, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(CalcParser.DIVIDE, 0); }
	public neg_term(): Neg_termContext | undefined {
		return this.tryGetRuleContext(0, Neg_termContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_rest_term; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterRest_term) {
			listener.enterRest_term(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitRest_term) {
			listener.exitRest_term(this);
		}
	}
}


export class Neg_termContext extends ParserRuleContext {
	public MINUS(): TerminalNode { return this.getToken(CalcParser.MINUS, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_neg_term; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterNeg_term) {
			listener.enterNeg_term(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitNeg_term) {
			listener.exitNeg_term(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CalcParser.LPAREN, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_term; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.NUMBER, 0); }
	public SCIENTIFIC_NUMBER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SCIENTIFIC_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_number; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public PI(): TerminalNode | undefined { return this.tryGetToken(CalcParser.PI, 0); }
	public E(): TerminalNode | undefined { return this.tryGetToken(CalcParser.E, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_constant; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


