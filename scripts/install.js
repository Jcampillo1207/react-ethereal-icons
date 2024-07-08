const { exec } = require("child_process");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");

const variants = ["ethereal", "solid", "outline"];

inquirer
  .prompt([
    {
      type: "list",
      name: "variant",
      message: "Which variant of ethereal-icons do you want to install?",
      choices: variants,
    },
  ])
  .then((answers) => {
    const variant = answers.variant;
    console.log(`Generating ${variant} icons...`);

    exec(
      `node scripts/generateIcons${
        variant.charAt(0).toUpperCase() + variant.slice(1)
      }.js`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error generating ${variant} icons:`, error);
          return;
        }
        console.log(`Successfully generated ${variant} icons:\n`, stdout);

        // Clean up other variants
        variants
          .filter((v) => v !== variant)
          .forEach((v) => {
            fs.removeSync(path.join(__dirname, `../src/${v}`));
            fs.removeSync(path.join(__dirname, `../dist/${v}`));
          });
      }
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });
