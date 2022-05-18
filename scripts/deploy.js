const hre = require("hardhat");
const fs = require("fs");

async function main() {
  /* these two lines deploy the contract to the network */
  const WebThreeBlog = await hre.ethers.getContractFactory("WebThreeBlog");
  const webthreeblog = await WebThreeBlog.deploy("My webthreeblog");

  await webthreeblog.deployed();
  console.log("WebThreeBlog deployed to:", webthreeblog.address);

  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  fs.writeFileSync(
    "./config.js",
    `
  export const contractAddress = "${webthreeblog.address}"
  export const ownerAddress = "${webthreeblog.signer.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
