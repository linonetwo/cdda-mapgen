import fs from 'fs';
import path from 'path';
import { TreeNode } from '../src/types';

/**
 * Unit under test
 */

import { learnEdgeStatistics, generate } from '../src/index';

const exampleTemplates = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../data/exampleTemplates.json'),
    'utf-8'
  )
) as TreeNode[];

const statistics = learnEdgeStatistics(exampleTemplates);
// DEBUG: console
console.log(`statistics`, statistics);

const generationResult = generate(statistics);
// DEBUG: console
console.log(`generationResult`, JSON.stringify(generationResult));
