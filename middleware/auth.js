const authMiddleware = (req, res, next) => {
    try {
        console.log("auth middleware");
    } catch (error) {
        console.error(error);
    }
}