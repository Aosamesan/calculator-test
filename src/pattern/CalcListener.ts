// Generated from src/pattern/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StatementContext } from "./CalcParser";
import { Rest_expressionContext } from "./CalcParser";
import { ExpressionContext } from "./CalcParser";
import { Rest_termContext } from "./CalcParser";
import { Neg_termContext } from "./CalcParser";
import { TermContext } from "./CalcParser";
import { NumberContext } from "./CalcParser";
import { ConstantContext } from "./CalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.rest_expression`.
	 * @param ctx the parse tree
	 */
	enterRest_expression?: (ctx: Rest_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.rest_expression`.
	 * @param ctx the parse tree
	 */
	exitRest_expression?: (ctx: Rest_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.rest_term`.
	 * @param ctx the parse tree
	 */
	enterRest_term?: (ctx: Rest_termContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.rest_term`.
	 * @param ctx the parse tree
	 */
	exitRest_term?: (ctx: Rest_termContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.neg_term`.
	 * @param ctx the parse tree
	 */
	enterNeg_term?: (ctx: Neg_termContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.neg_term`.
	 * @param ctx the parse tree
	 */
	exitNeg_term?: (ctx: Neg_termContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
}

