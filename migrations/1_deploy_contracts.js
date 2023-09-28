const CrossChainMessage = artifacts.require("CrossChainMessage");
const { getAddress } = require("@zetachain/protocol-contracts");

module.exports = function(deployer,network) {
  const connector = getAddress("connector", network);
  const zetaToken = getAddress("zetaToken", network);
  const zetaTokenConsumerUniV2 = getAddress(
      "zetaTokenConsumerUniV2",
      network);
  const zetaTokenConsumerUniV3 = getAddress(
      "zetaTokenConsumerUniV3",
      network);
  deployer.deploy(CrossChainMessage,connector,zetaToken,zetaTokenConsumerUniV2 || zetaTokenConsumerUniV3);
};
