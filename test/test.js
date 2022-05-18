const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WebThreeBlog", async function () {
  it("Should create a post", async function () {
    const WebThreeBlog = await ethers.getContractFactory("WebThreeBlog");
    const webthreeblog = await WebThreeBlog.deploy("My webthreeblog");
    await webthreeblog.deployed();
    await webthreeblog.createPost("My first post", "12345");

    const posts = await webthreeblog.fetchPosts();
    expect(posts[0].title).to.equal("My first post");
  });

  it("Should edit a post", async function () {
    const WebThreeBlog = await ethers.getContractFactory("WebThreeBlog");
    const webthreeblog = await WebThreeBlog.deploy("My webthreeblog");
    await webthreeblog.deployed();
    await webthreeblog.createPost("My Second post", "12345");

    await webthreeblog.updatePost(1, "My updated post", "23456", true);

    posts = await webthreeblog.fetchPosts();
    expect(posts[0].title).to.equal("My updated post");
  });

  it("Should add update the name", async function () {
    const WebThreeBlog = await ethers.getContractFactory("WebThreeBlog");
    const webthreeblog = await WebThreeBlog.deploy("My webthreeblog");
    await webthreeblog.deployed();

    expect(await webthreeblog.name()).to.equal("My webthreeblog");
    await webthreeblog.updateBlogName("My new webthreeblog");
    expect(await webthreeblog.name()).to.equal("My new webthreeblog");
  });
});
