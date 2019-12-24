App = {
  web3Provider: null,
  contracts: {},

  account: null,
  contract: null,

  init: async function() {
    return await App.initWeb3();
  },

  initWeb3: async function() {
    if (typeof web3 !== "undefined") {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
      web3 = new Web3(App.web3Provider);
    }
    App.initContract();
    return App.initContract();
  },

  initNormalGiveContract: function() {
    $.getJSON("NormalGive.json", function(normalGive) {
      App.contracts.NormalGive = TruffleContract(normalGive);
    });
  },

  initContract: function() {
    $.getJSON("Crowdfunding.json")
      .then(crowdfunding => {
        App.contracts.Crowdfunding = TruffleContract(crowdfunding);
        App.contracts.Crowdfunding.setProvider(App.web3Provider);
        // Truffle contracts from the artifacts
        // Companies
      })
      .then(() => $.getJSON("ana.json"))
      .then(ana => {
        App.contracts.ana = TruffleContract(ana);
        App.contracts.ana.setProvider(App.web3Provider);
      })
      .then(() => $.getJSON("awc.json"))
      .then(awc => {
        App.contracts.awc = TruffleContract(awc);
        App.contracts.awc.setProvider(App.web3Provider);
      })
      .then(() => $.getJSON("es.json"))
      .then(es => {
        App.contracts.es = TruffleContract(es);
        App.contracts.es.setProvider(App.web3Provider);
      })
      .then(() => $.getJSON("slurm.json"))
      .then(slurm => {
        App.contracts.slurm = TruffleContract(slurm);
        App.contracts.slurm.setProvider(App.web3Provider);
      })
      // Charities
      .then(() => $.getJSON("carbon_neutral.json"))
      .then(carbon_neutral => {
        App.contracts.carbon_neutral = TruffleContract(carbon_neutral);
        App.contracts.carbon_neutral.setProvider(App.web3Provider);
      })
      .then(() => $.getJSON("climeworks.json"))
      .then(climeworks => {
        App.contracts.climeworks = TruffleContract(climeworks);
        App.contracts.climeworks.setProvider(App.web3Provider);
      })
      .then(() => $.getJSON("team_trees.json"))
      .then(team_trees => {
        App.contracts.team_trees = TruffleContract(team_trees);
        App.contracts.team_trees.setProvider(App.web3Provider);
      })
      .then(() => $.getJSON("ecosia.json"))
      .then(ecosia => {
        App.contracts.ecosia = TruffleContract(ecosia);
        App.contracts.ecosia.setProvider(App.web3Provider);
      })
      .then(() => {
        return App.render();
      });
    // this actually inits many different contracts
  },

  // master get-money-from-company function
  getMoney: async function(org) {
    // let a = await App["contract" + org.toString()].getMoney2(App.account);
    // console.log(a);
    let ret = await App["contract" + org.toString()].getMoney(App.account, {
      from: App.account,
      value: web3.toWei("0", "ether"),
      gas: 300000,
      message: "test"
    });
    console.log(ret);
  },

  // master startup function
  donateLarge: async function(org) {
    if (!confirm("Send 30 ETH?")) return;
    let ret = await App["charity" + org].donate(App.account, {
      from: App.account,
      value: web3.toWei("30", "ether")
    });

    return App.render();
  },

  // standard render function
  render: async function() {
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        // $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    // Companies
    App.contract1 = await App.contracts.ana.deployed();
    App.contract2 = await App.contracts.awc.deployed();
    App.contract3 = await App.contracts.es.deployed();
    App.contract4 = await App.contracts.slurm.deployed();

    // Charities
    App.charity1 = await App.contracts.carbon_neutral.deployed();
    App.charity2 = await App.contracts.climeworks.deployed();
    App.charity3 = await App.contracts.team_trees.deployed();
    App.charity4 = await App.contracts.ecosia.deployed();
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });

  $("#getCoins1").click(e => {
    App.getMoney("1");
  });
  $("#getCoins2").click(e => {
    App.getMoney("2");
  });
  $("#getCoins3").click(e => {
    App.getMoney("3");
  });
  $("#getCoins4").click(e => {
    App.getMoney("4");
  });

  // Donations to Charity
  $("#donateLarge").click(e => {
    App.donate();
  });
  $("#donateLarge1").click(e => {
    App.donateLarge("1");
  });
  $("#donateLarge2").click(e => {
    App.donateLarge("2");
  });
  $("#donateLarge3").click(e => {
    App.donateLarge("3");
  });
  $("#donateLarge4").click(e => {
    App.donateLarge("4");
  });
});
