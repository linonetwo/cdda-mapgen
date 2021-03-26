import test from 'ava';
import fs from 'fs';
import { TreeNode } from '../../src/types';

/**
 * Unit under test
 */

import { learnEdgeStatistics, generate } from '../../src/index';

const exampleTemplates = JSON.parse(
  fs.readFileSync('../../data/exampleTemplates.json', 'utf-8')
) as TreeNode[];

test('learnStatisticsFromTemplates', t => {
  const statistics = learnEdgeStatistics(exampleTemplates);
});
