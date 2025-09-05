const IMAGES = {
  headphone: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073808/trinity_design_labs/icons/headphone_auyqzj.svg",
  mail: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073810/trinity_design_labs/icons/mail_fsgl0t.svg",
  x: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073812/trinity_design_labs/icons/x_lxyqsv.svg",
  discord: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073806/trinity_design_labs/icons/discord_hvhct2.svg",
  linkedin: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073809/trinity_design_labs/icons/linkedin_z8hvcg.svg",
  facebook: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073807/trinity_design_labs/icons/facebook_xnormu.svg",
  twitch: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073811/trinity_design_labs/icons/twitch_jyqe0y.svg",
  trinityBig: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073710/trinity_design_labs/logos/trinity_big_z0kkhb.svg",
  logo_white: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073708/trinity_design_labs/logos/logo_white_rfrtvz.svg",
  logo_coloured: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073707/trinity_design_labs/logos/logo_coloured_o7z9dy.svg",
  logo_full_coloured: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073707/trinity_design_labs/logos/logo_full_coloured_siwu4m.svg",
  trinity: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073709/trinity_design_labs/logos/trinity_xrl1eq.svg",
  arrowBlackIcon: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073803/trinity_design_labs/icons/Arrow_black_de2qvy.svg",
  arrowWhiteIcon: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073804/trinity_design_labs/icons/Arrow_white_whsrso.svg",
  figma: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073841/trinity_design_labs/icons/tech/figma_qvp2we.svg",
  photoshop: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073845/trinity_design_labs/icons/tech/photoshop_rr0hmw.svg",
  angular: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073845/trinity_design_labs/icons/tech/photoshop_rr0hmw.svg",
  react: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073848/trinity_design_labs/icons/tech/react_iwykyr.svg",
  nextjs: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073842/trinity_design_labs/icons/tech/nextjs_hvuqjo.svg",
  tailwind: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073849/trinity_design_labs/icons/tech/tailwind_mute7g.svg",
  cplus: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073840/trinity_design_labs/icons/tech/cplus_qpw6eo.svg",
  nodejs: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073843/trinity_design_labs/icons/tech/nodejs_yg7q6z.svg",
  android: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073838/trinity_design_labs/icons/tech/android_hi5zyx.svg",
  python: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073847/trinity_design_labs/icons/tech/python_kztcir.svg",
  php: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073846/trinity_design_labs/icons/tech/php_uorvyb.svg",
  card1: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073898/trinity_design_labs/card_images/card_one_xkf8ic.jpg",
  card2: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073900/trinity_design_labs/card_images/card_two_vyw4km.jpg",
  card3: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073901/trinity_design_labs/card_images/card_three_egk9kd.jpg",
  card4: "https://res.cloudinary.com/dojwooqzh/image/upload/v1757073896/trinity_design_labs/card_images/card_four_pbwawy.jpg",
};

const getImage = (key: keyof typeof IMAGES) =>
  `${IMAGES[key]}`;

export default getImage;
