const { exec } = require("child_process");

const runScript = (script) => {
  return new Promise((resolve, reject) => {
    exec(`node scripts/${script}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing ${script}:`, error);
        reject(error);
        return;
      }
      console.log(`Output of ${script}:\n`, stdout);
      resolve();
    });
  });
};

const generateAllIcons = async () => {
  try {
    await runScript("generateIconsEthereal.js");
    await runScript("generateIconsSolid.js");
    await runScript("generateIconsOutline.js");
    console.log("All icons generated successfully");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
};

generateAllIcons();
