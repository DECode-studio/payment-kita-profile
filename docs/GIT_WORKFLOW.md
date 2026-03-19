# Git Workflow Guide - Payment Kita Profile

## 📋 Conventional Commits

Proyek ini menggunakan [Conventional Commits](https://www.conventionalcommits.org/) untuk struktur commit yang konsisten dan mudah dibaca.

### Format Commit

```
<type>: <description>

[optional body]

[optional footer]
```

### Types (Tipe Commit)

| Type | Description | Example |
|------|-------------|---------|
| `feat` | Fitur baru | `feat: add language switcher component` |
| `fix` | Bug fix | `fix: resolve navbar scroll detection` |
| `docs` | Dokumentasi | `docs: update README with setup guide` |
| `style` | Code style (formatting, dll) | `style: format components with prettier` |
| `refactor` | Refactoring tanpa perubahan fitur | `refactor: extract translation logic to hook` |
| `test` | Menambah/update test | `test: add unit tests for Button component` |
| `chore` | Maintenance, dependencies | `chore: update next.js to latest version` |
| `perf` | Performance improvement | `perf: optimize image loading` |
| `ci` | CI/CD changes | `ci: add github actions workflow` |
| `build` | Build system | `build: configure webpack for production` |
| `revert` | Revert commit sebelumnya | `revert: revert "feat: add analytics"` |

## 🚀 Quick Commit Script

Gunakan script otomatis untuk commit yang lebih mudah:

```bash
# Commit dengan checks otomatis (lint, build, test)
./scripts/git-commit.sh commit <type> "<message>"

# Contoh:
./scripts/git-commit.sh commit feat "add new hero section animation"
./scripts/git-commit.sh commit fix "resolve navbar scroll issue"
./scripts/git-commit.sh commit docs "update README"
```

### Script Features

- ✅ Auto stage semua changes
- ✅ Run lint check
- ✅ Run build verification
- ✅ Run tests
- ✅ Commit dengan format yang benar
- ✅ Auto push ke remote

## 📝 Manual Commit Workflow

### 1. Cek Status

```bash
git status
```

### 2. Stage Changes

```bash
# Stage semua file
git add .

# Stage file spesifik
git add src/components/Navbar.tsx
git add src/lib/translations/
```

### 3. Commit dengan Pesan yang Jelas

**❌ Buruk:**
```bash
git commit -m "update"
git commit -m "fix stuff"
git commit -m "changes"
```

**✅ Baik:**
```bash
git commit -m "feat: add language switcher with dropdown menu"
git commit -m "fix: resolve navbar background on scroll"
git commit -m "refactor: simplify translation hook logic"
```

### 4. Commit dengan Body (untuk perubahan besar)

```bash
git commit -m "feat: implement i18n system

- Add translation context and provider
- Create language switcher component
- Update all sections to use translator
- Add Bahasa Indonesia and English translations
- Configure next-i18next"
```

### 5. Push ke Remote

```bash
# Push ke branch utama
git push origin main

# Push dengan upstream (untuk branch baru)
git push -u origin feature-branch
```

## 🌿 Branch Strategy

### Branch Naming Convention

```
<type>/<description>

# Examples:
feat/language-switcher
fix/navbar-scroll-issue
refactor/translation-system
docs/readme-update
test/button-component
```

### Workflow

```bash
# 1. Buat branch baru dari main
git checkout main
git pull origin main
git checkout -b feat/new-feature

# 2. Develop & commit
git add .
git commit -m "feat: add new feature"

# 3. Push branch
git push -u origin feat/new-feature

# 4. Buat Pull Request di GitHub

# 5. Setelah merge, hapus branch
git checkout main
git pull origin main
git branch -d feat/new-feature
```

## 📊 Commit History

### Lihat Log

```bash
# Last 10 commits (compact)
git log --oneline -10

# Dengan graph
git log --oneline --graph -10

# Dengan stats
git log --stat -5
```

### Contoh Output yang Baik

```
* 3edb3dc (HEAD -> main) feat: implement complete i18n system
* 8b36fd1 refactor: update layout with icon configuration
* 0b218e6 feat: add Payment Kita SVG icon as favicon
* 5e7a38d (origin/main) first commit
* dce9cc4 Initial commit from Create Next App
```

## 🔧 Useful Git Commands

### Undo Changes

```bash
# Unstage file
git reset HEAD <file>

# Discard local changes
git checkout -- <file>

# Amend last commit (edit message atau add files)
git commit --amend -m "new message"
```

### Stash Changes

```bash
# Simpan changes sementara
git stash

# Lihat stash list
git stash list

# Restore stash
git stash pop
```

### Check Diffs

```bash
# Unstaged changes
git diff

# Staged changes
git diff --staged

# Between commits
git diff commit1 commit2
```

## 🎯 Best Practices

### ✅ DO

- Commit kecil dan fokus pada satu hal
- Gunakan present tense ("add" bukan "added")
- Kapitalisasi huruf pertama pada message
- Tidak ada titik di akhir message
- Run tests sebelum commit
- Pull sebelum push untuk avoid conflicts

### ❌ DON'T

- Commit besar dengan banyak perubahan tidak terkait
- Commit dengan "WIP" atau "fix" saja
- Commit code yang tidak passing tests
- Push tanpa review perubahan
- Commit file sensitif (passwords, API keys, .env)

## 📦 Example Session

```bash
# Start work
git checkout main
git pull origin main
git checkout -b feat/hero-animation

# Develop feature...
git status
git add src/components/sections/HeroSection.tsx
git commit -m "feat: add floating animation to hero section

- Implement CSS keyframes for float effect
- Add staggered fade-in animations
- Optimize animation performance with GPU acceleration"

# Continue development...
git add src/app/globals.css
git commit -m "style: add animation utilities to global styles"

# Final checks
pnpm run lint
pnpm run build
pnpm test

# Push
git push -u origin feat/hero-animation

# Create PR di GitHub...

# After merge
git checkout main
git pull origin main
git branch -d feat/hero-animation
```

## 🔗 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Commit Message Guidelines](https://www.conventionalcommits.org/en/v1.0.0/)
