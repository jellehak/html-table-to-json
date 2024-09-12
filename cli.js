#!/usr/bin/env node

import { program } from 'commander'
import HtmlTableToJson from './index.js'
import {readFileSync} from 'fs'

program
    .version('1.0.0')
    .description('A simple CLI tool')
    .argument('<string>', 'file')
    .option('-p, --pretty', 'Pretty print the JSON')
    .action((str, options) => {
        const content = readFileSync(str, 'utf8')
        const jsonTables = HtmlTableToJson.parse(content)

        if(options.pretty) {
            console.log(JSON.stringify(jsonTables.results, null, 2))
            return
        }

        console.log(JSON.stringify(jsonTables.results))
    });

program.parse(process.argv)