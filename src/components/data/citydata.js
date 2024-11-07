
const images = require.context('../assets/city_images', false, /\.(png|jpe?g|svg)$/);

const city_details = [
    { 
      city: 'Arizona',
      map: images('./arizona.png')
    },
    { 
      city: 'Atlanta',
      map: images('./atlanta.png')
    },
    { 
        city: 'California',
        map: images('./california.png')
      },
      { 
        city: 'Chicago',
        map: images('./chicago.png')
      },
      { 
        city: 'Florida',
        map: images('./florida.png')
      },
      { 
        city: 'Idaho',
        map: images('./idaho.png')
      },
      { 
        city: 'Michigan',
        map: images('./michigan.png')
      },
      { 
        city: 'New york',
        map: images('./newyork.png')
      },
      { 
        city: 'Texas',
        map: images('./texas.png')
      },
      { 
        city: 'Washington',
        map: images('./washington.png')
      }
   
  ];
  
  export default city_details;