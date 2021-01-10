import { ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { CalcListener } from "./CalcListener";
import { ConstantContext, Neg_termContext, NumberContext, Rest_expressionContext, Rest_termContext, StatementContext } from "./CalcParser";
import CalcResult from "./CalcResult";

export default class CalculatorListener implements CalcListener {
    calculateStack: Array<Array<number>>;
    result: CalcResult;

    constructor() {
        this.calculateStack = new Array<Array<number>>();
        this.result = new CalcResult();
    }

    getLastFrame(): Array<number> | undefined {
        return this.calculateStack[this.calculateStack.length - 1];
    }

    enterStatement(ctx: StatementContext): void {
        this.calculateStack.push([]);
    }

    exitStatement(ctx: StatementContext): void {
        const frame: Array<number> | undefined = this.calculateStack.pop();
        if (this.calculateStack.length == 0) {
            if (frame?.length == 1) {
                // valid calculate
                this.result.result = frame.pop();
                return;
            }
        } else {
            if (frame?.length == 1) {
                const lastFrame: Array<number> | undefined = this.getLastFrame();
                const r: number | undefined = frame.pop();
                if (r) {
                    // valid calculate
                    lastFrame?.push(r);
                    return;
                }
            }
        }
        throw new Error(`Something wrong...`);
    }

    exitRest_expression(ctx: Rest_expressionContext): void {
        const op: string | undefined = ctx._op.text;
        const lastFrame: Array<number> | undefined = this.getLastFrame();
        const rear: number | undefined = lastFrame?.pop();
        const prev: number | undefined = lastFrame?.pop();
        switch (op) {
            case '+':
                if (rear != undefined && prev != undefined) {
                    lastFrame?.push(prev + rear);
                } else {
                    throw new Error(`Multiplication number is undefined`);
                }
                break;
            case '-':
                if (rear != undefined && prev != undefined) {
                    lastFrame?.push(prev - rear);
                } else {
                    throw new Error(`Multiplication number is undefined`);
                }
                break;
            default:
                throw new Error(`Undefined operator : ${op}`);
        }
    }

    exitRest_term(ctx: Rest_termContext): void {
        const op: string | undefined = ctx._op.text;
        const lastFrame: Array<number> | undefined = this.getLastFrame();
        const rear: number | undefined = lastFrame?.pop();
        const prev: number | undefined = lastFrame?.pop();
        switch (op) {
            case '*':
                if (rear != undefined && prev != undefined) {
                    lastFrame?.push(prev * rear);
                } else {
                    throw new Error(`Multiplication number is undefined`);
                }
                break;
            case '/':
                if (rear != undefined && prev != undefined) {
                    lastFrame?.push(prev  / rear);
                } else {
                    throw new Error(`Multiplication number is undefined`);
                }
                break;
            default:
                throw new Error(`Undefined operator : ${op}`);
        }
    }

    exitNeg_term(ctx: Neg_termContext): void {
        const lastFrame: Array<number> | undefined = this.getLastFrame();
        const top: number | undefined = lastFrame?.pop();
        if (top) {
            lastFrame?.push(-top);
        }
    }

    exitNumber(ctx: NumberContext): void {
        const c: string = ctx.text;
        const lastFrame: Array<number> | undefined = this.getLastFrame();
        lastFrame?.push(Number.parseFloat(c));
    }

    exitConstant(ctx: ConstantContext): void {
        const c: string = ctx.text;
        const lastFrame: Array<number> | undefined = this.getLastFrame();
        switch (c) {
            case 'π':
            case 'PI':
            case 'pi':
                lastFrame?.push(Math.PI);
                break;
            case 'e':
                lastFrame?.push(Math.E);
                break;
            default:
                throw new Error(`Unrecognized token : ${c}`);
        }
    }
}