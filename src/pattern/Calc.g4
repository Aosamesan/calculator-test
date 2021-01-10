grammar Calc;

statement
    :   expression rest_expression*
    ;

rest_expression
    :   op=(PLUS | MINUS) expression
    ;

expression
    :   (term | neg_term) rest_term*
    ;

rest_term
    :   op=(ASTERISK | DIVIDE)  term
    |   op=(ASTERISK | DIVIDE)  neg_term
    ;

neg_term
    :   MINUS term
    ;

term
    :   number
    |   constant
    |   LPAREN statement RPAREN
    ;

number
    :   NUMBER
    |   SCIENTIFIC_NUMBER
    ;

constant
    :   PI
    |   E
    ;

// LEXER

PLUS: '+';
MINUS: '-';
ASTERISK: '*';
DIVIDE: '/';
NUMBER: [0-9]+ ('.' [0-9]*)?;
SCIENTIFIC_NUMBER: [0-9]+ ('.' [0-9]*)? ('e' | 'E') '-'? [0-9]+;
PI: 'π' | 'pi' | 'PI';
E: 'e';
LPAREN: '(';
RPAREN: ')';
WS: [ \n\r\t]+ -> skip;