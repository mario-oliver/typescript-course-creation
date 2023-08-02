let age: number = 29;

console.log('hello' + age);

// we take this file -> index.ts -> and run tsc hello-world/index.ts
// it produces a typescript file
// you'll notice that the transpiler produces a index.js file
// the transpilation takes the let and converts it to a var
// it essentially uses ES5
// to configure the compiler we use
//          tsc --init
// which creates a
//          tsconfig.json

// inside the config files we have a few important variables:
//      - target: "es2016"      --> 2016 is the safest version
//      - module: "commonjs"
//      - rootDir: "./"         --> represents the current folder, but we usually shift this into it's own folder
//      - similar setting in /*Emit*/ --> called
//      - outDir: "./dist"      --> where our JS code is normally stored
//      - removeComments: true
//      - noEmitOnError: true   --> by default if we error we will still complile JS, this reverses that
