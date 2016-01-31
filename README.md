# Nonsense
A stack-based language that really doesn't make sense. Made at Los Altos Hacks 2016!

## Examples
    cH p ce p cl p cl p co p c, p c\s p cw p co p cr p cl p cd p c! p
A "Hello, world!" program.

    i p h
Outputs the input.

    g
Infinite loop.

		ce s o r c
		p l h
Counts down from 100 to 0.
## Tutorial
Nonsense is stack-based, meaning that it uses an array (or stack) as memory storage instead of variables. The stack only holds numbers, and virtually all operators work using the stack. In this case, the stack is of infinite length and all stack items are initialized to 0.

**TIP**: Look at `interpreter.js` to help speed up the learning process.
### Syntax
All commands are space-separated. The first character in each "word" is the command, and the second character is only evaluated as an argument if the command takes one. `\s` is used in place of a space character if necessary as an argument. All other characters after are ignored.

Here's an example of a program:

    i p
However, the same code can be written as:

    illegal potatoes
because only `i` and `p` (neither of which take arguments) are evaluated.
### Operators
#### Stack Pointer
- `l` and `r`: Move pointer to left/right one item. Example: if the stack is `[5,6,7]` and the pointer is pointing at `5`, then `l` moves pointer to point at `0` (remember: the stack is padded with 0's!), while `r` moves the pointer to point at `6`.
- `n`: Takes 1 character as an argument and moves to the pointer to the stack index as defined by the character's charcode. Example: if the stack is `[5,6,7]`, `n` would move the pointer to point at `6`, regardless of where the pointer was before.

#### I/O
- `i`: Shift the first character from the input and push to the stack at the pointer.
- `o`: Output number at the pointer.
- `p`: Output charcode representation of number at pointer. Example: If `55` is under the pointer, `p` would output 7.

#### Arithmetic
- `a` and `s`: Increment/decrement number under pointer.

#### Control Flow
- `g`: A `goto` command. Takes 1 character `n` as an argument and goes to `n`th command in the code. This could be used as a way to create an infinite loop.
- `h`: Conditional `goto` command. Works like `g`, except it only executes `goto` if the number at the pointer isn't 0. Otherwise, the code continues as normally.

#### Stack Pushing
- `c`: Takes 1 character as an argument and pushes its charcode to the stack under the pointer.
- `x`: Sets number under pointer to the index at the stack.

#### Logic
- `G`, `E`, and `L`: Greater than, equal to, and less than operators. Modifies the stack at the pointer with either 1 or 0 depending on the criterion.