module.exports = {
  Client: {
    TOKEN: "MTA2MzgyOTk3MDA0MTk3MDcwOA.GqVLLU.aNMGXXs10B6MGSbeNT6JJ7UEHz0EQAGCM3SYzs",
    ID: "1063829970041970708" 
  },

  Handler: {
    GUILD_ID: "10555424699761418861063119547848212500", // Your guild/server ID where you want the mails will be created. [REQUIRED]
    CATEGORY_ID: "1063119547848212500" // Custom category ID where you want the mails will be created on. You can use /setup slash command to create a category without using this variable.
  },

  Modmail: {
    INTERACTION_COMMAND_PERMISSIONS: ['Administrator'], // The permissions for the slash commands that admins/server managers can access only. [REQUIRED]
    MAIL_MANAGER_ROLES: ['1059181099466620959'], // The roles for the category where moderators can manage mails.
    MENTION_MANAGER_ROLES_WHEN_NEW_MAIL_CREATED: false // If this is "true": When a mail created, all the MANAGER_ROLES will be pinged. Else, if "false": It doesn't ping the roles.
  }
};
