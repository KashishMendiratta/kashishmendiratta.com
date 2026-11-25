import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const benchmark = JSON.parse(await readFile(resolve(root, 'data/datasail-benchmark.json'), 'utf8'));
const page = await readFile(resolve(root, 'components/portfolio-page.tsx'), 'utf8');
const copy = await readFile(resolve(root, 'lib/datasail-benchmark.ts'), 'utf8');
const visual = await readFile(resolve(root, 'public/projects/datasail-runtime.svg'), 'utf8');

const failures = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

expect(benchmark.benchmarkDataset === 'QM9', 'benchmarkDataset must be QM9');
expect(benchmark.endToEndSpeedup === 8.7, 'endToEndSpeedup must be 8.7');
expect(benchmark.evaluatedDatasets === 10, 'evaluatedDatasets must be 10');
expect(benchmark.splitSeeds === 5, 'splitSeeds must be 5');
expect(benchmark.fullDatasailReferenceDatasets === 9, 'fullDatasailReferenceDatasets must be 9');
expect(/^https:\/\/github\.com\/KashishMendiratta\/DataSAIL_scaling\/?$/.test(benchmark.sourceRepository), 'sourceRepository must point to DataSAIL_scaling');

expect(page.includes("import { dataSailCopy } from '@/lib/datasail-benchmark';"), 'portfolio must render DataSAIL copy from the canonical benchmark module');
expect(page.includes("image:'/projects/datasail-runtime.svg'"), 'portfolio must use the verified QM9 visual');
expect(!page.includes('datasail-runtime.png'), 'portfolio still references the legacy runtime chart');
expect(!/5[.,]8×.{0,40}HIV|HIV.{0,40}5[.,]8×/i.test(page + copy + visual), 'found the invalid 5.8× HIV claim');

for (const field of ['benchmarkDataset', 'endToEndSpeedup', 'evaluatedDatasets', 'splitSeeds', 'fullDatasailReferenceDatasets']) {
  expect(copy.includes(`benchmark.${field}`), `localized copy does not consume ${field}`);
}
for (const value of ['QM9', '8.7×', '10 DATASETS', '5 SEEDS']) {
  expect(visual.includes(value), `verified visual is missing ${value}`);
}

if (failures.length) {
  console.error(`DataSAIL metric verification failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('DataSAIL metrics verified: QM9, 8.7× speedup, 10 datasets, 5 seeds.');
