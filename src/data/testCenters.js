const testCenters = [
  {
    state: 'Andhra Pradesh',
    city: 'Amaravati',
    latitude: 80.515,
    longitude: 16.541,
    LocationCode: 'L1'
  },
  {
    state: 'Arunachal Pradesh',
    city: 'Itanagar',
    latitude: 93.6053,
    longitude: 27.0844,
    LocationCode: 'L2'
  },
  {
    state: 'Assam',
    city: 'Dispur',
    latitude: 91.7898,
    longitude: 26.1433,
    LocationCode: 'L3'
  },
  {
    state: 'Bihar',
    city: 'Patna',
    latitude: 85.101027,
    longitude: 25.615379,
    LocationCode: 'L4'
  },
  {
    state: 'Chhattisgarh',
    city: 'Raipur',
    latitude: 81.6296,
    longitude: 21.2514,
    LocationCode: 'L5'
  },
  {
    state: 'Delhi',
    city: 'Delhi',
    latitude: 77.231495,
    longitude: 28.651952,
    LocationCode: 'L6'
  },
  {
    state: 'Goa',
    city: 'Ponda',
    latitude: 73.979225,
    longitude: 15.425651,
    LocationCode: 'L7'
  },
  {
    state: 'Gujarat',
    city: 'Gandhinagar',
    latitude: 72.6369,
    longitude: 23.2156,
    LocationCode: 'L8'
  },
  {
    state: 'Haryana',
    city: 'Hisar',
    latitude: 75.7217,
    longitude: 29.1492,
    LocationCode: 'L9'
  },
  {
    state: 'Himachal Pradesh',
    city: 'Shimla',
    latitude: 77.1734,
    longitude: 31.1048,
    LocationCode: 'L10'
  },
  {
    state: 'Jammu and Kashmir',
    city: 'Srinagar',
    latitude: 74.7973,
    longitude: 34.0837,
    LocationCode: 'L11'
  },
  {
    state: 'Jharkhand',
    city: 'Ranchi',
    latitude: 85.3096,
    longitude: 23.3441,
    LocationCode: 'L12'
  },
  {
    state: 'Karnataka',
    city: 'BTM Layout, Bangalore',
    latitude: 77.5946,
    longitude: 12.9716,
    LocationCode: 'L13'
  },
  {
    state: 'Karnataka',
    city: 'JP Nagar, Bangalore',
    latitude: 77.578196,
    longitude: 12.888256,
    LocationCode: 'L14'
  },
  {
    state: 'Kerala',
    city: 'Thiruvananthapuram',
    latitude: 76.9366,
    longitude: 8.5241,
    LocationCode: 'L15'
  },
  {
    state: 'Madhya Pradesh',
    city: 'Bhopal',
    latitude: 77.402892,
    longitude: 23.254688,
    LocationCode: 'L16'
  },
  {
    state: 'Maharashtra',
    city: 'Mumbai',
    latitude: 72.836447,
    longitude: 18.987807,
    LocationCode: 'L17'
  },
  {
    state: 'Maharashtra',
    city: 'Pune',
    latitude: 73.849852,
    longitude: 18.513271,
    LocationCode: 'L18'
  },
  {
    state: 'Manipur',
    city: 'Imphal',
    latitude: 93.9368,
    longitude: 24.817,
    LocationCode: 'L19'
  },
  {
    state: 'Meghalaya',
    city: 'Shillong',
    latitude: 91.8933,
    longitude: 25.5788,
    LocationCode: 'L20'
  },
  {
    state: 'Mizoram',
    city: 'Aizawl',
    latitude: 92.7173,
    longitude: 23.7307,
    LocationCode: 'L21'
  },
  {
    state: 'Nagaland',
    city: 'Kohima',
    latitude: 94.1086,
    longitude: 25.6751,
    LocationCode: 'L22'
  },
  {
    state: 'North East',
    city: 'Kohima',
    latitude: 94.1086,
    longitude: 25.6751,
    LocationCode: 'L23'
  },
  {
    state: 'Odisha',
    city: 'Bhubaneshwar',
    latitude: 85.8245,
    longitude: 20.2961,
    LocationCode: 'L24'
  },
  {
    state: 'Puducherry',
    city: 'NIT Puducherry, Karaikal',
    latitude: 79.845715,
    longitude: 10.988522,
    LocationCode: 'L25'
  },

  {
    state: 'Punjab',
    city: 'Ludhiana',
    latitude: 75.8573,
    longitude: 30.901,
    LocationCode: 'L26'
  },
  {
    state: 'Rajasthan',
    city: 'Jaipur',
    latitude: 75.7873,
    longitude: 26.9124,
    LocationCode: 'L27'
  },
  {
    state: 'Sikkim',
    city: 'Gangtok',
    latitude: 88.6138,
    longitude: 27.3314,
    LocationCode: 'L28'
  },

  {
    state: 'Tamil Nadu',
    city: 'Shenoy Nagar, Chennai',
    latitude: 80.248357,
    longitude: 13.084622,
    LocationCode: 'L29'
  },
  {
    state: 'Telangana',
    city: 'Mahindra University, Hyderabad',
    latitude: 78.4359425,
    longitude: 17.5688383,
    LocationCode: 'L30'
  },
  {
    state: 'Tiripura',
    city: 'Agartala',
    latitude: 91.2868,
    longitude: 23.8315,
    LocationCode: 'L31'
  },
  {
    state: 'Uttar Pradesh (East)',
    city: 'Agra',
    latitude: 78.003944,
    longitude: 27.187935,
    LocationCode: 'L32'
  },
  {
    state: 'Uttar Pradesh (West)',
    city: 'Allahabad',
    latitude: 81.843217,
    longitude: 25.44478,
    LocationCode: 'L33'
  },
  {
    state: 'Uttarakhand',
    city: 'Dehradun',
    latitude: 78.0322,
    longitude: 30.3165,
    LocationCode: 'L34'
  },
  {
    state: 'West Bengal',
    city: 'Durgapur',
    latitude: 87.3119,
    longitude: 23.5204,
    LocationCode: 'L35'
  },
  {
    state: 'West Bengal',
    city: 'Kolkata',
    latitude: 88.363044,
    longitude: 22.562627,
    LocationCode: 'L36'
  },
  {
    state:  'Tamil Nadu',
    city: 'Kalavakkam, Chennai',
    latitude: 80.196076,
    longitude: 12.752577,
    LocationCode: 'L37'
  }
];

export default testCenters;
