const ffi = require("ffi-napi")

const lib = ffi.Library("../rust/target/release/librust_node",{
    "sum":['int',["int", "int"]]
})



const startTime = performance.now()
const result = lib.sum(100, 50)
const endTime = performance.now()

function node_sum(num_1, num_2){
    return num_1 + num_2;
}

const startTimeNode = performance.now()
const result_node = node_sum(100, 50)
const endTimeNode = performance.now()


console.log(`Call to rust-sum took ${endTime - startTime} milliseconds`)
console.log('Result: ', result)


console.log(`Call to node-sum took ${endTimeNode - startTimeNode} milliseconds`)
console.log('Result: ', result_node)

