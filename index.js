async function main({argv}) {
    console.log('args', argv);
    return 0;
}

main(process)
    .then(process.exit)
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
