import { wrapModules, setConfig } from 'storybox';
setConfig({});
wrapModules(require('glob!./glob.txt'));