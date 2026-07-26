#!/usr/bin/env bash
# Release do loce-ds2 por tag git com dist commitado (sem npm publish).
# Uso: ./scripts/release.sh v0.1.0
set -euo pipefail

TAG="${1:?Uso: ./scripts/release.sh vX.Y.Z}"
[[ "$TAG" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "Tag inválida: $TAG (esperado vX.Y.Z)"; exit 1; }

if [[ -n "$(git status --porcelain)" ]]; then
    echo "Working tree suja. Commita ou stasha antes de soltar release."
    exit 1
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

npm run typecheck
npm run build

git checkout --detach
git add -f dist
git commit -m "release $TAG (dist)"
git tag "$TAG"
git push origin "$TAG"
git checkout "$BRANCH"

echo ""
echo "Release $TAG publicada. No consumidor:"
echo "  \"loce-ds2\": \"github:plmartins/loce-ds2#$TAG\""
