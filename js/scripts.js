/// Business Logic
function BankAccount(name, initialDeposit) {
  this.name   = name;
  this.amount = initialDeposit;
}

BankAccount.prototype.withdraw = function (delta) {
  this.amount -= delta;
//Extend this by adding logic to account for negative balances: refusing to overdraw, etc.
};

BankAccount.prototype.deposit = function (delta) {
  this.amount += delta;
};

/// User Interface Logic ///

$(document).ready(function() {
  $(function() {
    var account;
    function update() {
      $("#info h2").text(account.name);
      $("#info h3").text(account.amount);
    }

    $("form#new-account-form").submit(function(event) {
      event.preventDefault();
      account = new BankAccount(
          $("input[name=name]").val(),
          parseInt($("input[name=initial]").val())
      )
      update();
    });

    $("form#transaction-form").submit(function(event) {
      event.preventDefault();
      if (typeof account === "object") {
        account.withdraw(parseInt($("input[name=withdraw]").val()));
        account.deposit(parseInt($("input[name=deposit]").val()));
        update();
      }
    });
  });
});
