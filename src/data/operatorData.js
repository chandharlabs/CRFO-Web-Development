const operatorData = [
  [// Andhra Pradesh
    {
      band: '1800 MHz',
      oper: 'Tata',
      ulink: '1741.7 - 1744.1',
      dlink: '1836.7 - 1839.1',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2325 - 2335',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2335 - 2345',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2635 - 2645',
      dlink: '-',
    }
  ],
  [// Arunachal Pradesh
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Assam
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1743.7 - 1747.5',
      dlink: '1838.7 - 1842.5',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1738.7 - 1743.7',
      dlink: '1833.7 - 1838.7',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1730.7 - 1738.7',
      dlink: '1825.7 - 1833.7',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Bihar
    {
      band: '1800 MHz',
      oper: 'Aircel',
      ulink: '1736.5 - 1738.3',
      dlink: '1831.5 - 1833.3',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1726.5 - 1731.5',
      dlink: '1821.5 - 1826.5',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1731.5 - 1736.5',
      dlink: '1826.5 - 1831.5',
    },
    {
      band: '2100 MHz',
      oper: 'Airtel',
      ulink: '1944 - 1949',
      dlink: '2134 - 2139',
    },
    {
      band: '2100 MHz',
      oper: 'Idea',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2367.5 - 2377.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
  [// Chattisgarh
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1737.1 - 1741.7',
      dlink: '1832.1 - 1836.7',
    },
    {
      band: '2300 MHz',
      oper: 'Idea',
      ulink: '2352.5 - 2362.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2362.5 - 2372.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2555',
      dlink: '-',
    }
  ],
  [// Delhi
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1731.3 - 1733.3',
      dlink: '1826.3 - 1828.3',
    },
    {
      band: '2100 MHz',
      oper: 'Airtel',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2350 - 2360',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2360 - 2370',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2635 - 2655',
      dlink: '-',
    }
  ],
  [// Goa
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1751.5 - 1756.5',
      dlink: '1846.5 - 1851.5',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1761.5 - 1763.5',
      dlink: '1856.5 - 1858.5',
    },
    {
      band: '1800 MHz',
      oper: 'Tatas',
      ulink: '1756.5 - 1761.5',
      dlink: '1851.5 - 1856.5',
    },
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Idea',
      ulink: '2365 - 2375',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2355 - 2365',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2635 - 2655',
      dlink: '-',
    }
  ],
  [// Gujarat
    {
      band: '800 MHz',
      oper: 'Reliance',
      ulink: '829.935 - 843.135',
      dlink: '874.935 - 888.135',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1735.7 - 1744.1',
      dlink: '1830.7 - 1839.1',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1744.1 - 1747.1',
      dlink: '1839.1 - 1842.1',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2350 -2360',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2360 - 2370',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2635 - 2655',
      dlink: '-',
    }
  ],
  [// Haryana
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1735.3 - 1736.9',
      dlink: '1830.3 - 1831.9',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1736.9 - 1741.7',
      dlink: '1831.9 - 1836.7',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1734.3 - 1735.3',
      dlink: '1829.3 - 1830.3',
    },
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2545 - 2555',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
  [// Himachal Pradesh
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1732.1 - 1732.7',
      dlink: '1827.1 - 1827.7',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1732.7 - 1737.7',
      dlink: '1827.7 - 1832.7',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2377.5 - 2387.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2367.5 - 2377.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
  [// Jammu and Kashmir
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1747.9 - 1750.3',
      dlink: '1842.9 - 1845.3',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1750.3 - 1755.3',
      dlink: '1845.3 - 1850.3',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance Communications',
      ulink: '1742.9 - 1747.9',
      dlink: '1837.9 - 1842.9',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1732.9 - 1742.9',
      dlink: '1827.9 - 1837.9',
    },
    {
      band: '2100 MHz',
      oper: 'Airtel',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
  [// Jharkhand
    {
      band: '1800 MHz',
      oper: 'Aircel',
      ulink: '1736.5 - 1738.3',
      dlink: '1831.5 - 1833.3',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1726.5 - 1731.5',
      dlink: '1821.5 - 1826.5',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1731.5 - 1736.5',
      dlink: '1826.5 - 1831.5',
    },
    {
      band: '2100 MHz',
      oper: 'Airtel',
      ulink: '1944 - 1949',
      dlink: '2134 - 2139',
    },
    {
      band: '2100 MHz',
      oper: 'Idea',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2367.5 - 2377.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
  [// Karnataka
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2350 - 2360',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2360 - 2370',
      dlink: '-',
    }
  ],
  [// Kerala
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1739.7 - 1740.3',
      dlink: '1834.7 - 1835.3',
    },
    {
      band: '2100 MHz',
      oper: 'Airtel',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Idea',
      ulink: '2360 - 2370',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2350 - 2360',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Madhya Pradesh
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1737.1 - 1741.7',
      dlink: '1832.1 - 1836.7',
    },
    {
      band: '2300 MHz',
      oper: 'Idea',
      ulink: '2352.5 - 2362.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2362.5 - 2372.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2555',
      dlink: '-',
    }
  ],
  [// Maharashtra
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1751.5 - 1756.5',
      dlink: '1846.5 - 1851.5',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1761.5 - 1763.5',
      dlink: '1856.5 - 1858.5',
    },
    {
      band: '1800 MHz',
      oper: 'Tatas',
      ulink: '1756.5 - 1761.5',
      dlink: '1851.5 - 1856.5',
    },
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Idea',
      ulink: '2365 - 2375',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2355 - 2365',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2635 - 2655',
      dlink: '-',
    }
  ],
  [// Maharashtra
    {
      band: '1800 MHz',
      oper: 'Tatas',
      ulink: '1759.9 - 1764.9',
      dlink: '1854.9 - 1859.9',
    },
    {
      band: '2100 MHz',
      oper: 'Idea',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2355 - 2365',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2365 - 2375',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2635 - 2655',
      dlink: '-',
    }
  ],
  [// Manipur
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Meghalaya
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Mizoram
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Nagaland
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Odisha
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 2134',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2388 - 2398',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2378 - 2388',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Puducherry
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1949',
      dlink: '2129 - 3139',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2367.5 - 2377.5',
      dlink: '-',
    }
  ],
  [// Punjab
    {
      band: '800 MHz',
      oper: 'Reliance',
      ulink: '825.945 - 829.635',
      dlink: '870.945 - 874.635',
    },
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1740.3 - 1741.1',
      dlink: '1835.3 - 1836.1',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1738.3 - 1740.3',
      dlink: '1833.3 - 1835.3',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1730.1 - 1735.3',
      dlink: '1825.1 - 1830.3',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1735.3 - 1738.3',
      dlink: '1830.3 - 1833.3',
    },
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
  [// Rajasthan
    {
      band: '800 MHz',
      oper: 'Reliance',
      ulink: '827.175 - 832.095',
      dlink: '872.175 - 877.095',
    },
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1740.1 - 1741.9',
      dlink: '1835.1 - 1836.9',
    },
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1730.9 - 1735.9',
      dlink: '1825.9 - 1830.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1735.9 - 1740.1',
      dlink: '1830.9 - 1835.1',
    },
    {
      band: '2100 MHz',
      oper: 'Airtel',
      ulink: '1944 - 1949',
      dlink: '2134 - 2139',
    },
    {
      band: '2100 MHz',
      oper: 'Idea',
      ulink: '1949 - 1954',
      dlink: '2139 - 2144',
    },
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Sikkim
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Tamil Nadu
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1949',
      dlink: '2129 - 3139',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2367.5 - 2377.5',
      dlink: '-',
    }
  ],
  [ // Telangana
    {
      band: '1800 MHz',
      oper: 'Tata',
      ulink: '1741.7 - 1744.1',
      dlink: '1836.7 - 1839.1',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2325 - 2335',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2335 - 2345',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2635 - 2645',
      dlink: '-',
    }
  ],
  [// Tripura
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1753.5 - 1754.9',
      dlink: '1848.5 - 1849.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1745.7 - 1753.5',
      dlink: '1840.7 - 1848.5',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2357.5 - 2367.5',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2347.5 - 2357.5',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Uttar Pradesh 
    {
      band: '800 MHz',
      oper: 'Reliance',
      ulink: '825.945 - 827.175',
      dlink: '870.945 - 872.175',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1733.5 - 1736.9',
      dlink: '1828.5 - 1831.9',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1736.9 - 1738.9',
      dlink: '1831.9 - 1833.9',
    },
    {
      band: '2100 MHz',
      oper: 'Idea',
      ulink: '1944 - 1949',
      dlink: '2134 - 2139',
    },
    {
      band: '2100 MHz',
      oper: 'Vodafone',
      ulink: '1939 - 1944',
      dlink: '2129 - 3134',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Uttar Pradesh 
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1734.5 - 1741.7',
      dlink: '1829.5 - 1836.5',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1729.5 - 1734.5',
      dlink: '1824.5 - 1829.5',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1727.1 - 1729.5',
      dlink: '1822.1 - 1824.5',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// Uttarakhand 
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1734.5 - 1741.7',
      dlink: '1829.5 - 1836.5',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1729.5 - 1734.5',
      dlink: '1824.5 - 1829.5',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1727.1 - 1729.5',
      dlink: '1822.1 - 1824.5',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2535 - 2545',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2545 - 2555',
      dlink: '-',
    }
  ],
  [// West Bengal
    {
      band: '1800 MHz',
      oper: 'Idea',
      ulink: '1741.7 -1746.7',
      dlink: '1836.7 - 1841.7',
    },
    {
      band: '1800 MHz',
      oper: 'Reliance',
      ulink: '1746.7- 1751.7',
      dlink: '1841.7- 1846.7',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1734.1 - 1741.7',
      dlink: '1829.1 - 1836.7',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2355 - 2365',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2365 - 2375',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Idea',
      ulink: '2545 - 2555',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2535 - 2545',
      dlink: '-',
    }
  ],
   [// West Bengal
    {
      band: '1800 MHz',
      oper: 'Airtel',
      ulink: '1742.3 - 1744.3',
      dlink: '1837.3 - 1839.3',
    },
    {
      band: '1800 MHz',
      oper: 'Vodafone',
      ulink: '1740.3 - 1742.3',
      dlink: '1835.3 - 1837.3',
    },
    {
      band: '2300 MHz',
      oper: 'Airtel',
      ulink: '2355 -2365',
      dlink: '-',
    },
    {
      band: '2300 MHz',
      oper: 'Reliance',
      ulink: '2365 -2375',
      dlink: '-',
    },
    {
      band: '2500 MHz',
      oper: 'Vodafone',
      ulink: '2635 - 2655',
      dlink: '-',
    }
  ]
];

console.log(operatorData[0]);
export default operatorData;
