const bcrypt = require('bcrypt')

async function verifyPassword() {
  const myPassword = 'admin 123 .202'
  const hash = '$2b$10$EAJynw84/eDuFGGG1dOcUOEtPF8B2UG1.2OsYBwW5eatiduVJFz0q'
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch)
}

verifyPassword();
