const config = {
  "ownerID": "560518660427350018",//Bu kısıma, kendi ID'niz. 
  "admins": ["542009610253631523"],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": ["542009610253631523"],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "NjY2NjQ2OTczOTIyODAzNzEy.Xk6UZg.lrWWcNerIsTyVSReLJRqL7hfxJ0",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "AEwbUAzphdpTAAkeRjxtGj4-7_whq2gL",//Client secret.
    "callbackURL": `https://kayit-sistemi-denemesi.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Codare",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://patron-website.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;