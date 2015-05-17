
```
$ npm run test

> espower-babel-issue1@1.0.0 test /path/to/project
> mocha --compilers js:espower-babel/guess test/**/*.js


/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/transformation/file/index.js:600
      throw err;
            ^
EspowerError: /path/to/project/test/FooSpec.js: [espower] Attempted to transform AST twice. path: /path/to/project/test/FooSpec.js
    at AssertionVisitor.enterArgument (/path/to/project/node_modules/espower-babel/node_modules/babel-plugin-espower/node_modules/espower/lib/assertion-visitor.js:102:14)
    at enterTraversalPath (/path/to/project/node_modules/espower-babel/node_modules/babel-plugin-espower/lib/create-espower-visitor.js:23:30)
    at TraversalPath.handlers.(anonymous function).enter (/path/to/project/node_modules/espower-babel/node_modules/babel-plugin-espower/lib/create-espower-visitor.js:84:17)
    at TraversalPath.call (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/path/index.js:899:28)
    at TraversalPath.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/path/index.js:931:10)
    at TraversalContext.visitMultiple (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:70:16)
    at TraversalContext.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:100:19)
    at Function.traverse.node (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/index.js:64:17)
    at TraversalPath.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/path/index.js:948:28)
    at TraversalContext.visitSingle (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:90:12)
    at TraversalContext.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:102:19)
...
```

```
$ npm run test2

> espower-babel-issue1@1.0.0 test2 /path/to/project
> mocha --compilers js:espower-babel/guess spec/FooSpec.js



  Foo
    ✓ #getName


  1 passing (6ms)

```

```
$ npm run test3

> espower-babel-issue1@1.0.0 test3 /path/to/project
> mocha --compilers js:espower-babel/guess spec/SymbolicFooSpec.js


/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/transformation/file/index.js:600
      throw err;
            ^
EspowerError: /path/to/project/test/FooSpec.js: [espower] Attempted to transform AST twice. path: /path/to/project/test/FooSpec.js
    at AssertionVisitor.enterArgument (/path/to/project/node_modules/espower-babel/node_modules/babel-plugin-espower/node_modules/espower/lib/assertion-visitor.js:102:14)
    at enterTraversalPath (/path/to/project/node_modules/espower-babel/node_modules/babel-plugin-espower/lib/create-espower-visitor.js:23:30)
    at TraversalPath.handlers.(anonymous function).enter (/path/to/project/node_modules/espower-babel/node_modules/babel-plugin-espower/lib/create-espower-visitor.js:84:17)
    at TraversalPath.call (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/path/index.js:899:28)
    at TraversalPath.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/path/index.js:931:10)
    at TraversalContext.visitMultiple (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:70:16)
    at TraversalContext.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:100:19)
    at Function.traverse.node (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/index.js:64:17)
    at TraversalPath.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/path/index.js:948:28)
    at TraversalContext.visitSingle (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:90:12)
    at TraversalContext.visit (/path/to/project/node_modules/espower-babel/node_modules/babel-core/lib/babel/traversal/context.js:102:19)
...
```
