const accounts = [
  {
    name: "QNB Finansbank",
    image: "qnbfinansbank",
    iban: "TR74 0011 1000 0000 0109 8322 76",
  },
  {
    name: "Türkiye İş Bankası",
    image: "isbankasi",
    iban: "TR48 0006 4000 0013 7020 1590 95",
  },
  {
    name: "Garanti BBVA",
    image: "garanti",
    iban: "TR55 0006 2001 2200 0006 8670 51",
  },
  {
    name: "Yapı Kredi",
    image: "yapikredi",
    iban: "TR82 0006 7010 0000 0057 7169 20",
  },
  {
    name: "Akbank",
    image: "akbank",
    iban: "TR05 0004 6001 1588 8000 2354 42",
  },
  {
    name: "Papara",
    image: "papara",
    iban: "1099628972",
  },
];

window.addEventListener("load", () => {
  if (navigator.language.includes("tr")) {
    document.getElementById("bank-page-title").textContent = "Banka Hesapları";
    document.getElementById("bank-page-desc").textContent =
      "Gönderim yapmak istediğiniz bankayı herhangi bir kutucuğa tıklayarak IBAN adresini kopyalayabilirsiniz.";
    document.getElementById("bank-page-notice").textContent =
      'İsim ve soyisim kısmına "Emir Salih Kabal" yazın.';
  }
  const bankAccounts = document.querySelector(".bank-accounts");
  accounts.forEach((account) => {
    const bankAccount = document.createElement("li");
    bankAccount.innerHTML = `
    <img src="assets/images/banks/${account.image}.jpg" alt="${account.name} Görsel">
    <div class="content">
        <h2>${account.name}</h2>
        <span>
            ${account.iban}
        </span>
    </div>`;
    bankAccounts.appendChild(bankAccount);
  });

  document.querySelectorAll(".bank-accounts li").forEach((bankAccount) => {
    bankAccount.addEventListener("click", function () {
      if (this.classList.contains("copied")) return;
      const iban = this.querySelector("span").innerText;
      navigator.clipboard.writeText(iban);
      this.querySelector("span").innerText = navigator.language.includes("tr")
        ? "Kopyalandı!"
        : "Copied!";
      this.classList.add("copied");
      setTimeout(() => {
        this.querySelector("span").innerText = iban;
        this.classList.remove("copied");
      }, 2000);
    });
  });
});
