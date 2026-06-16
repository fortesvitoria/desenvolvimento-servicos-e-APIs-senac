function realizaLog(req, res, next) {
    console.log(`Endpoint: ${req.method} ${req.path}`);
    req.requestTime = Date.now();
    next();
    res.on("finish", () => {
        console.log("Status code:", res.statusCode);
        let tempoExec = Date.now() - req.requestTime;
        console.log(`Tempo de execução: ${tempoExec}ms`);
    });
}

module.exports = {
    realizaLog
}        
        