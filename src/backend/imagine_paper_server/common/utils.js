/**
 * @description 유틸성 메소드 정의
 */

const makeErrorResult = (code, msg) => {
    const retObj = {
        code,
        result: false,
        message: msg
    };

    return retObj;
};

const makeSuccessResult = (data) => {
    const retObj = {
        code: 0,
        result: true
    }

    if(data != null) {
        retObj.data = data;
    }

    return retObj;
}

module.exports = {
    makeErrorResult,
    makeSuccessResult
};
