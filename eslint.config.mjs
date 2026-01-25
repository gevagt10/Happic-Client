import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
      // '@nx/enforce-module-boundaries': [
      //   'error',
      //   {
      //     enforceBuildableLibDependency: true,
      //     allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
      //     depConstraints: [
      //       {
      //         "sourceTag": "type:app",
      //         "onlyDependOnLibsWithTags": ["type:feature", "type:ui", "type:util"]
      //       },
      //       {
      //         "sourceTag": "type:feature",
      //         "onlyDependOnLibsWithTags": ["type:ui", "type:util", "type:data-access"]
      //       },
      //       {
      //         sourceTag: 'scope:shared',
      //         onlyDependOnLibsWithTags: ['scope:shared'],
      //       },
      //       {
      //         sourceTag: 'scope:shop',
      //         onlyDependOnLibsWithTags: ['scope:shop', 'scope:shared'],
      //       },
      //       {
      //         sourceTag: 'scope:api',
      //         onlyDependOnLibsWithTags: ['scope:api', 'scope:shared'],
      //       },
      //       {
      //         sourceTag: 'type:data',
      //         onlyDependOnLibsWithTags: ['type:data'],
      //       },
      //     ],
      //   },
      // ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
