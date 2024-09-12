#!/usr/bin/env node

import { program } from 'commander'
import HtmlTableToJson from './index.js'
import {readFileSync} from 'fs'

program
    .version('1.0.0')
    .description('A simple CLI tool')
    .argument('<string>', 'file')
    //   .option('-n, --name <type>', 'Specify your name')
    .action((str, options) => {
        const content = readFileSync(str, 'utf8')
        const jsonTables = HtmlTableToJson.parse(content);

        console.log(jsonTables.results);
    });

program.parse(process.argv);