import log, { getCurrentHour, MyLogger} from './myLogger';

log('gggggggg');

log(getCurrentHour());

const logger = new MyLogger();

log('lectures of codesquad are {logger.getLectures()}');
