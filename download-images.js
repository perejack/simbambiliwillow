const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://simbacementkenya.com/wp-content/uploads/2023/08/SIMBA_CEMENT_BAG_PPC_EDITED_R-removebg-preview.png',
    filename: 'simba-cement-32-5r.png'
  },
  {
    url: 'https://simbacementkenya.com/wp-content/uploads/2023/08/42.5.png',
    filename: 'simba-power-42-5n.png'
  },
  {
    url: 'https://simbacementkenya.com/wp-content/uploads/2023/08/kenyabuilders_140198317_430163928038842_5264934779918920869_n-768x768.jpg',
    filename: 'about-facility.jpg'
  }
];

const assetsDir = path.join(__dirname, 'src', 'assets');

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(assetsDir, filename);

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${filename} already exists, skipping...`);
      resolve();
      return;
    }

    console.log(`⬇️  Downloading ${filename}...`);

    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded ${filename}`);
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete partial file
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting image downloads...');
  console.log(`📁 Assets directory: ${assetsDir}`);

  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('🎉 All images downloaded successfully!');
  } catch (error) {
    console.error('❌ Error downloading images:', error.message);
    process.exit(1);
  }
}

downloadAllImages();
