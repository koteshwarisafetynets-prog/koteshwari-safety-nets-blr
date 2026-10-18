const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Complete mapping of old image paths to new Koteshwari-branded WebP paths
const imageMap = {
  // Main & Services
  "/images/main-images/balcony-safetynets.webp": "/images/services/koteshwari-balcony-safety-nets-bangalore.webp",
  "/images/services/balcony-work-real.jpg": "/images/services/koteshwari-balcony-net-installation-bangalore.webp",
  "/images/materials/Balconynetwork.jpeg": "/images/materials/koteshwari-balcony-mesh-material.webp",
  "/images/hero/balconysafetynet.jpg": "/images/hero/koteshwari-balcony-safety-netting-bangalore.webp",
  "/images/gallery/before_balcony.webp": "/images/gallery/koteshwari-before-balcony-installation.webp",
  "/images/gallery/before_window.webp": "/images/gallery/koteshwari-before-window-installation.webp",
  "/images/services/child.webp": "/images/services/koteshwari-children-safety-nets-bangalore.webp",
  "/images/services/pet-safetynets-real.jpeg": "/images/services/koteshwari-pet-safety-nets-bangalore.webp",
  "/images/hero/pet.jpg": "/images/hero/koteshwari-cat-dog-balcony-protection.webp",
  "/images/services/service_pet_net.webp": "/images/services/koteshwari-pet-net-protection-bangalore.webp",
  "/images/hero/pigeonnet.jpg": "/images/hero/koteshwari-pigeon-safety-nets-bangalore.webp",
  "/images/services/monkey-safety-nets-real.jpg": "/images/services/koteshwari-monkey-safety-nets-bangalore.webp",
  "/images/main-images/monkey-safety.webp": "/images/main-images/koteshwari-monkey-proof-netting.webp",
  "/images/hero/monkeysafetynet.webp": "/images/hero/koteshwari-monkey-barrier-net-bangalore.webp",
  "/images/services/cricket-practice-net.jpg": "/images/services/koteshwari-cricket-practice-net-bangalore.webp",
  "/images/materials/BoxCricketnet.jpeg": "/images/materials/koteshwari-box-cricket-netting-bangalore.webp",
  "/images/materials/FactoryNets.jpeg": "/images/materials/koteshwari-industrial-factory-safety-nets.webp",
  "/images/main-images/Sports-Nets-3.jpg": "/images/main-images/koteshwari-sports-ground-netting-bangalore.webp",
  "/images/main-images/duct-area-real.webp": "/images/main-images/koteshwari-building-duct-area-safety-nets.webp",
  "/images/main-images/building-duct-pigeon-netting.jpg": "/images/main-images/koteshwari-building-duct-pigeon-netting.webp",
  "/images/services/duct-area-2.jpg": "/images/services/koteshwari-duct-area-pigeon-netting.webp",
  "/images/main-images/Duct-Area-3.jpg": "/images/main-images/koteshwari-duct-shaft-safety-mesh.webp",
  "/images/services/duct-area-real.webp": "/images/services/koteshwari-duct-area-netting-bangalore.webp",
  "/images/services/building-duct-pigeon-netting.jpg": "/images/services/koteshwari-duct-pigeon-nets-bangalore.webp",
  "/images/services/bird-spikes-real.jpg": "/images/services/koteshwari-anti-bird-spikes-bangalore.webp",
  "/images/hero/service-spikes.jpg": "/images/hero/koteshwari-polycarbonate-bird-spikes.webp",
  "/images/services/mosquito-net.jpg": "/images/services/koteshwari-window-mosquito-mesh-bangalore.webp",
  "/images/main-images/mosquito-net.jpg": "/images/services/koteshwari-window-mosquito-mesh-bangalore.webp",
  
  // Invisible Grills
  "/images/main-images/Balcony-Grills.jpg": "/images/main-images/koteshwari-balcony-invisible-grills-bangalore.webp",
  "/images/services/balcony-invisible-grills-real.jpg": "/images/services/koteshwari-ss316-balcony-invisible-grills.webp",
  "/images/services/shyambalconygrills.jpg": "/images/services/koteshwari-luxury-balcony-invisible-grills.webp",
  "/images/services/window-grills-real.webp": "/images/services/koteshwari-window-invisible-grills-bangalore.webp",
  "/images/hero/windowgrill.webp": "/images/hero/koteshwari-window-safety-grills-bangalore.webp",
  "/images/services/service_window_grill.webp": "/images/services/koteshwari-window-grill-view-bangalore.webp",
  "/images/services/shyamchildreninvisiblegrills.jpg": "/images/services/koteshwari-children-invisible-grills.webp",
  "/images/services/shyampetinvisiblegrills.jpg": "/images/services/koteshwari-pet-invisible-grills.webp",
  "/images/services/Shayamstaircase-grills.jpg": "/images/services/koteshwari-staircase-invisible-grills.webp",
  
  // Cloth Hangers
  "/images/services/ceiling-cloth-hangers-1.jpg": "/images/services/koteshwari-ceiling-cloth-drying-hangers.webp",
  "/images/services/ceiling-cloth-hangers-2.jpg": "/images/services/koteshwari-pulley-cloth-drying-hangers.webp",
  "/images/services/cloth-hangers-real.jpg": "/images/services/koteshwari-balcony-cloth-hangers-bangalore.webp",
  "/images/main-images/clothhanger-work.jpg": "/images/main-images/koteshwari-cloth-hanger-installation.webp",
  "/images/main-images/clothhangerwork2.jpg": "/images/main-images/koteshwari-pulley-hanger-mechanism.webp",
  "/images/main-images/cloth-Hangers3.jpg": "/images/main-images/koteshwari-stainless-steel-cloth-hangers.webp",
  "/images/materials/clothhangerwork.jpeg": "/images/materials/koteshwari-cloth-hanger-pulley-system.webp",
  
  // Materials & Hero
  "/images/hero/constructionnet.webp": "/images/hero/koteshwari-construction-debris-safety-nets.webp",
  "/images/materials/materias5.jpeg": "/images/materials/koteshwari-hdpe-nylon-net-twine.webp",
  "/images/materials/Materials6.jpeg": "/images/materials/koteshwari-ss316-stainless-steel-wire.webp",
  "/images/materials/Materials7.jpeg": "/images/materials/koteshwari-anchoring-fasteners-hardware.webp",
  "/images/main-images/Koteshwari/koteshwari-safety-nets-logo.webp": "/images/koteshwari-safety-nets-badge.webp",
  "/images/hero/safetynets.webp": "/images/hero/koteshwari-safety-nets-overview.webp",
  "/images/hero/safetynets2.jpg": "/images/hero/koteshwari-residential-safety-netting.webp",
  "/images/hero/sports-safety.webp": "/images/hero/koteshwari-sports-netting-bangalore.webp",
  "/images/hero/cloth-hanger1.jpg": "/images/hero/koteshwari-cloth-drying-hanger-system.webp",
  "/images/hero/cloth-hanger2.webp": "/images/hero/koteshwari-pulley-drying-rods.webp",
  "/images/hero/childrensafetynet.webp": "/images/hero/koteshwari-child-protection-nets.webp",
  "/images/hero/childrensafetygrill.jpg": "/images/hero/koteshwari-child-safety-grill-bangalore.webp",
  "/images/hero/balconygrill.jpg": "/images/hero/koteshwari-balcony-invisible-wire-grill.webp",
  "/images/hero/cricket.jpeg": "/images/hero/koteshwari-cricket-net-enclosure.webp",
  "/images/hero/cricketpracticenet.jpg": "/images/hero/koteshwari-cricket-pitch-netting.webp",
  "/images/hero/customgrill.jpg": "/images/hero/koteshwari-custom-balcony-wire-grill.webp",
  "/images/hero/ductarea.webp": "/images/hero/koteshwari-duct-area-bird-netting.webp",
};

