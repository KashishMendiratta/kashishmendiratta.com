# Kashish Mendiratta- Portfolio

Source for [kashishmendiratta.com](https://kashishmendiratta.com), a portfolio focused on applied machine learning, AI engineering, and deployable systems.

## What the site demonstrates

- Evidence-led case studies across scientific ML, speech, computer vision, and demand modelling
- Responsive, accessible frontend design
- Reproducible dependency management and production builds
- Automated quality checks through GitHub Actions
- Cloud deployment with a custom domain

## Local development

Requires Node.js 22 and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm verify:metrics
pnpm lint
pnpm build
```

Every push and pull request to `main` runs the same checks in GitHub Actions.

DataSAIL claims are defined once in `data/datasail-benchmark.json`. The verification step checks the English and German copy, the QM9 visual, and guards against the retired HIV metric returning.

## Cloudflare deployment

The production application is a Cloudflare Worker with static assets. To deploy a preview to the project's `workers.dev` address:

```bash
pnpm wrangler login
pnpm deploy:cloudflare
```

Verify the temporary address before attaching `kashishmendiratta.com` as a custom domain in Cloudflare.

After verification, deploy the same build to the production custom domain:

```bash
pnpm deploy:production
```

## Featured work

The project visuals are authentic outputs from the repositories linked on the site. Project details and metrics are drawn from their reproducible analyses and documentation.

## License

© 2026 Kashish Mendiratta. Portfolio content and design are not licensed for reuse.
