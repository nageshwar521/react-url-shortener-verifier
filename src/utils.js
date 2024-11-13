export const generateShortString = () => {
    let alphaNumeric = 'abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYG1234567890';
    let result = '';
    const getRandomNum = () => {
        const randNum = Math.floor(Math.random() * alphaNumeric.length - 1);
        if (randNum < 0) {
            return getRandomNum()
        } else {
            return randNum;
        }

    }
    for (let i = 0; i < 8; i++) {
        let randNum = getRandomNum();
        console.log(randNum);
        result += alphaNumeric[randNum];
    }

    return result;
}