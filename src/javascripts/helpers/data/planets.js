const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png',
    description: `<p>Mercury is the smallest planet in our solar system. It’s a little bigger than Earth’s Moon. It is the closest 
    planet to the Sun, but it’s actually not the hottest. Venus is hotter.</p>
    <p>Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters 
    like our Moon. It has a thin atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple.</p>
    <p>Mercury spins slowly compared to Earth, so one day lasts a long time. Mercury takes 59 Earth days to make one full rotation. 
    But a year on Mercury goes fast. Because it’s the closest planet to the sun, it goes around the Sun in just 88 Earth days.</p>`,
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'Not Applicable',
  },
  {
    name: 'Venus',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png',
    description: `<p>Even though Venus isn't the closest planet to the Sun, it is still the hottest. It has a thick atmosphere full of the greenhouse gas 
    carbon dioxide and clouds made of sulfuric acid. The atmosphere traps heat and keeps Venus toasty warm. It's so hot on Venus, metals like lead would be puddles of melted liquid.</p>
    <p>Venus looks like a very active planet. It has mountains and volcanoes. Venus is similar in size to Earth. Earth is just a little bit bigger.</p>
    <p>Venus is unusual because it spins the opposite direction of Earth and most other planets. And its rotation is very slow.</p>`,
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'Not Applicable',
  },
  {
    name: 'Earth',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png',
    description: `<p>Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. 
    Earth is special because it is an ocean planet. Water covers 70 percent of Earth's surface.</p>
    <p>Earth's atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. 
    The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface.</p>`,
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'The Moon',
  },
  {
    name: 'Mars',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png',
    description: `<p>Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground.</p>
    <p>Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.</p>
    <p>There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.</p>`,
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png',
    description: `<p>Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got big enough to start burning.</p>
    <p>Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years.</p>
    <p>Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they're too faint to see very well.</p>`,
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png',
    description: `<p>Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones.</p>
    <p>The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock.</p>
    <p>Like Jupiter, Saturn is mostly a ball of hydrogen and helium.</p>`,
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png',
    description: `<p>Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen 
    and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue.</p>
    <p>Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see.</p>
    <p>Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.</p>`,
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png',
    description: `<p>Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is.</p>
    <p>Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. 
    The methane gives Neptune the same blue color as Uranus.</p>
    <p>Neptune has six rings, but they're very hard to see.</p>`,
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
