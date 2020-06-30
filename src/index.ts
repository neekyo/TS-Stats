import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
