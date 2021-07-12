kubectl get secret crt-$DOMAIN -n $NAMESPACE -o json | jq '.data["tls.crt"]' | tr -d '"' | base64 -d  > ssl/server.crt
kubectl get secret crt-$DOMAIN -n $NAMESPACE -o json | jq '.data["tls.key"]' | tr -d '"' | base64 -d  > ssl/server.key


# windows

# kubectl get secret crt-highstreetly.xyz -n highstreetly-xyz -o json | jq '.data[\"tls.crt\"]' |  xargs  | awk '{$1=$1};1' | base64 -d -i | base64 -d > ssl/server.crt
# kubectl get secret crt-highstreetly.xyz -n highstreetly-xyz -o json | jq '.data[\"tls.key\"]' |  xargs  | awk '{$1=$1};1' | base64 -d -i | base64 -d > ssl/server.key