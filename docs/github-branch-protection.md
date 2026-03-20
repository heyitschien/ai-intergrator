# Protect `main` with CI (GitHub settings)

Branch protection is enforced in **GitHub**, not in the repo files. After your CI workflow is on `main`, enable this so nothing merges without a green build.

## Steps (repo admin)

1. Open **GitHub → Repository → Settings → Branches**.
2. **Add branch protection rule** for `main`.
3. Enable:
   - **Require a pull request before merging** (optional but recommended).
   - **Require status checks to pass before merging** → add **`ci`** (or the job name shown on PR checks).
   - **Require branches to be up to date before merging** (recommended with CI).
4. Optional: **Require linear history**, **Do not allow bypassing** for admins if you want strict enforcement.

## What the repo already does

- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) runs on **every pull request** and on **pushes to `main`**: `npm ci`, `npm run lint`, `npm run build`.

## Workflow for changes

1. Create a branch (e.g. `feature/...`).
2. Open a **PR into `main`**.
3. Wait for **CI** to pass.
4. Merge after review.
