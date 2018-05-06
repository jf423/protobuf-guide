# script for generate static code

# protobufJS
# ComoonJS
pbjs -t static-module -w commonjs -o ./src/interface/test-common.js ./src/schema/protos/test.proto
# ES6
pbjs -t static-module -w es6 -o ./src/interface/test-es6.js ./src/schema/protos/test.proto
# json
pbjs -t json -o ./src/interface/test.json ./src/schema/protos/test.proto
# json-module
pbjs -t json-module -o ./src/interface/test-json.js ./src/schema/protos/test.proto

# google official library
protoc -I=./src/schema/protos --cpp_out=./src/interface ./src/schema/protos/test.proto
