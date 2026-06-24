const playlists = [
  {
    id: 'PLHpOmIPfnNVPGBUEzViUFdoAeScAtBjCu&si=RQ05L4QFJp9HruJk',
    name: 'የእግዚአብሔር በግ',
    description: "የእግዚአብሔር በግ በብሉይ ኪዳን እና በአዲስ ኪዳን መፅሐፍ የተገለጠበት መንገድ። አግዚአብሔር በልጁ በኢየሱስ ክርስቶስ በኩል ዓለምን እንዴት እንደሚያድን የገለጠበት መንገድ።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVNNI5CXekrz2g8HoOJuaB3Z&si=FUxM6ktK6ebz6K_J',
    name: 'ሊቀ ካህናት ኢየሱስ',
    description: "የአዲሱ ኪዳን ሊቀ ካህናት ኢየሱስና፥ አገልግሎቶቹ፣ እንዲሁም የብሉይ ኪዳን ሊቃነ ካህናት ጥላነት።",
    isDefault: true
  },
  {
    id: 'PLHpOmIPfnNVNJkXuRZRp5TCfmrRpQ-sE1&si=coIAqV1jp0DcXaNM',
    name: 'የዕብራውያን መፅሐፍ ጥናት',
    description: "በአዲስ ኪዳን የመጡ የተሻሻሉ ነገሮች",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVPdZwg0-NWtNOcMqfAN_EMs&si=Tgfoxnn7LvFVsu-y',
    name: 'ሶስቱ ወገኖች',
    description: "በመፅሐፍ ቅዱስ የተገለጡት ሶስት አይነት ወገኖች። እስራኤል፥ አህዛብና፥ የእግዚአብሔር ቤተክርስቲያን።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVNCS84TxI86wZMq3yqh3q8t&si=qTRnlTAmp2dwAqnS',
    name: 'ደኅንነት እና አክሊል ',
    description: "የደኅንነት እና የአክሊል ምንነት፣ ልዩነትና፣ መስተጋብር።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVN_OFsYqby-FiDEYpaZtYFj&si=DfAV5SbMsQ6o3qWT',
    name: 'የመገለጥ መንፈስ ',
    description: `ኤፌሶን 1፡
¯¯¯¯¯¯¯
¹⁵ ስለዚህ እኔ ደግሞ በእናንተ ዘንድ ስለሚሆን በጌታ በኢየሱስ ስለ ማመንና ለቅዱሳን ሁሉ ስለሚሆን መውደድ ሰምቼ፥
¹⁶ ስለ እናንተ እያመሰገንሁ ስጸልይ ስለ እናንተ ማሳሰብን አልተውም፤
¹⁷ የክብር አባት የጌታችን የኢየሱስ ክርስቶስ አምላክ እርሱን በማወቅ የጥበብንና የመገለጥን መንፈስ እንዲሰጣችሁ እለምናለሁ።
¹⁸-¹⁹ ይህም የልባችሁ ዓይኖች ሲበሩ የመጥራቱ ተስፋ ምን እንዲሆን በቅዱሳንም ዘንድ ያለው የርስት ክብር ባለ ጠግነት ምን እንዲሆን ለምናምን ከሁሉ የሚበልጥ የኃይሉ ታላቅነት ምን እንዲሆን ታውቁ ዘንድ ነው፤`,
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVNtPtCc4u6ju-l7RmdjWrhU&si=RgQJzbnIAmwyNKgq',
    name: 'የትንሳኤው ኃይል',
    description: `“እርሱንና የትንሣኤውን ኃይል እንዳውቅ፥ በመከራውም እንድካፈል፥ ወደ ሙታንም ትንሣኤ ልደርስ ቢሆንልኝ፥ በሞቱ እንድመስለው እመኛለሁ።”
                          —— ፊልጵስዩስ 3፥10-11`,
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVNuvr8Npa4MrAT-KyqGQ1n5&si=3NaCLJY4msFomCmg',
    name: 'ሶስቱ መስቀሎች',
    description: "የሶስቱ መስቀሎች ምንነት እና ምስጢር።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVOpwIpbmYS0HMzBuVWvf3HI&si=EPwE4K3pA9xW9csm',
    name: 'የመገናኛው ድንኳን',
    description: "የመገናኛው ድንኳን ምንነት፥ ምሳሌና፥ ጥላ።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVNv4fQ14N312DevsxJPdkY8&si=v_X7aUW5ZPG4YdVK',
    name: 'ሕግ እና ጸጋ',
    description: "የሕግ እና የጸጋ ምንነት፥ ልዩነትና፥ መስተጋብር።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVODY-TCNuxvMJvi-6zgIM7E&si=Zdb-TLNUDT8tOgTI',
    name: 'የእግዚአብሔር በዓላት',
    description: "7ቱ የእግዚአብሔር በዓላት (ዘሌዋውያን ምዕ.23) ምንነት፥ ምሳሌና፥ ጥላነት።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVMoo3WDdZhodpn3ZoDKMUrd&si=co-AttAiLhY4yv_2',
    name: 'የሴቲቱ ዘር',
    description: "የሴቲቱ ዘር ትንቢት፥ እግዚአብሔር ትንቢቱ እንዲፈጸም የመረጠው መንገድና፥ የቀድሞው እባብ ሰይጣን የሚባለው ትንቢቱ እንዳይፈጸም የሚያደርገው ትግል።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVPjqotzvtaxmq-6QRuKsrnr&si=5VZKlgkXsUqvGMS3',
    name: '5ቱ ፍርዶች',
    description: "በመፅሐፍ ቅዱሳችን የተገለጡ አምስት አይነት ፍርዶች፥ ምንነታቸውና፥ ልዩነታቸው።",
    isDefault: true,
  },
  {
    id: 'PLHpOmIPfnNVM3S-nji98ETa02AsVYPYTY&si=2iHSE6wGDvmqFHyA',
    name: 'ተቃራኒ እውነታዎች',
    description: "በመፅሐፍ ቅዱስ የተገለጡ ተቃራኒ/ተጻራሪ እውነቶች (Paradox)።",
    isDefault: true,
  },
]

export default playlists;