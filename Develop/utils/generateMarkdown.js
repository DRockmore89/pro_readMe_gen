// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case 'GNU GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;   
    case 'Apache license 2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case 'Mozilla Public License 2.0':
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    default:
      return ''
          
    }
 


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case 'GNU GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;   
    case 'Apache license 2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case 'Mozilla Public License 2.0':
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    default:
      return ''
          
    }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return licenseText.AGPLv3;
    case 'GNU GPLv3':
      return licenseText.GPLv3;
    case 'MIT':
      return licenseText.MIT;   
    case 'Apache license 2.0':
      return licenseText.Apache;
    case 'Mozilla Public License 2.0':
      return licenseText.Mozilla
    default:
      return ''
          
    }
}

// gitt

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.projectlicense);
  let licenseLink = renderLicenseLink(answers.projectlicense);
  let licenseSection = renderLicenseSection(answers.projectlicense);
  let tableofcontent = renderTableofcontent(answers);
  return `# ${answers.projectName}\n
  ![${answers.projectlicense}](${licenseBadge})\n
  [Repository](${answers.projectRepo})\n
  ## Table of Content\n ${tableofcontent}\n
  ## Description\n > ${answers.projectDescription}\n
  ##Installation\n > ${answers.projectInstallation}\n
  ##usage\n > ${answers.projectUsage}\n
  ##License\n > [${answers.projectLicense}](${licenseLink})\n
  ${licenseSection}\n
  ##Contact\n > Please contact me for any questions about projects or work


  

`;
}

module.exports = generateMarkdown;
