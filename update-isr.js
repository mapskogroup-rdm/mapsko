const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/**/*.tsx');
let updatedCount = 0;

for (const file of files) {
  if (file.includes('page.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('generateMetadata') || content.includes('generateStaticParams')) {
      if (!content.includes('export const revalidate')) {
        // find the last import and insert it after
        const lastImportIndex = content.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
          const endOfImport = content.indexOf('\n', lastImportIndex);
          content = content.slice(0, endOfImport + 1) + '\nexport const revalidate = 60;\n' + content.slice(endOfImport + 1);
          fs.writeFileSync(file, content);
          console.log('Added ISR to ' + file);
          updatedCount++;
        }
      }
    }
  }
}
console.log('Total files updated:', updatedCount);
