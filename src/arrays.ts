/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const clone = [...numbers];
    if (clone.length === 1) {
        clone.push(numbers[0]);
    } else if (clone.length > 1) {
        const n: number = clone.length - 1;
        clone.splice(1, n, clone[n]);
    }
    return clone;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const clone = [...numbers];
    return clone.map((num: string): number =>
        !isNaN(parseInt(num)) ? parseInt(num) : 0
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const cloned_amounts = [...amounts].map((amount: string): string =>
        amount.replace("$", "")
    );
    return cloned_amounts.map((amount: string): number =>
        !isNaN(parseInt(amount)) ? parseInt(amount) : 0
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const cloned_messages = [...messages].filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return cloned_messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const cloned_words = words.filter(
        (word: string): boolean => word.length < 4
    );
    return cloned_words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const cloned_colors = [...colors].every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return cloned_colors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const addends_clone = [...addends];
    const addition = addends_clone
        .map((value: number): string => value.toString())
        .join("+");
    const sum = addends_clone
        .reduce((total: number, value: number) => total + value, 0)
        .toString();
    return sum + "=" + addition;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const cloned_values = [...values];
    const neg_index = cloned_values.findIndex(
        (value: number): boolean => value < 0
    );
    const cloned_positives = [...cloned_values];
    if (neg_index !== -1) {
        cloned_positives.splice(neg_index, cloned_values.length, 0);
    }
    const sum = cloned_positives.reduce(
        (total: number, value: number): number => (total += value),
        0
    );
    if (neg_index !== -1) cloned_values.splice(neg_index + 1, 0, sum);
    else cloned_values.push(sum);
    return cloned_values;
}
