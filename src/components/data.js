import { SiJavascript, SiPython, SiAxios } from 'react-icons/si';

  export const codeData = [
  {
    language: 'javascript',
    icon: SiJavascript,
    code: `import { motion } from 'framer-motion';

const Box = () => (
  <motion.div
    animate={{ scale: 1.2, rotate: 90 }}
    transition={{ duration: 0.5 }}
    className="w-32 h-32 bg-blue-500"
  />
);`,
    description: {
      title: 'React Component with State',
      content:
        'This example shows a React component using state and Framer Motion for animations. Clicking the div triggers an animation that scales and rotates the element.',
    },
  },
  {
    language: 'python',
    icon: SiPython,
    code: `# Tailwind CSS responsive card
<div class="bg-white shadow-md rounded-lg p-4 md:flex">
  <img src="image.jpg" class="w-full md:w-1/3 rounded-md" />
  <div class="md:ml-6 mt-4 md:mt-0">
    <h2 class="text-xl font-bold">Card Title</h2>
    <p class="text-gray-600">This is a responsive card layout with Tailwind CSS.</p>
  </div>
</div>`,
    description: {
      title: 'Responsive Card with Tailwind',
      content:
        'A responsive card component built with Tailwind CSS. The layout changes from vertical to horizontal on medium screens and includes proper spacing and typography.',
    },
  },
  {
    language: 'axios',
    icon: SiAxios,
    code: `import { motion, AnimatePresence } from 'framer-motion';

const MyComponent = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="p-4 bg-white rounded-lg shadow"
      >
        Animated Content
      </motion.div>
    )}
  </AnimatePresence>
);`,
    description: {
      title: 'Framer Motion Animations',
      content:
        'This component demonstrates entry and exit animations using Framer Motion. The card fades in and slides up when mounting, and fades out while sliding up when unmounting.',
    },
  },
];

const output = [
  {
    "_id": {
      "$oid": "573a1390f29313caabcd5293"
    },
    "plot": "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take ...",
    "genres": [
      "Action"
    ],
    "runtime": 199,
    "cast": [
      "Pearl White",
      "Crane Wilbur",
      "Paul Panzer",
      "Edward Josè"
    ],
    "num_mflix_comments": 0,
    "poster": "https://m.media-amazon.com/images/M/MV5BMzgxODk1Mzk2Ml5BMl5BanBnXkFtZTgwMDg0NzkwMjE@._V1_SY1000_SX677_AL_.jpg",
    "title": "The Perils of Pauline",
    "fullplot": "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take possession of her inheritance. Meanwhile, her \"guardian\" and his confederates constantly come up with schemes to get rid of Pauline so that he can get his hands on the money himself.",
    "languages": [
      "English"
    ],
    "released": {
      "$date": {
        "$numberLong": "-1760227200000"
      }
    },
    "directors": [
      "Louis J. Gasnier",
      "Donald MacKenzie"
    ],
    "writers": [
      "Charles W. Goddard (screenplay)",
      "Basil Dickey (screenplay)",
      "Charles W. Goddard (novel)",
      "George B. Seitz",
      "Bertram Millhauser"
    ],
    "awards": {
      "wins": 1,
      "nominations": 0,
      "text": "1 win."
    },
    "lastupdated": "2015-09-12 00:01:18.647000000",
    "year": 1914,
    "imdb": {
      "rating": 7.6,
      "votes": 744,
      "id": 4465
    },
    "countries": [
      "USA"
    ],
    "type": "movie",
    "tomatoes": {
      "viewer": {
        "rating": 2.8,
        "numReviews": 9
      },
      "production": "Pathè Frères",
      "lastUpdated": {
        "$date": "2015-09-11T17:46:19.000Z"
      }
    }
  }
]