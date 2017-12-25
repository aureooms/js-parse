import { skip } from '@aureooms/js-stream' ;

/**
 * @kind function
 */
const skipblanks = stream => skip( stream , ' \t\n' ) ;

export default skipblanks ;
