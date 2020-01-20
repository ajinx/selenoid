const { execSync } = require("child_process");

console.log(`## STARTING SELENOID USING CM TOOLS`);

execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start`)

console.log(`## STARTING SELENOID FINISHED`);
