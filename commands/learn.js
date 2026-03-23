module.exports = {
  cmd: "learn",

  execute(message) {
    setTimeout(() => {
      setTimeout(() => {
        message.author.send(
          `When you are ready, type ^start to begin your first session!`,
        );
      }, 10000);
      message.author.send(
        "My name is Supreme.Bot.HQ, I am excited to teach you all about Discord Bots, we will also be learning how to code one!\nWe first got to understand the basics of JavaScript as the language for Discord.js runs from JavaScript. I hope you enjoy your time!",
      );
    }, 1000);

    const quiz = require("./question1.json");
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    const filter = (response) => {
      return item.answer.some(
        (answer) => answer.toLowerCase() === response.content.toLowerCase(),
      );
    };
    message.author.send(item.question).then(() => {
      message.channel
        .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
        .then((collected) => {
          setTimeout(() => {}, 12000);
          message.channel.send(
            `${collected.first().author.username}, You seem ready to learn JavaScript!`,
          );

          const quiz = require("./question2.json");
          const item = quiz[Math.floor(Math.random() * quiz.length)];
          const filter = (response) => {
            return item.answer.some(
              (answer) =>
                answer.toLowerCase() === response.content.toLowerCase(),
            );
          };
          message.author.send(item.question).then(() => {
            message.channel
              .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
              .then((collected) => {
                message.channel.send(
                  `${collected.first().author.username}, Thanks!`,
                );

                const quiz = require("./question3.json");
                const item = quiz[Math.floor(Math.random() * quiz.length)];
                const filter = (response) => {
                  return item.answer.some(
                    (answer) =>
                      answer.toLowerCase() === response.content.toLowerCase(),
                  );
                };
                message.author.send(item.question).then(() => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 30000,
                      errors: ["time"],
                    })
                    .then((collected) => {
                      message.channel.send(
                        `${collected.first().author.username}, Thanks!`,
                      );

                      const quiz = require("./question4.json");
                      const item =
                        quiz[Math.floor(Math.random() * quiz.length)];
                      const filter = (response) => {
                        return item.answer.some(
                          (answer) =>
                            answer.toLowerCase() ===
                            response.content.toLowerCase(),
                        );
                      };

                      const Discord = require("discord.js");
                      const Session1Embed = new Discord.MessageEmbed()
                        .setAuthor("Learning JavaScript")
                        .setTitle("Session 1")
                        .setThumbnail("https://i.imgur.com/1UkcoFZ.png")
                        .addFields(
                          {
                            name: `__What is JavaScript__`,
                            value:
                              "```JavaScript is a programming language that allows you to implement complex features on web pages.\```",
                          },
                          {
                            name: `__Where JavaScript is used?__`,
                            value: "Just about every website uses JavaScript.",
                          },
                          {
                            name: "•Go ahead and launch your favorite web browser\n•Search up Google\n•You can also use this link",
                            value: "https://www.google.com",
                            inline: true,
                          },
                          {
                            name: "Your web browser should be displaying something like this:",
                            value: `Google's Homepage:`,
                          },
                        )
                        .setImage("https://i.imgur.com/DWQNfMF.jpg");

                      message.channel.send(Session1Embed);

                      message.author.send(item.question).then(() => {
                        message.channel
                          .awaitMessages(filter, {
                            max: 1,
                            time: 30000,
                            errors: ["time"],
                          })
                          .then((collected) => {
                            message.channel.send(
                              `${collected.first().author.username}, Great! Start by pressing CTRL+Shift-i to go in inspect mode.`,
                            );
                            const Session1EmbedA = new Discord.MessageEmbed()
                              .setAuthor("Learning JavaScript")
                              .setTitle("Session 1")
                              .addFields({
                                name: "Your web browser should be displaying something like this:",
                                value: `Google's Homepage:`,
                              })
                              .setImage("https://i.imgur.com/2mLtUCT.jpg");
                            message.channel.send(Session1EmbedA);
                          });
                        const Session1EmbedB = new Discord.MessageEmbed()
                          .setAuthor("Learning JavaScript")
                          .setTitle("Session 1")
                          .addFields({
                            name: 'Now, navigate your mouse to the "Elements" tab.',
                            value: "You should be seeing something like this",
                          })
                          .setImage("https://i.imgur.com/2LwJPD1.png");
                        message.channel.send(Session1EmbedB);

                        const quiz = require("./question4.json");
                        const item =
                          quiz[Math.floor(Math.random() * quiz.length)];
                        const filter = (response) => {
                          return item.answer.some(
                            (answer) =>
                              answer.toLowerCase() ===
                              response.content.toLowerCase(),
                          );
                        };
                        message.author
                          .send(item.question)
                          .then(() => {
                            message.channel
                              .awaitMessages(filter, {
                                max: 1,
                                time: 30000,
                                errors: ["time"],
                              })
                              .then((collected) => {
                                message.channel.send(
                                  `${collected.first().author.username}, Good Job!`,
                                );
                              });
                            const Discord = require("discord.js");
                            const Session1EmbedC = new Discord.MessageEmbed()
                              .setAuthor("Learning JavaScript")
                              .setTitle("Session 1")
                              .setThumbnail("https://i.imgur.com/UlvwQ4c.png")
                              .addFields(
                                {
                                  name: `What is HTML`,
                                  value: `This language is Html, it is not a programing language because it does not have \```jsif/else\``` statements. It really doesnt contain any programming logic.`,
                                },
                                {
                                  name: `What is It used for`,
                                  vaule: `Html is a big part of websites. It gives the websites life and content that you can see.`,
                                },
                              )
                              .setImage("https://i.imgur.com/DWQNfMF.jpg");
                            message.channel.send(Session1EmbedC);
                          })
                          .catch((collected) => {
                            message.channel.send(
                              `It looks like you did not awnser in time, please do "start" to try again.`,
                            );
                          });
                      });
                    });
                });
              });
          });
        });
    });
  },
};
