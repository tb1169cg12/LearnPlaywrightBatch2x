# JavaScript String Methods - Cheatsheet

## Accessing Characters

| Method | Example | Output |
|--------|---------|--------|
| Bracket Notation | `"hello"[0]` | `"h"` |
| `charAt()` | `"hello".charAt(0)` | `"h"` |
| `charCodeAt()` | `"hello".charCodeAt(0)` | `104` |
| `codePointAt()` | `"hello".codePointAt(0)` | `104` |
| `at()` | `"hello".at(0)` | `"h"` |
| `at()` (negative) | `"hello".at(-1)` | `"o"` |

## Extracting Parts

| Method | Example | Output |
|--------|---------|--------|
| `slice()` | `"hello".slice(1,4)` | `"ell"` |
| `slice()` (negative) | `"hello".slice(-2)` | `"lo"` |
| `substring()` | `"hello".substring(1,4)` | `"ell"` |
| `substr()` | `"hello".substr(1,3)` | `"ell"` |

## Searching

| Method | Example | Output |
|--------|---------|--------|
| `indexOf()` | `"hello world".indexOf("o")` | `4` |
| `lastIndexOf()` | `"hello world".lastIndexOf("o")` | `7` |
| `includes()` | `"hello".includes("ell")` | `true` |
| `startsWith()` | `"hello".startsWith("he")` | `true` |
| `endsWith()` | `"hello".endsWith("lo")` | `true` |
| `search()` | `"hello".search(/ell/)` | `1` |
| `match()` | `"hello".match(/l/g)` | `["l", "l"]` |
| `matchAll()` | `"hello".matchAll(/l/g)` | iterator |

## Modifying

| Method | Example | Output |
|--------|---------|--------|
| `replace()` | `"hello".replace("l","x")` | `"hexlo"` |
| `replaceAll()` | `"hello".replaceAll("l","x")` | `"hexxo"` |
| `trim()` | `"  hello  ".trim()` | `"hello"` |
| `trimStart()` | `"  hello  ".trimStart()` | `"hello  "` |
| `trimEnd()` | `"  hello  ".trimEnd()` | `"  hello"` |
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | `"hello".toLowerCase()` | `"hello"` |
| `padStart()` | `"hello".padStart(10,"x")` | `"xxxxxhello"` |
| `padEnd()` | `"hello".padEnd(10,"x")` | `"helloxxxxx"` |
| `repeat()` | `"hello".repeat(3)` | `"hellohellohello"` |

## Splitting & Joining

| Method | Example | Output |
|--------|---------|--------|
| `split()` | `"hello".split("")` | `["h","e","l","l","o"]` |
| `split()` | `"hello".split("l")` | `["he","","o"]` |
| `concat()` | `"hello".concat("world")` | `"helloworld"` |
| `+` operator | `"hello" + "world"` | `"helloworld"` |

## Converting

| Method | Example | Output |
|--------|---------|--------|
| `toString()` | `"hello".toString()` | `"hello"` |
| `valueOf()` | `"hello".valueOf()` | `"hello"` |
| `String()` | `String(123)` | `"123"` |
| `toLocaleString()` | `"123".toLocaleString()` | `"123"` |

## Length

| Property | Example | Output |
|----------|---------|--------|
| `length` | `"hello".length` | `5` |

## Comparison

| Method | Example | Output |
|--------|---------|--------|
| `localeCompare()` | `"hello".localeCompare("world")` | `-1` |

## Normalization

| Method | Example | Output |
|--------|---------|--------|
| `normalize()` | `"café".normalize("NFD")` | `"café"` (decomposed) |
| `isWellFormed()` | `"hello".isWellFormed()` | `true` |
| `toWellFormed()` | `"hello\uD800".toWellFormed()` | `"hello"` |

## Static Methods

| Method | Example | Output |
|--------|---------|--------|
| `fromCharCode()` | `String.fromCharCode(104,101)` | `"he"` |
| `fromCodePoint()` | `String.fromCodePoint(128512)` | `"😀"` |
| `raw()` | `String.raw` | raw strings |

## HTML Wrapper (Deprecated)

| Method | Example | Output |
|--------|---------|--------|
| `anchor()` | `"hello".anchor()` | `"<a name=\"undefined\">hello</a>"` |
| `big()` | `"hello".big()` | `"<big>hello</big>"` |
| `blink()` | `"hello".blink()` | `"<blink>hello</blink>"` |
| `bold()` | `"hello".bold()` | `"<b>hello</b>"` |
| `fixed()` | `"hello".fixed()` | `"<tt>hello</tt>"` |
| `fontcolor()` | `"hello".fontcolor("red")` | `"<font color=\"red\">hello</font>"` |
| `fontsize()` | `"hello".fontsize(7)` | `"<font size=\"7\">hello</font>"` |
| `italics()` | `"hello".italics()` | `"<i>hello</i>"` |
| `link()` | `"hello".link("url")` | `"<a href=\"url\">hello</a>"` |
| `small()` | `"hello".small()` | `"<small>hello</small>"` |
| `strike()` | `"hello".strike()` | `"<strike>hello</strike>"` |
| `sub()` | `"hello".sub()` | `"<sub>hello</sub>"` |
| `sup()` | `"hello".sup()` | `"<sup>hello</sup>"` |

## Legacy Methods

| Method | Example | Output |
|--------|---------|--------|
| `trimLeft()` | `"  hello  ".trimLeft()` | `"hello  "` |
| `trimRight()` | `"  hello  ".trimRight()` | `"  hello"` |

---

**Total Methods: ~45+** covering all JavaScript String methods available.
