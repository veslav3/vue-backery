# Vue Backery

This repository contains the `vue-backery` project, a monorepo setup utilizing `pnpm` workspaces with a Nuxt 3 frontend and a NestJS backend.

## Local Kubernetes Setup

This project is configured to run locally in a Kubernetes cluster (e.g., Minikube, Docker Desktop, or kind).

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) with Kubernetes enabled, OR [Minikube](https://minikube.sigs.k8s.io/docs/start/).
- `kubectl` installed.

### 1. Build Local Docker Images

Because of the `pnpm` workspaces, the Docker images must be built from the root of the monorepo context so it can resolve the local workspace dependencies (like `@vue-backery/shared`).

```bash
# Note: If you are using Minikube, make sure to point your terminal's docker CLI to the Minikube docker daemon:
# eval $(minikube docker-env)

# Build the backend image
docker build -t vue-backery-backend:local -f apps/backend/Dockerfile .

# Build the frontend image
docker build -t vue-backery-frontend:local -f apps/frontend/Dockerfile .
```

> **Note**: These images are tagged as `local`, and the Kubernetes manifests are configured with `imagePullPolicy: Never` so that K8s uses your local images rather than attempting to pull them from a remote registry.

### 2. Apply the Kubernetes Manifests

```bash
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml
```

### 3. Verify Running Pods

Check if the pods are up and running:
```bash
kubectl get pods
```

### 4. Access the Application

By default, the `frontend` service is exposed as a `NodePort` on port `30001`. 
If you are using Docker Desktop, you might be able to access the app directly at:
```text
http://localhost:30001
```

If that does not work, or you are using Minikube, you can expose the services directly to your localhost:

**Frontend (Minikube Native):**
```bash
minikube service frontend
```
*(This will automatically open the frontend in your browser)*

**Frontend (Port Forwarding):**
```bash
kubectl port-forward svc/frontend 8080:3000
# Open your browser at http://localhost:8080
```

**Backend:**
```bash
kubectl port-forward svc/backend 3000:3000
# The backend API will be available at http://localhost:3000
```
