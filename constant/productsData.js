const productsData = [
  {
    id: "1",
    qr: "/images/products/1qr.png",
    qrLink: "https://go.echo3d.co/MZ4K",
    price: "₹740.00",
    value: "740",
    accValue: "740",
    discount: "-43%",
    mrp: "₹1,299",
    img: "/images/products/1.jpg",
    name: "WEIRD WOLF LED Study/Table/Desk Lamp with Night Light",
    points: [
      "A night light to twinkle your space and make it serene.",
      "Tap the touch button to change the intensity.",
      "Gooseneck 360 degree adjustable get the perfect angle, adjust the lamp not yourself.",
      "It easily connects with the USB charger, which allows you to connect it to your charger adapter, laptop, power bank and car charger.",
      "After Plugin the charging indicator turns red and turns green after fully charge.",
    ]
  },
  {
    id: "2",
    qr: "/images/products/2qr.png",
    qrLink: "https://go.echo3d.co/tWj6",
    price: "₹499.00",
    img: "/images/products/2.jpg",
    name: "Tu Casa LG-200 - Black Metal Table Lamp with Cotton Fabric Conical Shape",
    value: "499",
    accValue: "499",
    discount: "-50%",
    mrp: "₹1,000.00",
    points: [
      "Shade Material-Cotton",
      "BASE MATERIAL- METAL(IRON)-COLOR- BLACK",
      "HOLDER TYPE--B-22,BRASS , ON OFF SWITCH--NO / BULB RECOMMENDED- INCADECENT/ CFL/ LED UPTO 40 WATT",
      "ELECTRIC CORDED",
    ]
  },
  {
    id: "3",
    qr: "/images/products/3qr.png",
    qrLink: "https://go.echo3d.co/RdfU",
    price: "₹999.00",
    img: "/images/products/3.jpg",
    name: "Homesake Chandelier Mid Century Modern Jhumar",
    value: "999",
    accValue: "999",
    discount: "-33%",
    mrp: "₹1,499.00",
    points: [
      "Antique Design : The design perfectly show a timeless style and contemporary charm to any space. This pendent light with frosted jade white globe glass shade nordic feature and golden finish adds retro style.It's the perfect light fixture to install in beside room,kitchen,dining room,living room,foyers and more.",
      "Supreme quality material : hand-selected handcrafted jade withe planet glass lamp body, smooth hand feeling, delicate texture, fashionable collision of golden Frame with Unique frosted shade, exudes a simple and pure beauty, and adds a warm atmosphere and positive vibe to your space.",
      "E27 lamp holder: The product adopts the international standard E27 light source lamp holder, suitable for LED bulbs, incandescent bulbs, energy-saving bulbs, high temperature resistance, not easy to deform, and easy to replace (incandescent bulb included)",
      "Easy to Clean : The modern Globe Jade White Frosted Glass Lampshade will Keep Away the Dust to enter Inside the Lamp, you just need to Wipe the dust from cotton towel On The Surface Of the Lampshade",
      "Easy to install : It can be installed without complicated procedures, and can be adjusted according to your preferences and design as it comes with an adjustable wire. Contains all installation hardware like canopy, chord, screw, bulb."
    ]
  },
  {
    id: "4",
    qr: "/images/products/4qr.png",
    qrLink: "https://go.echo3d.co/KaV4",
    price: "₹399.00",
    img: "/images/products/4.jpg",
    name: "Homesake® Table Lamps for Home Decoration Items, Side Table Lamp for Bedroom Decoration Items, Night Lamp for Bedroom Table",
    value: "399",
    accValue: "399",
    discount: "-60%",
    mrp: "₹999.00",
    points: [
      "A lovely, inexpensive, and practical table lamp to meet your basic fashion Lighting needs.",
      "Perfect for living room, bedroom, office, kids room, or college dorm.",
      "A classic silhouette in a wood construction and is paired with linen shade,comes with a convenient on/off switch and 1.5 meter long wire, with tested and approved standard for perfect and safe lighting.",
      "DIMENSION: Dimension - 20x 20x 38 cm.",
      "DECORATION: Best suited for Dining Room, Bedroom, Living Room, Bar, Restaurants, Study Room, Aisle, Corridor, Coffee Shop."
    ]
  },
  {
    id: "5",
    qr: "/images/products/5qr.png",
    qrLink: "https://go.echo3d.co/aTtg",
    price: "3,990.00",
    img: "/images/products/5.jpg",
    name: "RedOAK Barson Patchwork Beechwood Chair with Sturdy Wooden Legs",
    value: "3990",
    accValue: "3990",
    discount: "-15%",
    mrp: "₹4,720.00",
    points: [
      "Colour	Multicolour",
      "Product Dimensions:	50D x 45W x 82H Centimeters",
      "Special Feature: Ergonomic",
      "Recommended Uses For Product	Office, Dining",
      "Room Type: Living Room",
      "Frame Material:	Wood"
    ]
  },
  {
    id: "6",
    qr: "/images/products/6qr.png",
    qrLink: "https://go.echo3d.co/MZ4K",
    price: "₹740.00",
    value: "740",
    accValue: "740",
    discount: "-43%",
    mrp: "₹1,299",
    img: "/images/products/6.jpg",
    name: "WEIRD WOLF LED Study/Table/Desk Lamp with Night Light",
    points: [
      "A night light to twinkle your space and make it serene.",
      "Tap the touch button to change the intensity.",
      "Gooseneck 360 degree adjustable get the perfect angle, adjust the lamp not yourself.",
      "It easily connects with the USB charger, which allows you to connect it to your charger adapter, laptop, power bank and car charger.",
      "After Plugin the charging indicator turns red and turns green after fully charge.",
    ]
  },
  {
    id: "7",
    qr: "/images/products/7qr.png",
    qrLink: "https://go.echo3d.co/tWj6",
    price: "₹499.00",
    img: "/images/products/7.jpg",
    name: "Tu Casa LG-200 - Black Metal Table Lamp with Cotton Fabric Conical Shape",
    value: "499",
    accValue: "499",
    discount: "-50%",
    mrp: "₹1,000.00",
    points: [
      "Shade Material-Cotton",
      "BASE MATERIAL- METAL(IRON)-COLOR- BLACK",
      "HOLDER TYPE--B-22,BRASS , ON OFF SWITCH--NO / BULB RECOMMENDED- INCADECENT/ CFL/ LED UPTO 40 WATT",
      "ELECTRIC CORDED",
    ]
  },
  {
    id: "8",
    qr: "/images/products/8qr.png",
    qrLink: "https://go.echo3d.co/RdfU",
    price: "₹999.00",
    img: "/images/products/8.jpg",
    name: "Homesake Chandelier Mid Century Modern Jhumar",
    value: "999",
    accValue: "999",
    discount: "-33%",
    mrp: "₹1,499.00",
    points: [
      "Antique Design : The design perfectly show a timeless style and contemporary charm to any space. This pendent light with frosted jade white globe glass shade nordic feature and golden finish adds retro style.It's the perfect light fixture to install in beside room,kitchen,dining room,living room,foyers and more.",
      "Supreme quality material : hand-selected handcrafted jade withe planet glass lamp body, smooth hand feeling, delicate texture, fashionable collision of golden Frame with Unique frosted shade, exudes a simple and pure beauty, and adds a warm atmosphere and positive vibe to your space.",
      "E27 lamp holder: The product adopts the international standard E27 light source lamp holder, suitable for LED bulbs, incandescent bulbs, energy-saving bulbs, high temperature resistance, not easy to deform, and easy to replace (incandescent bulb included)",
      "Easy to Clean : The modern Globe Jade White Frosted Glass Lampshade will Keep Away the Dust to enter Inside the Lamp, you just need to Wipe the dust from cotton towel On The Surface Of the Lampshade",
      "Easy to install : It can be installed without complicated procedures, and can be adjusted according to your preferences and design as it comes with an adjustable wire. Contains all installation hardware like canopy, chord, screw, bulb."
    ]
  },
  {
    id: "9",
    qr: "/images/products/9qr.png",
    qrLink: "https://go.echo3d.co/KaV4",
    price: "₹399.00",
    img: "/images/products/9.jpg",
    name: "Homesake® Table Lamps for Home Decoration Items, Side Table Lamp for Bedroom Decoration Items, Night Lamp for Bedroom Table",
    value: "399",
    accValue: "399",
    discount: "-60%",
    mrp: "₹999.00",
    points: [
      "A lovely, inexpensive, and practical table lamp to meet your basic fashion Lighting needs.",
      "Perfect for living room, bedroom, office, kids room, or college dorm.",
      "A classic silhouette in a wood construction and is paired with linen shade,comes with a convenient on/off switch and 1.5 meter long wire, with tested and approved standard for perfect and safe lighting.",
      "DIMENSION: Dimension - 20x 20x 38 cm.",
      "DECORATION: Best suited for Dining Room, Bedroom, Living Room, Bar, Restaurants, Study Room, Aisle, Corridor, Coffee Shop."
    ]
  },
  {
    id: "10",
    qr: "/images/products/10qr.png",
    qrLink: "https://go.echo3d.co/aTtg",
    price: "3,990.00",
    img: "/images/products/10.jpg",
    name: "RedOAK Barson Patchwork Beechwood Chair with Sturdy Wooden Legs",
    value: "3990",
    accValue: "3990",
    discount: "-15%",
    mrp: "₹4,720.00",
    points: [
      "Colour	Multicolour",
      "Product Dimensions:	50D x 45W x 82H Centimeters",
      "Special Feature: Ergonomic",
      "Recommended Uses For Product	Office, Dining",
      "Room Type: Living Room",
      "Frame Material:	Wood"
    ]
  },
  {
    id: "11",
    qr: "/images/products/11qr.png",
    qrLink: "https://go.echo3d.co/MZ4K",
    price: "₹740.00",
    value: "740",
    accValue: "740",
    discount: "-43%",
    mrp: "₹1,299",
    img: "/images/products/11.jpg",
    name: "WEIRD WOLF LED Study/Table/Desk Lamp with Night Light",
    points: [
      "A night light to twinkle your space and make it serene.",
      "Tap the touch button to change the intensity.",
      "Gooseneck 360 degree adjustable get the perfect angle, adjust the lamp not yourself.",
      "It easily connects with the USB charger, which allows you to connect it to your charger adapter, laptop, power bank and car charger.",
      "After Plugin the charging indicator turns red and turns green after fully charge.",
    ]
  },
  {
    id: "12",
    qr: "/images/products/12qr.png",
    qrLink: "https://go.echo3d.co/tWj6",
    price: "₹499.00",
    img: "/images/products/12.jpg",
    name: "Tu Casa LG-200 - Black Metal Table Lamp with Cotton Fabric Conical Shape",
    value: "499",
    accValue: "499",
    discount: "-50%",
    mrp: "₹1,000.00",
    points: [
      "Shade Material-Cotton",
      "BASE MATERIAL- METAL(IRON)-COLOR- BLACK",
      "HOLDER TYPE--B-22,BRASS , ON OFF SWITCH--NO / BULB RECOMMENDED- INCADECENT/ CFL/ LED UPTO 40 WATT",
      "ELECTRIC CORDED",
    ]
  },
  {
    id: "13",
    qr: "/images/products/13qr.png",
    qrLink: "https://go.echo3d.co/RdfU",
    price: "₹999.00",
    img: "/images/products/13.jpg",
    name: "Homesake Chandelier Mid Century Modern Jhumar",
    value: "999",
    accValue: "999",
    discount: "-33%",
    mrp: "₹1,499.00",
    points: [
      "Antique Design : The design perfectly show a timeless style and contemporary charm to any space. This pendent light with frosted jade white globe glass shade nordic feature and golden finish adds retro style.It's the perfect light fixture to install in beside room,kitchen,dining room,living room,foyers and more.",
      "Supreme quality material : hand-selected handcrafted jade withe planet glass lamp body, smooth hand feeling, delicate texture, fashionable collision of golden Frame with Unique frosted shade, exudes a simple and pure beauty, and adds a warm atmosphere and positive vibe to your space.",
      "E27 lamp holder: The product adopts the international standard E27 light source lamp holder, suitable for LED bulbs, incandescent bulbs, energy-saving bulbs, high temperature resistance, not easy to deform, and easy to replace (incandescent bulb included)",
      "Easy to Clean : The modern Globe Jade White Frosted Glass Lampshade will Keep Away the Dust to enter Inside the Lamp, you just need to Wipe the dust from cotton towel On The Surface Of the Lampshade",
      "Easy to install : It can be installed without complicated procedures, and can be adjusted according to your preferences and design as it comes with an adjustable wire. Contains all installation hardware like canopy, chord, screw, bulb."
    ]
  },
  {
    id: "14",
    qr: "/images/products/14qr.png",
    qrLink: "https://go.echo3d.co/MZ4K",
    price: "₹740.00",
    value: "740",
    accValue: "740",
    discount: "-43%",
    mrp: "₹1,299",
    img: "/images/products/14.jpg",
    name: "WEIRD WOLF LED Study/Table/Desk Lamp with Night Light",
    points: [
      "A night light to twinkle your space and make it serene.",
      "Tap the touch button to change the intensity.",
      "Gooseneck 360 degree adjustable get the perfect angle, adjust the lamp not yourself.",
      "It easily connects with the USB charger, which allows you to connect it to your charger adapter, laptop, power bank and car charger.",
      "After Plugin the charging indicator turns red and turns green after fully charge.",
    ]
  },
  {
    id: "15",
    qr: "/images/products/15qr.png",
    qrLink: "https://go.echo3d.co/tWj6",
    price: "₹499.00",
    img: "/images/products/15.jpg",
    name: "Tu Casa LG-200 - Black Metal Table Lamp with Cotton Fabric Conical Shape",
    value: "499",
    accValue: "499",
    discount: "-50%",
    mrp: "₹1,000.00",
    points: [
      "Shade Material-Cotton",
      "BASE MATERIAL- METAL(IRON)-COLOR- BLACK",
      "HOLDER TYPE--B-22,BRASS , ON OFF SWITCH--NO / BULB RECOMMENDED- INCADECENT/ CFL/ LED UPTO 40 WATT",
      "ELECTRIC CORDED",
    ]
  },
  {
    id: "16",
    qr: "/images/products/16qr.png",
    qrLink: "https://go.echo3d.co/RdfU",
    price: "₹999.00",
    img: "/images/products/16.jpg",
    name: "Homesake Chandelier Mid Century Modern Jhumar",
    value: "999",
    accValue: "999",
    discount: "-33%",
    mrp: "₹1,499.00",
    points: [
      "Antique Design : The design perfectly show a timeless style and contemporary charm to any space. This pendent light with frosted jade white globe glass shade nordic feature and golden finish adds retro style.It's the perfect light fixture to install in beside room,kitchen,dining room,living room,foyers and more.",
      "Supreme quality material : hand-selected handcrafted jade withe planet glass lamp body, smooth hand feeling, delicate texture, fashionable collision of golden Frame with Unique frosted shade, exudes a simple and pure beauty, and adds a warm atmosphere and positive vibe to your space.",
      "E27 lamp holder: The product adopts the international standard E27 light source lamp holder, suitable for LED bulbs, incandescent bulbs, energy-saving bulbs, high temperature resistance, not easy to deform, and easy to replace (incandescent bulb included)",
      "Easy to Clean : The modern Globe Jade White Frosted Glass Lampshade will Keep Away the Dust to enter Inside the Lamp, you just need to Wipe the dust from cotton towel On The Surface Of the Lampshade",
      "Easy to install : It can be installed without complicated procedures, and can be adjusted according to your preferences and design as it comes with an adjustable wire. Contains all installation hardware like canopy, chord, screw, bulb."
    ]
  },
  {
    id: "17",
    qr: "/images/products/17qr.png",
    qrLink: "https://go.echo3d.co/KaV4",
    price: "₹399.00",
    img: "/images/products/17.jpg",
    name: "Homesake® Table Lamps for Home Decoration Items, Side Table Lamp for Bedroom Decoration Items, Night Lamp for Bedroom Table",
    value: "399",
    accValue: "399",
    discount: "-60%",
    mrp: "₹999.00",
    points: [
      "A lovely, inexpensive, and practical table lamp to meet your basic fashion Lighting needs.",
      "Perfect for living room, bedroom, office, kids room, or college dorm.",
      "A classic silhouette in a wood construction and is paired with linen shade,comes with a convenient on/off switch and 1.5 meter long wire, with tested and approved standard for perfect and safe lighting.",
      "DIMENSION: Dimension - 20x 20x 38 cm.",
      "DECORATION: Best suited for Dining Room, Bedroom, Living Room, Bar, Restaurants, Study Room, Aisle, Corridor, Coffee Shop."
    ]
  },
  {
    id: "18",
    qr: "/images/products/18qr.png",
    qrLink: "https://go.echo3d.co/aTtg",
    price: "3,990.00",
    img: "/images/products/18.jpg",
    name: "RedOAK Barson Patchwork Beechwood Chair with Sturdy Wooden Legs",
    value: "3990",
    accValue: "3990",
    discount: "-15%",
    mrp: "₹4,720.00",
    points: [
      "Colour	Multicolour",
      "Product Dimensions:	50D x 45W x 82H Centimeters",
      "Special Feature: Ergonomic",
      "Recommended Uses For Product	Office, Dining",
      "Room Type: Living Room",
      "Frame Material:	Wood"
    ]
  },
  {
    id: "19",
    qr: "/images/products/19qr.png",
    qrLink: "https://go.echo3d.co/MZ4K",
    price: "₹740.00",
    value: "740",
    accValue: "740",
    discount: "-43%",
    mrp: "₹1,299",
    img: "/images/products/19.jpg",
    name: "WEIRD WOLF LED Study/Table/Desk Lamp with Night Light",
    points: [
      "A night light to twinkle your space and make it serene.",
      "Tap the touch button to change the intensity.",
      "Gooseneck 360 degree adjustable get the perfect angle, adjust the lamp not yourself.",
      "It easily connects with the USB charger, which allows you to connect it to your charger adapter, laptop, power bank and car charger.",
      "After Plugin the charging indicator turns red and turns green after fully charge.",
    ]
  },
  {
    id: "20",
    qr: "/images/products/20qr.png",
    qrLink: "https://go.echo3d.co/tWj6",
    price: "₹499.00",
    img: "/images/products/20.jpg",
    name: "Tu Casa LG-200 - Black Metal Table Lamp with Cotton Fabric Conical Shape",
    value: "499",
    accValue: "499",
    discount: "-50%",
    mrp: "₹1,000.00",
    points: [
      "Shade Material-Cotton",
      "BASE MATERIAL- METAL(IRON)-COLOR- BLACK",
      "HOLDER TYPE--B-22,BRASS , ON OFF SWITCH--NO / BULB RECOMMENDED- INCADECENT/ CFL/ LED UPTO 40 WATT",
      "ELECTRIC CORDED",
    ]
  },
  {
    id: "21",
    qr: "/images/products/21qr.png",
    qrLink: "https://go.echo3d.co/RdfU",
    price: "₹999.00",
    img: "/images/products/21.jpg",
    name: "Homesake Chandelier Mid Century Modern Jhumar",
    value: "999",
    accValue: "999",
    discount: "-33%",
    mrp: "₹1,499.00",
    points: [
      "Antique Design : The design perfectly show a timeless style and contemporary charm to any space. This pendent light with frosted jade white globe glass shade nordic feature and golden finish adds retro style.It's the perfect light fixture to install in beside room,kitchen,dining room,living room,foyers and more.",
      "Supreme quality material : hand-selected handcrafted jade withe planet glass lamp body, smooth hand feeling, delicate texture, fashionable collision of golden Frame with Unique frosted shade, exudes a simple and pure beauty, and adds a warm atmosphere and positive vibe to your space.",
      "E27 lamp holder: The product adopts the international standard E27 light source lamp holder, suitable for LED bulbs, incandescent bulbs, energy-saving bulbs, high temperature resistance, not easy to deform, and easy to replace (incandescent bulb included)",
      "Easy to Clean : The modern Globe Jade White Frosted Glass Lampshade will Keep Away the Dust to enter Inside the Lamp, you just need to Wipe the dust from cotton towel On The Surface Of the Lampshade",
      "Easy to install : It can be installed without complicated procedures, and can be adjusted according to your preferences and design as it comes with an adjustable wire. Contains all installation hardware like canopy, chord, screw, bulb."
    ]
  },
  {
    id: "22",
    qr: "/images/products/22qr.png",
    qrLink: "https://go.echo3d.co/KaV4",
    price: "₹399.00",
    img: "/images/products/22.jpg",
    name: "Homesake® Table Lamps for Home Decoration Items, Side Table Lamp for Bedroom Decoration Items, Night Lamp for Bedroom Table",
    value: "399",
    accValue: "399",
    discount: "-60%",
    mrp: "₹999.00",
    points: [
      "A lovely, inexpensive, and practical table lamp to meet your basic fashion Lighting needs.",
      "Perfect for living room, bedroom, office, kids room, or college dorm.",
      "A classic silhouette in a wood construction and is paired with linen shade,comes with a convenient on/off switch and 1.5 meter long wire, with tested and approved standard for perfect and safe lighting.",
      "DIMENSION: Dimension - 20x 20x 38 cm.",
      "DECORATION: Best suited for Dining Room, Bedroom, Living Room, Bar, Restaurants, Study Room, Aisle, Corridor, Coffee Shop."
    ]
  }
]

module.exports = productsData;