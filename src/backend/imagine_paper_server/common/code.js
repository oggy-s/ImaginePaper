/**
 * @description 에러 코드 정의
 */

const CODE = (_) => {
    return {
        SUCCESS: 0,
        
        // http error
        NOT_FOUND: -404,
        INTER_SERVER_ERROR: -500,

        // server error
        PARAM_EMPTY_CATEGORY_NAME: -1001,
        PARAM_INVALID_CATEGORY_NAME: -1002,
        NOT_FOUND_CATEGORY: -1003,

        PARAM_EMPTY_PAPER_ID: -1101,
        PARAM_INVALID_PAPER_ID: -1102,
        NOT_FOUND_PAPER: -1103,
    };
};

module.exports = {
    CODE
};
