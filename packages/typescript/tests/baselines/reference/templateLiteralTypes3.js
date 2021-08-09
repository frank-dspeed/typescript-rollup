//// [templateLiteralTypes3.ts]
// Inference from template literal type to template literal type

type Foo1<T> = T extends `*${infer U}*` ? U : never;

type T01 = Foo1<'hello'>;
type T02 = Foo1<'*hello*'>;
type T03 = Foo1<'**hello**'>;
type T04 = Foo1<`*${string}*`>;
type T05 = Foo1<`*${number}*`>;
type T06 = Foo1<`*${bigint}*`>;
type T07 = Foo1<`*${any}*`>;
type T08 = Foo1<`**${string}**`>;
type T09 = Foo1<`**${string}**${string}**`>;
type T10 = Foo1<`**${'a' | 'b' | 'c'}**`>;
type T11 = Foo1<`**${boolean}**${boolean}**`>;

declare function foo1<V extends string>(arg: `*${V}*`): V;

function f1<T extends string>(s: string, n: number, b: boolean, t: T) {
    let x1 = foo1('hello');  // Error
    let x2 = foo1('*hello*');
    let x3 = foo1('**hello**');
    let x4 = foo1(`*${s}*` as const);
    let x5 = foo1(`*${n}*` as const);
    let x6 = foo1(`*${b}*` as const);
    let x7 = foo1(`*${t}*` as const);
    let x8 = foo1(`**${s}**` as const);
}

// Inference to a placeholder immediately followed by another placeholder infers a single
// character or placeholder from the source.

type Parts<T> =
    T extends '' ? [] :
    T extends `${infer Head}${infer Tail}` ? [Head, ...Parts<Tail>] :
    never;

type T20 = Parts<`abc`>;
type T21 = Parts<`*${string}*`>;
type T22 = Parts<`*${number}*`>;
type T23 = Parts<`*${number}*${string}*${bigint}*`>;

function f2() {
    let x: `${number}.${number}.${number}`;
    x = '1.1.1';
    x = '1.1.1' as `1.1.${number}`;
    x = '1.1.1' as `1.${number}.1`;
    x = '1.1.1' as `1.${number}.${number}`;
    x = '1.1.1' as `${number}.1.1`;
    x = '1.1.1' as `${number}.1.${number}`;
    x = '1.1.1' as `${number}.${number}.1`;
    x = '1.1.1' as `${number}.${number}.${number}`;
}

function f3<T extends string>(s: string, n: number, b: boolean, t: T) {
    let x: `*${string}*`;
    x = 'hello';  // Error
    x = '*hello*';
    x = '**hello**';
    x = `*${s}*` as const;
    x = `*${n}*` as const;
    x = `*${b}*` as const;
    x = `*${t}*` as const;
    x = `**${s}**` as const;
}

function f4<T extends number>(s: string, n: number, b: boolean, t: T) {
    let x: `*${number}*`;
    x = '123';  // Error
    x = '*123*';
    x = '**123**';  // Error
    x = `*${s}*` as const;  // Error
    x = `*${n}*` as const;
    x = `*${b}*` as const;  // Error
    x = `*${t}*` as const;
}

// Repro from #43060

type A<T> = T extends `${infer U}.${infer V}` ? U | V : never
type B = A<`test.1024`>;  // "test" | "1024"
type C = A<`test.${number}`>;  // "test" | `${number}`

type D<T> = T extends `${infer U}.${number}` ? U : never
type E = D<`test.1024`>;  // "test"
type F = D<`test.${number}`>;  // "test"

type G<T> = T extends `${infer U}.${infer V}` ? U | V : never
type H = G<`test.hoge`>;  // "test" | "hoge"
type I = G<`test.${string}`>;  // string ("test" | string reduces to string)

type J<T> = T extends `${infer U}.${string}` ? U : never
type K = J<`test.hoge`>;  // "test"
type L = J<`test.${string}`>;  // "test""

// Repro from #43243

type Templated = `${string} ${string}`;

const value1: string = "abc";
const templated1: Templated = `${value1} abc` as const;
// Type '`${string} abc`' is not assignable to type '`${string} ${string}`'.

const value2 = "abc";
const templated2: Templated = `${value2} abc` as const;

// Repro from #43620

type Prefixes = "foo" | "bar";

type AllPrefixData = "foo:baz" | "bar:baz";