async function processImages() {
  console.log("Starting image conversion & optimization...");
  const projectRoot = path.resolve(__dirname, '..');
  for (const [oldPath, newPath] of Object.entries(imageMap)) {
    const srcFile = path.join(projectRoot, 'public', oldPath);
    const destFile = path.join(projectRoot, 'public', newPath);

    if (fs.existsSync(srcFile)) {
      const destDir = path.dirname(destFile);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      try {
        await sharp(srcFile)
          .resize({ width: 1400, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(destFile);
        console.log(`Converted: ${oldPath} -> ${newPath}`);
      } catch (err) {
        console.error(`Error processing ${srcFile}:`, err.message);
      }
    } else {
      console.warn(`Source not found: ${srcFile}`);
    }
  }

  // Update code references in src/
  console.log("Updating code references in src/...");
  function walkDir(dir) {
    let files = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        files = files.concat(walkDir(file));
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.json')) {
        files.push(file);
      }
    });
    return files;
  }

  const allSourceFiles = walkDir(path.join(projectRoot, 'src'));
  let totalReplacements = 0;

  for (const file of allSourceFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const [oldPath, newPath] of Object.entries(imageMap)) {
      if (content.includes(oldPath)) {
        content = content.replaceAll(oldPath, newPath);
        changed = true;
        totalReplacements++;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated references in: ${file}`);
    }
  }

  console.log(`Finished updating references. Total replacements: ${totalReplacements}`);
}

processImages();
