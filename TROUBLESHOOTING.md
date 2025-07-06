
# 🛠️ TROUBLESHOOTING — Exprezzzo AI Starter Kit

## Common Issues & Fixes

1. **Missing Firebase API key**
   - Make sure `.env.local` is filled out (see `.env.local.example`).

2. **npm run validate-env fails**
   - Check for typos or missing variables in `.env.local`.

3. **Can't switch project**
   - Run `node scripts/switch-project.js` from project root.

4. **Deploy fails with 400/401 error**
   - Verify Firebase credentials, or check if service account is expired.

5. **TypeScript errors**
   - Run `npm run type-check` and fix any reported issues.

6. **Build fails on static export**
   - Ensure `next.config.js` has `output: 'export'` set.

7. **VS Code not formatting**
   - Open `.vscode/settings.json` and check `"editor.formatOnSave": true`.

8. **Functions fail to deploy**
   - Update Firebase CLI and check `functions/package.json` scripts.

9. **No response from AI router**
   - Check that API keys are valid and network is not blocked.

10. **General: Clean install problems**
    - Run `npm install` again, or delete `node_modules` and reinstall.
