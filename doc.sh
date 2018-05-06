# script for generate api doc
docker run --rm \
-v /Users/jeff/Desktop/protoTest/src/schema/doc:/out \
-v /Users/jeff/Desktop/protoTest/src/schema/protos:/protos \
pseudomuto/protoc-gen-doc --doc_opt=$1,$2