type PrefixData<P extends Prefixes> = `${P}:baz`;

interface ITest<P extends Prefixes, E extends AllPrefixData = PrefixData<P>> {
    blah: string;
}


//// [templateLiteralTypes3.js]
"use strict";
// Inference from template literal type to template literal type
function f1(s, n, b, t) {
    var x1 = foo1('hello'); // Error
    var x2 = foo1('*hello*');
    var x3 = foo1('**hello**');
    var x4 = foo1("*" + s + "*");
    var x5 = foo1("*" + n + "*");
    var x6 = foo1("*" + b + "*");
    var x7 = foo1("*" + t + "*");
    var x8 = foo1("**" + s + "**");
}
function f2() {
    var x;
    x = '1.1.1';
    x = '1.1.1';
    x = '1.1.1';
    x = '1.1.1';
    x = '1.1.1';
    x = '1.1.1';
    x = '1.1.1';
    x = '1.1.1';
}
function f3(s, n, b, t) {
    var x;
    x = 'hello'; // Error
    x = '*hello*';
    x = '**hello**';
    x = "*" + s + "*";
    x = "*" + n + "*";
    x = "*" + b + "*";
    x = "*" + t + "*";
    x = "**" + s + "**";
}
function f4(s, n, b, t) {
    var x;
    x = '123'; // Error
    x = '*123*';
    x = '**123**'; // Error
    x = "*" + s + "*"; // Error
    x = "*" + n + "*";
    x = "*" + b + "*"; // Error
    x = "*" + t + "*";
}
var value1 = "abc";
var templated1 = value1 + " abc";
// Type '`${string} abc`' is not assignable to type '`${string} ${string}`'.
var value2 = "abc";
var templated2 = value2 + " abc";


//// [templateLiteralTypes3.d.ts]
declare type Foo1<T> = T extends `*${infer U}*` ? U : never;
declare type T01 = Foo1<'hello'>;
declare type T02 = Foo1<'*hello*'>;
declare type T03 = Foo1<'**hello**'>;
declare type T04 = Foo1<`*${string}*`>;
declare type T05 = Foo1<`*${number}*`>;
declare type T06 = Foo1<`*${bigint}*`>;
declare type T07 = Foo1<`*${any}*`>;
declare type T08 = Foo1<`**${string}**`>;
declare type T09 = Foo1<`**${string}**${string}**`>;
declare type T10 = Foo1<`**${'a' | 'b' | 'c'}**`>;
declare type T11 = Foo1<`**${boolean}**${boolean}**`>;
declare function foo1<V extends string>(arg: `*${V}*`): V;
declare function f1<T extends string>(s: string, n: number, b: boolean, t: T): void;
declare type Parts<T> = T extends '' ? [] : T extends `${infer Head}${infer Tail}` ? [Head, ...Parts<Tail>] : never;
declare type T20 = Parts<`abc`>;
declare type T21 = Parts<`*${string}*`>;
declare type T22 = Parts<`*${number}*`>;
declare type T23 = Parts<`*${number}*${string}*${bigint}*`>;
declare function f2(): void;
declare function f3<T extends string>(s: string, n: number, b: boolean, t: T): void;
declare function f4<T extends number>(s: string, n: number, b: boolean, t: T): void;
declare type A<T> = T extends `${infer U}.${infer V}` ? U | V : never;
declare type B = A<`test.1024`>;
declare type C = A<`test.${number}`>;
declare type D<T> = T extends `${infer U}.${number}` ? U : never;
declare type E = D<`test.1024`>;
declare type F = D<`test.${number}`>;
declare type G<T> = T extends `${infer U}.${infer V}` ? U | V : never;
declare type H = G<`test.hoge`>;
declare type I = G<`test.${string}`>;
declare type J<T> = T extends `${infer U}.${string}` ? U : never;
declare type K = J<`test.hoge`>;
declare type L = J<`test.${string}`>;
declare type Templated = `${string} ${string}`;
declare const value1: string;
declare const templated1: Templated;
declare const value2 = "abc";
declare const templated2: Templated;
declare type Prefixes = "foo" | "bar";
declare type AllPrefixData = "foo:baz" | "bar:baz";
declare type PrefixData<P extends Prefixes> = `${P}:baz`;
interface ITest<P extends Prefixes, E extends AllPrefixData = PrefixData<P>> {
    blah: string;
}
