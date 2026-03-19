#!/bin/bash

# Git Commit & Push Script for Payment Kita Profile
# This script helps you make clean and structured commits

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}  Payment Kita - Git Commit Script${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
}

print_status() {
    echo -e "${YELLOW}Current Git Status:${NC}"
    git status --short
    echo ""
}

commit_and_push() {
    local type=$1
    local message=$2
    
    if [ -z "$type" ] || [ -z "$message" ]; then
        echo -e "${RED}Error: Type and message are required${NC}"
        echo "Usage: ./git-commit.sh <type> <message>"
        echo "Types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert"
        exit 1
    fi
    
    # Validate commit type
    valid_types=("feat" "fix" "docs" "style" "refactor" "test" "chore" "perf" "ci" "build" "revert")
    if [[ ! " ${valid_types[@]} " =~ " ${type} " ]]; then
        echo -e "${RED}Error: Invalid commit type '${type}'${NC}"
        echo "Valid types: ${valid_types[*]}"
        exit 1
    fi
    
    echo -e "${GREEN}Staging all changes...${NC}"
    git add -A
    
    echo -e "${GREEN}Running lint and build checks...${NC}"
    pnpm run lint
    if [ $? -ne 0 ]; then
        echo -e "${RED}Lint failed! Please fix errors before committing.${NC}"
        exit 1
    fi
    
    pnpm run build
    if [ $? -ne 0 ]; then
        echo -e "${RED}Build failed! Please fix errors before committing.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Running tests...${NC}"
    pnpm test
    if [ $? -ne 0 ]; then
        echo -e "${RED}Tests failed! Please fix failing tests before committing.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Creating commit...${NC}"
    git commit -m "${type}: ${message}"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Pushing to remote...${NC}"
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ Successfully committed and pushed!${NC}"
            echo ""
            echo -e "${BLUE}Commit Summary:${NC}"
            git log -1 --pretty=format:"%h %s" 
            echo ""
        else
            echo -e "${RED}✗ Push failed!${NC}"
            exit 1
        fi
    else
        echo -e "${YELLOW}No changes to commit or commit cancelled.${NC}"
    fi
}

show_help() {
    echo "Usage: ./git-commit.sh [command] [options]"
    echo ""
    echo "Commands:"
    echo "  commit <type> <message>    Stage all, run checks, commit and push"
    echo "  status                     Show git status"
    echo "  log                        Show commit history"
    echo "  help                       Show this help message"
    echo ""
    echo "Commit Types:"
    echo "  feat     - A new feature"
    echo "  fix      - A bug fix"
    echo "  docs     - Documentation changes"
    echo "  style    - Code style changes (formatting, etc)"
    echo "  refactor - Code refactoring without feature change"
    echo "  test     - Adding or updating tests"
    echo "  chore    - Maintenance tasks, dependencies"
    echo "  perf     - Performance improvements"
    echo "  ci       - CI/CD configuration changes"
    echo "  build    - Build system changes"
    echo "  revert   - Reverting a previous commit"
    echo ""
    echo "Examples:"
    echo "  ./git-commit.sh commit feat 'add new hero section animation'"
    echo "  ./git-commit.sh commit fix 'resolve navbar scroll issue'"
    echo "  ./git-commit.sh commit docs 'update README with setup instructions'"
    echo ""
}

# Main script
print_header

case "$1" in
    commit)
        commit_and_push "$2" "$3"
        ;;
    status)
        print_status
        ;;
    log)
        git log --oneline -10
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${YELLOW}No command specified. Use 'help' for usage information.${NC}"
        echo ""
        print_status
        echo -e "${BLUE}Quick Actions:${NC}"
        echo "  ./git-commit.sh commit feat 'your message'  - Commit new feature"
        echo "  ./git-commit.sh commit fix 'your message'   - Commit bug fix"
        echo "  ./git-commit.sh help                        - Show all options"
        echo ""
        ;;
esac
