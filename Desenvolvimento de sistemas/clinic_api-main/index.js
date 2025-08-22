function loop() {
    for (let i = 0; i < 10; i++) {
        console.log(`Iteration ${i + 1}`);
    };
}

loop()

setTimeout(() => {
    console.log("Timeout completed");
}, 1000);
