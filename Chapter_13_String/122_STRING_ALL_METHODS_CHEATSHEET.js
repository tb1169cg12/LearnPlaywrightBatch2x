console.log("hello" + "world");          // helloworld
console.log("hello".concat("world"));  // helloworld
console.log("123".length);              // 3
console.log("hello"[0]);                // h
console.log("hello".charAt(0));         // h
console.log("hello".charCodeAt(0));     // 104
console.log("hello".at(0));             // h
console.log("hello".at(-1));            // o
console.log("hello".substring(1,4));   // ell
console.log("hello".slice(1,4));       // ell
console.log("hello".slice(-2));         // lo
console.log("hello".substr(1,3));       // ell
console.log("hello world".indexOf("o"));     // 4
console.log("hello world".lastIndexOf("o")); // 7
console.log("hello".includes("ell"));   // true
console.log("hello".startsWith("he"));  // true
console.log("hello".endsWith("lo"));    // true
console.log("hello".search(/ell/));     // 1
console.log("hello".match(/l/g));      // [l, l]
console.log("hello".replace("l","x"));  // hexlo
console.log("hello".replaceAll("l","x")); // hexxo
console.log("hello".split(""));         // [h, e, l, l, o]
console.log("hello".split("l"));        // [he, , o]
console.log("  hello  ".trim());        // hello
console.log("  hello  ".trimStart());  // hello  
console.log("  hello  ".trimEnd());    //   hello
console.log("hello".toUpperCase());     // HELLO
console.log("HELLO".toLowerCase());     // hello
console.log("hello".padStart(10,"x"));  // xxxxxhello
console.log("hello".padEnd(10,"x"));    // helloxxxxx
console.log("5".padStart(2,"0"));      // 05
console.log("hello".repeat(3));         // hellohellohello
console.log("hello".localeCompare("world")); // -1
console.log("hello".toString());        // hello
console.log("hello".valueOf());         // hello
console.log("hello".normalize());       // hello
console.log("café".normalize("NFD"));  // café
console.log("123".toLocaleString());   // 123
console.log(String.fromCharCode(104,101)); // he
console.log(String.fromCodePoint(128512)); // 😀
console.log("hello".raw);              // undefined
console.log("hello".anchor());         // <a name="undefined">hello</a>
console.log("hello".big());            // <big>hello</big>
console.log("hello".blink());          // <blink>hello</blink>
console.log("hello".bold());           // <b>hello</b>
console.log("hello".fixed());          // <tt>hello</tt>
console.log("hello".fontcolor("red")); // <font color="red">hello</font>
console.log("hello".fontsize(7));      // <font size="7">hello</font>
console.log("hello".italics());        // <i>hello</i>
console.log("hello".link("url"));      // <a href="url">hello</a>
console.log("hello".small());          // <small>hello</small>
console.log("hello".strike());         // <strike>hello</strike>
console.log("hello".sub());            // <sub>hello</sub>
console.log("hello".sup());            // <sup>hello</sup>
console.log("hello".matchAll(/l/g));   // iterator
console.log("hello".codePointAt(0));   // 104
console.log("hello".isWellFormed());   // true
console.log("hello\uD800".toWellFormed()); // hello
console.log("hello".trimLeft());      // hello
console.log("hello".trimRight());     // hello
