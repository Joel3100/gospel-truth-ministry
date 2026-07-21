import {
  FaCross, FaBible, FaPrayingHands,
  FaBook, FaMusic, FaUsers,
} from 'react-icons/fa'

const serviceTimes = [
  {
    day:    'Sunday',
    dayAm:  'እሁድ',
    time:   '9:00 AM – 12:00 PM',
    program:'Worship Service',
    programAm: 'የጠዋት አምልኮ',
    icon:   FaCross,
  },
  {
    day:    'Sunday',
    dayAm:  'እሁድ',
    time:   '6:00 PM – 8:00 PM',
    program:'Biblical Teaching Session',
    programAm: 'መጽሐፍ ቅዱሳዊ ትምህርት',
    icon:   FaBible,
  },
  {
    day:    'Monday',
    dayAm:  'ሰኞ',
    time:   '6:00 PM – 8:00 PM',
    program:'Biblical Teaching Session',
    programAm: 'መጽሐፍ ቅዱሳዊ ትምህርት',
    icon:   FaBible,
  },
  {
    day:    'Tuesday',
    dayAm:  'ማክሰኞ',
    time:   '6:00 PM – 8:00 PM',
    program:'Prayer & Intercession',
    programAm: 'የጸሎትና የምልጃ ፕሮግራም',
    icon:   FaPrayingHands,
  },
  {
    day:    'Wednesday',
    dayAm:  'ረቡዕ',
    time:   '6:00 PM – 8:00 PM',
    program:'Bible Study',
    programAm: 'የመጽሐፍ ቅዱስ ጥናት',
    icon:   FaBook,
  },
  {
    day:    'Thursday',
    dayAm:  'ሐሙስ',
    time:   '6:00 PM – 8:00 PM',
    program:'Bible Study',
    programAm: 'የመጽሐፍ ቅዱስ ጥናት',
    icon:   FaBook,
  },
  {
    day:    'Friday',
    dayAm:  'አርብ',
    time:   '6:00 PM – 8:00 PM',
    program:'Praise & Worship Night',
    programAm: 'የምስጋናና የአምልኮ ምሽት',
    icon:   FaMusic,
  },
  {
    day:    'Saturday',
    dayAm:  'ቅዳሜ',
    time:   '4:00 PM – 6:00 PM',
    program:'Youth Fellowship',
    programAm: 'የወጣቶች ኅብረት',
    icon:   FaUsers,
  },
  {
    day:    'Saturday',
    dayAm:  'ቅዳሜ',
    time:   '6:00 PM – 8:00 PM',
    program:'Bible Study',
    programAm: 'የመጽሐፍ ቅዱስ ጥናት',
    icon:   FaBook,
  },
]

export default serviceTimes