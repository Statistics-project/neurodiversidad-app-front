const fs = require('fs');
const path = require('path');
const dir = 'src/components/lesson/earth-lesson/screens';

fs.readdirSync(dir).forEach(f => {
  const p = path.join(dir, f);
  if (!p.endsWith('.tsx')) return;
  let c = fs.readFileSync(p, 'utf8');
  
  // Remove ScreenProps from the destructured import
  c = c.replace(/,\s*ScreenProps\s*}/g, '}');
  
  // Add import type { ScreenProps } from "../components/UI";
  c = c.replace(/from "\.\.\/components\/UI";/g, 'from "../components/UI";\nimport type { ScreenProps } from "../components/UI";');
  
  fs.writeFileSync(p, c);
});
console.log('Fixed imports!');
