import { testProp, fc } from 'ava-fast-check'

/**
 * Library under test
 */

import { treeDataGenerator } from '../../src/index'

testProp.skip(
    'TODO: property-test tree-data-generator',
    [
        // arbitraries
        fc.nat()
    ],
    (
        t,
        // test arguments
        natural
    ) => {
        // ava test here
    }, {
        verbose: true,
    }
)
