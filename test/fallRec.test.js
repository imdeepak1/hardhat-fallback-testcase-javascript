const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
describe("FunctionExample", function () {
  let signer, contractIs;

  async function deployContractFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const FunctionExample = await ethers.getContractFactory("FunctionExample");
    contractIs = await FunctionExample.deploy();
    return { owner, otherAccount, contractIs };
  }
  it("Should set the right owner", async function () {
    const { contractIs, owner } = await loadFixture(deployContractFixture);
    expect(await contractIs.owner()).to.equal(owner.address);
  });

  it("Expected the Fallback Called event to be emitted!", async function () {
    let response = await contractIs.sendTransaction({ to: contractIs.address });
    console.log(response);
    let receipt = await response.wait();
    console.log(receipt);
    const topic = await lock.interface.getEventTopic("FallbackCalled");
    console.log(topic);
    assert(deployedEvent, "Expected the Fallback Called event to be emitted!");
  });
});
