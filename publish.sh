#!/bin/bash

# 🚀 Arcadia Components - NPM Publish Script
# Bu script @arcadia-components organizasyonu altında paketleri yayınlar

set -e

echo "🏗️  Starting Arcadia Components publish process..."

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if user is logged in to npm
print_status "Checking NPM authentication..."
if ! npm whoami > /dev/null 2>&1; then
    print_error "You are not logged in to NPM!"
    print_status "Please run: npm login"
    exit 1
fi

USER=$(npm whoami)
print_success "Logged in as: $USER"

# Check if user has access to @arcadia-components
print_status "Checking @arcadia-components access..."
if ! npm access list packages @arcadia-components > /dev/null 2>&1; then
    print_warning "Cannot access @arcadia-components packages."
    print_status "Make sure you are a member of @arcadia-components organization."
fi

# Clean previous builds
print_status "Cleaning previous builds..."
npm run clean || true

# Build all packages
print_status "Building all packages..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed!"
    exit 1
fi

print_success "Build completed successfully!"

# Ask for version bump type
echo ""
print_status "Choose version bump type:"
echo "1) patch (1.0.0 -> 1.0.1)"
echo "2) minor (1.0.0 -> 1.1.0)" 
echo "3) major (1.0.0 -> 2.0.0)"
echo "4) custom"
echo "5) skip version bump"

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_status "Bumping patch version..."
        npm run version:patch
        ;;
    2)
        print_status "Bumping minor version..."
        npm run version:minor
        ;;
    3)
        print_status "Bumping major version..."
        npm run version:major
        ;;
    4)
        read -p "Enter custom version: " custom_version
        print_status "Setting custom version: $custom_version"
        lerna version $custom_version
        ;;
    5)
        print_status "Skipping version bump..."
        ;;
    *)
        print_error "Invalid choice!"
        exit 1
        ;;
esac

# Confirmation before publish
echo ""
print_warning "⚠️  Ready to publish to @arcadia-components!"
print_status "Packages that will be published:"
echo "  - @arcadia-components/button"
echo "  - @arcadia-components/hello-world"
echo ""

read -p "Are you sure you want to continue? (y/N): " confirm

if [[ $confirm != [yY] && $confirm != [yY][eE][sS] ]]; then
    print_status "Publish cancelled by user."
    exit 0
fi

# Publish packages
print_status "Publishing packages to NPM..."
npm run publish

if [ $? -eq 0 ]; then
    print_success "🎉 All packages published successfully!"
    echo ""
    print_status "Your packages are now available:"
    echo "  📦 https://www.npmjs.com/package/@arcadia-components/button"
    echo "  📦 https://www.npmjs.com/package/@arcadia-components/hello-world"
    echo ""
    print_status "Installation commands:"
    echo "  npm install @arcadia-components/button"
    echo "  npm install @arcadia-components/hello-world"
    echo ""
    print_success "🚀 Publish process completed!"
else
    print_error "Publish failed!"
    exit 1
fi
