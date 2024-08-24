// categories: Textures, Overlays, Shops, PSDs, Effects, Elements, Brushes

const data = {
    products: [
      { id: 1, 
        title: "Grunge texture pack", 
        credit: "Uncredited",
        price: "Free",
        category: "Textures",
        description: "Four Grunge/Noise Textures",
        image: "images/txtrs.png",
        link: "https://drive.google.com/drive/folders/1edgUjt_n5PpE6GTAoU3aW8PRFZmbfmrU"
    },
    { id: 2, 
        title: "8k Scanned Textures", 
        credit: "SyntheVisuals",
        price: "Free",
        category: "Textures",
        description: "Free textures",
        image: "images/8kscanned.png",
        link: "https://synthevisuals.gumroad.com/l/nnaos"
    },
    { id: 3, 
        title: "Akshay Ram Shop", 
        credit: "byAkshayRam",
        price: "Paid/Free",
        category: "Shop",
        description: "Patterns, Shadows, Elements",
        image: "images/akshay.png",
        link: "https://byakshayram.gumroad.com/"
    },
    { id: 4, 
        title: "Ethan J Designs Shop", 
        credit: "Ethan J Designs",
        price: "Paid",
        category: "Shop",
        description: "Textures, LUTs, Lighting, Effects",
        image: "images/ethanj.png",
        link:"https://ethanjdesignshop.com/collections/all"
    },
    { id: 5, 
        title: "Slava Shop", 
        credit: "Slava",
        price: "Paid",
        category: "Shop",
        description: "PSDs and Patreon content",
        image: "images/slavashop.png",
        link:"https://www.patreon.com/slavagfx/shop"
    },
    { id: 6, 
        title: "10 Grunge Textures", 
        credit: "Bradley Holman",
        price: "Free",
        category: "Textures",
        description: "10 Free High Quality Grunge Textures",
        image: "images/bradleygrunge.png",
        link:"https://bradsdesignss.gumroad.com/l/FREEGRUNGE?layout=profile&recommended_by=search"
    },
    { id: 7, 
        title: "75 Grunge Textures", 
        credit: "Bradley Holman",
        price: "Paid",
        category: "Textures",
        description: "75 Grunge Textures in JPG format - $15-$25",
        image: "images/bradleymegagrunge.png",
        link:"https://bradsdesignss.gumroad.com/l/grunge?layout=profile"
    },
    { id: 8, 
        title: "Overlays and Backgrounds", 
        credit: "Designed by Hassan",
        price: "Free",
        category: "Textures",
        description: "Pinterest collection of hundreds of overlays and elements",
        image: "images/hassanresources.png",
        link:"https://pin.it/62bM1kxcC"
    },
    { id: 9, 
        title: "Matt Chapman PSD", 
        credit: "Wynters_Designs",
        price: "Free",
        category: "PSDs",
        description: "Two Free PSDs by Wynters_Designs",
        image: "images/chapmanpsd.png",
        link:"https://drive.google.com/drive/u/2/folders/1-s01yaAcFWZ2Ezqdh-MNtEG2eglmwPR6"
    },
    { id: 10, 
        title: "Kenneth Walker PSD", 
        credit: "Darwent Designs",
        price: "Free",
        category: "PSDs",
        description: "Free PSD from Darwent Design's YouTube",
        image: "images/darwentpsd.png",
        link:"https://drive.google.com/file/d/1mIPYsROQ_ji8QDkC2VbGPGI1YQoNSNKx/view"
    },
    { id: 11, 
        title: "Concept Art Brush Pack", 
        credit: "CalSoScoped",
        price: "Free",
        category: "Elements",
        description: "Clouds, particles, rock, sparks, rays, and more",
        image: "images/calsoscopedbrush.png",
        link:"https://mega.nz/file/tXpQgbqZ#2FLuyi7aJOOwO7_8HJcCwMCL28RHCEx5IKQgRwslK0g"
    },
    { id: 12, 
        title: "Kenan Yildiz PSD", 
        credit: "MazDesign",
        price: "Free",
        category: "PSDs",
        description: "Fully editable template - Free",
        image: "images/kenanpsd.png",
        link:"https://mazdesign.gumroad.com/l/ky?layout=profile"
    },
    { id: 13, 
        title: "Mario Lemina PSD", 
        credit: "MazDesign",
        price: "Paid",
        category: "PSDs",
        description: "Fully editable template - $5+",
        image: "images/mariopsd.png",
        link:"https://mazdesign.gumroad.com/l/ml?layout=profile"
    },
    { id: 14, 
        title: "MazDesign Shop", 
        credit: "MazDesign",
        price: "Paid/Free",
        category: "Shop",
        description: "Free and paid PSDs, all less than $5",
        image: "images/mazdesign.png",
        link:"https://mazdesign.gumroad.com/?section=4GaDmsPx3TBjh5-4GQSxYQ%3D%3D"
    },
    { id: 15, 
        title: "Lionel Messi PSD", 
        credit: "MazDesign",
        price: "Paid",
        category: "PSDs",
        description: "Fully editable template - $5+",
        image: "images/messi.png",
        link:"https://mazdesign.gumroad.com/?section=4GaDmsPx3TBjh5-4GQSxYQ%3D%3D"
    },
    { id: 16, 
        title: "Superchrome Design Asset Pack", 
        credit: "AndreyAzizov",
        price: "Paid",
        category: "Elements",
        description: "Photoshop templates, metallic textures, gradient presets",
        image: "images/superchrome.png",
        link:"https://supergraphic.co/collections/assets/products/superchrome"
    },

    { id: 17, 
        title: "Chrome and Glow Text Styles", 
        credit: "AndreyAzizov",
        price: "Free",
        category: "Elements",
        description: "Copy-and-paste styles in Photoshop, find under 'Layer Styles'",
        image: "images/textstylesandre.png",
        link:"https://www.andreyazizov.com/assets"
    },
    { id: 18, 
        title: "Six Texture Assets", 
        credit: "AndreyAzizov",
        price: "Free",
        category: "Textures",
        description: "Paper and photocopy textures, find under 'Texture Assets'",
        image: "images/textureassetsandre.png",
        link:"https://www.andreyazizov.com/assets"
    },
    { id: 19, 
        title: "Freeject.net Free Textures and Overlays", 
        credit: "Freeject.net",
        price: "Free",
        category: "Textures",
        description: "Gradients, paper, fabric, smoke, grain, and more.",
        image: "images/freeject.png",
        link:"https://www.freeject.net/#google_vignette"
    },
    { id: 20, 
        title: "Hyperpix Paid Text Effects", 
        credit: "Hyperpix.net",
        price: "Paid",
        category: "Elements",
        description: "Chrome, neon, metallic effects for detailed and professional text design",
        image: "images/hyperpix.png",
        link:"https://hyperpix.net/shop/"
    },
    { id: 21, 
        title: "Sports PSDs Bundle - Four Graphics", 
        credit: "Keshxn",
        price: "Paid",
        category: "PSDs",
        description: "Lionel Messi, Ron Holland Commitment, and two NBA debut graphics",
        image: "images/keshxnpsds.png",
        link:"https://keshxndesign.gumroad.com/l/sxwfw?layout=profile&recommended_by=search"
    },
    { id: 22, 
        title: "50 Light Particle Overlays", 
        credit: "Uncredited",
        price: "Free",
        category: "Textures",
        description: "Dust particles, light rays, and embers. Google Drive Folder.",
        image: "images/particles.png",
        link:"https://drive.google.com/drive/folders/18w8YaSgDC9jpmoAcyvrnbTG7bBv08YCY?usp=drive_link"
    },
    { id: 23, 
        title: "11 Color Corrections Pack", 
        credit: "SefSDesign",
        price: "Free",
        category: "Elements",
        description: "PSD file with 11 color corrections to copy/paste into your graphics",
        image: "images/sefcolorcorrection.png",
        link:"https://payhip.com/b/5EHl"
    },
    { id: 24, 
        title: "SefSDesign Shop", 
        credit: "SefSDesign",
        price: "Paid/Free",
        category: "Shop",
        description: "PSDs, Camera Raw Presets, Layerstyle pack",
        image: "images/sefshop.png",
        link:"https://payhip.com/SefS"
    },
    { id: 25, 
        title: "12 Light Leaks", 
        credit: "Uncredited",
        price: "Free",
        category: "Textures",
        description: "Light leaks from multiple angles, Google Drive Folder",
        image: "images/lightleaks.png",
        link:"https://drive.google.com/drive/folders/1KP4idO5-1SXTmDSnaQJxJDMEfFMQpdTi?usp=sharing"
    },
    { id: 26, 
        title: "3 NBA PSDs", 
        credit: "SefSDesign",
        price: "Paid",
        category: "PSDs",
        description: "Downloadable graphics from SefSDesign",
        image: "images/sefspsds.png",
        link:"https://payhip.com/b/lpN9"
    },
    { id: 27, 
        title: "Keshxn Shop", 
        credit: "Keshxn",
        price: "Paid/Free",
        category: "Shop",
        description: "Textures and PSDs",
        image: "images/keshxnshop.png",
        link:"https://keshxndesign.gumroad.com/"
    },
    { id: 28, 
        title: "Big 3 in Phoenix PSD", 
        credit: "Keshxn",
        price: "Free",
        category: "PSDs",
        description: "Free downloadable poster design",
        image: "images/keshxnbig3.png",
        link:"https://keshxndesign.gumroad.com/l/ckjru?layout=profile"
    },
    { id: 29, 
        title: "Akshay's Photoshop 'Shadow Starter Pack'", 
        credit: "byAkshayRam",
        price: "Free",
        category: "Elements",
        description: "1 CC library with 9 drop shadow presets",
        image: "images/akshayshadow.png",
        link:"https://byakshayram.gumroad.com/l/shadowpackvol1?layout=profile"
    },
    { id: 30, 
        title: "Photoshop Path Shadow Action", 
        credit: "byAkshayRam",
        price: "Free",
        category: "Elements",
        description: "2 Photoshop Actions  + 1 Video Demo",
        image: "images/akshaypathshadow.png",
        link:"https://byakshayram.gumroad.com/l/PathShadowAction?layout=profile"
    },
    { id: 31, 
        title: "NBA 2k22 Cover PSDs", 
        credit: "Axndo",
        price: "Paid",
        category: "PSDs",
        description: "Donovan Mitchell, Luka Magic & Be Legendary",
        image: "images/nba2k22.png",
        link:"https://payhip.com/b/2Skgc"
    },
      
    ],

  };
  
  export default data;