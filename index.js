const Discord = require('discord.js');
const Client = new Discord.Client();
const config = require("./config.json");
const colors = require("./colors.json");
const invites = {};
let invitations = {}

Client.on("ready", async () => {
  Client.guilds.cache.forEach(guild => {     
      guild.fetchInvites().then(i => {     
          invitations[guild.id] = i      
      })
  })
  console.log("Le bot est on !")
  Client.user.setActivity("Crée par Elpistolero13#1350", { type: 'LISTENING' });
  Client.guilds.cache.find(guild => guild.id === "724355172842602569").channels.cache.find(channel => channel.id === "741819153509384192").messages.fetch("743096206040891443").then(message => {
      console.log("Message ajouté à la mémoire : " + message.content);
  }).catch(err => {
      console.log("une erreur est survenue !");
  })
});

Client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (message.channel.id === '741819153509384192') {
    message.react("✅")
  }
  if (message.channel.id === '741809167735455785') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '742391630983856198') {
    message.react("✅")
    message.react("❌")
  }

  if (message.channel.id === '724372714932011048') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724372686909997187') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724372620790988852') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724366710236250193') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724367775686197309') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724377980985671793') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724366459400093710') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '741817313602306079') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724377193656090635') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724367827133530142') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724367900898754571') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724368871343128597') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724368903794458704') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '741805834153230456') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724368347839463425') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724373508104388608') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724373703588315216') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724371875085549589') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724373811645907026') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724371915447336960') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724371979888754699') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724372098411397250') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724372035719135353') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '741809767965524110') {
    message.react("✅")
    message.react("❌")
  }
  if (message.channel.id === '724372620790988852') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **2 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724372686909997187') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **1 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724372714932011048') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **30 minute** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '741809167735455785') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **10 minutes** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '742391630983856198') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **15 minutes** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724366710236250193') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724367775686197309') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724377980985671793') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724366459400093710') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '741817313602306079') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724377193656090635') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724367900898754571') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724368871343128597') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '741805834153230456') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724368347839463425') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724367827133530142') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724368903794458704') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724373703588315216') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724371875085549589') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724373811645907026') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724371915447336960') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724371979888754699') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724372098411397250') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724372035719135353') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '741809767965524110') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };

  if (message.channel.id === '724373508104388608') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> LES CONDITIONS DE PUB')
      .setDescription('<:image01:742368647841841233> Vous pouvez poster une pub toutes les **6 heures** !\n<:image01:742368647841841233> Avant de mettre votre pub, veuillez lire le **<#724355173303975956>** du serveur !\n<:image01:742368647841841233> Afin d\'obtenir plus d\'aventages et plus de visibilité sur le serveur, lisez **<#742394519194042458>**!\n<:image01:742368647841841233> Si vous quittez le serveur, vos pubs seront automatiquement **__supprimées__** !\n \n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');

    message.channel.send(exampleEmbed)

  };
  if (message.channel.id === '741819153509384192') {

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(colors.VIOLET)
      .setURL('')
      .setTitle('<:attention7:742366284204867584> VERIFICATION')
      .setDescription('<:image01:742368647841841233> **Afin de vérifier que vous n\'êtes pas un robot veuillez cocher la réaction __ci-dessous __ !**\n\n<:attention7:742366284204867584> **Créateur du bot : <@!691644619758370846>**');
      message.channel.send(exampleEmbed)
      message.react("✅");
  };
  
  if (message.channel.id === '742453936442835016') {

  if (message.content == "*$ping") {
    message.channel.send(Client.ws.ping + "ms pong" + "🏓");
  }};
})

Client.on("raw", event => {
  if(event.t === "MESSAGE_REACTION_ADD"){
    if(event.d.message_id === "743096206040891443"){
      let guild = Client.guilds.cache.get(event.d.guild_id)
      let member = guild.members.cache.get(event.d.user_id)
      if(member.bot) return;
      if(event.d.emoji.name === "✅"){
        member.roles.add("741987468517048330")
        member.roles.remove("741984445824761906")
      }
    }
  }
})

Client.on("guildMemberAdd", member => {
  member.guild.channels.cache.find(channel => channel.id === "741811934026006550").send("**Bienvenue** a toi " + member.toString() + ", merci d'avoir rejoins notre serveur ! À présent, afin de respecter le règlement du serveur, tu peux te renseigner dans les salons ci-dessous : \n\n<:image01:742368647841841233> <#724355173303975956> \n\n<:image01:742368647841841233> <#724375893341896706>")
  member.roles.add("741984445824761906").then(mbr => {
  }).catch(() => {
    console.log("Le role n'a pas pu être attribuer je c pas pk ?");
  });
});

Client.on('guildMemberAdd', member => {
  if(invitations[member.guild.id]) {      
    member.guild.fetchInvites().then(i => {     
        const usedInvite = i.filter(inv => invitations[member.guild.id].get(inv.code).uses < inv.uses).first()
        member.guild.channels.cache.find(channel => channel.id === "741821249889632359").send(`${member} a rejoint le serveur grâce à **${usedInvite.inviter.username}**, **${usedInvite.inviter.username}** tu as ` + usedInvite.uses + ` invite(s) !`);
        invitations[member.guild.id] = i
    })
  }
});

Client.login(config.token);