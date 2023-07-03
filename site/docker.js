/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
  "friendly_name": "Docker",
  "image_src": "docker.png",
  "description": "Docker",
  "name": "docker",
  "cores": 2,
  "memory": 2768,
  "gpu_count": 0,
  "cpu_allocation_method": "Inherit",
  "docker_registry": "https://index.docker.io/v1/",
  "categories": [
    "Development"
  ],
  "require_gpu": false,
  "enabled": true,
  "image_type": "Container"
}

module.exports = nextConfig
