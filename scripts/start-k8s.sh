#!/bin/bash
set -e

echo "🟢 Starting Minikube (if not already running)..."
minikube start

echo "🐳 Configuring Docker to use Minikube's daemon..."
eval $(minikube docker-env)

echo "🏗️  Building Backend Docker Image..."
docker build -t vue-backery-backend:local -f apps/backend/Dockerfile .

echo "🏗️  Building Frontend Docker Image..."
docker build -t vue-backery-frontend:local -f apps/frontend/Dockerfile .

echo "🚀 Applying Kubernetes Manifests..."
kubectl apply -f k8s/

echo "🔄 Restarting Deployments (to ensure latest images are pulled)..."
kubectl rollout restart deployment backend frontend

echo ""
echo "✅ Kubernetes Startup Complete!"
echo "➡️  You can port-forward with: kubectl port-forward svc/frontend 8080:3000"
echo "➡️  Or test with: pnpm run test:k8s"
