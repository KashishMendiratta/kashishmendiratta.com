import benchmark from '@/data/datasail-benchmark.json';

export const dataSailBenchmark = benchmark;

export const dataSailCopy = {
  en: {
    outcome: [`${benchmark.endToEndSpeedup}×`, `faster end-to-end splitting on ${benchmark.benchmarkDataset}`],
    description: `An anchor-based, balance-aware approximation for leakage-aware dataset splitting, evaluated over ${benchmark.splitSeeds} seeds on ${benchmark.evaluatedDatasets} molecular datasets. The current ${benchmark.scope} includes single-run Full DataSAIL references for ${benchmark.fullDatasailReferenceDatasets} datasets and an observed ${benchmark.endToEndSpeedup}× end-to-end runtime comparison on ${benchmark.benchmarkDataset}.`,
    proofs: [`${benchmark.endToEndSpeedup}× end-to-end`, `${benchmark.evaluatedDatasets} datasets`, `${benchmark.splitSeeds} split seeds`],
  },
  de: {
    outcome: [`${String(benchmark.endToEndSpeedup).replace('.', ',')}×`, `schnelleres End-to-End-Splitting auf ${benchmark.benchmarkDataset}`],
    description: `Eine ankerbasierte, balanceorientierte Approximation für leakage-bewusstes Dataset-Splitting, evaluiert mit ${benchmark.splitSeeds} Seeds auf ${benchmark.evaluatedDatasets} molekularen Datensätzen. Die aktuelle Provenienzstudie umfasst Full-DataSAIL-Referenzläufe für ${benchmark.fullDatasailReferenceDatasets} Datensätze und einen beobachteten ${String(benchmark.endToEndSpeedup).replace('.', ',')}-fachen End-to-End-Laufzeitvergleich auf ${benchmark.benchmarkDataset}.`,
    proofs: [`${String(benchmark.endToEndSpeedup).replace('.', ',')}× End-to-End`, `${benchmark.evaluatedDatasets} Datensätze`, `${benchmark.splitSeeds} Split-Seeds`],
  },
} as const;
