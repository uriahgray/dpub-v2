module.exports = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
  	fontSize: {
  		base:'1.875rem',
      lg: '3rem'
  	},
    lineHeight: {
      base:'1.14815em',
      lg:'3rem'
    },
    minHeight: {
      '1/3': '33vw',
      '33': '33vh',
      '2/3': '66vw',
      'screen': '100vh'
    },
    boxShadow: {
      inner: 'inset 0 10px 20px 0 rgba(0, 0, 0, 0.5)'
    },
    borderRadius: {
      DEFAULT: '1.5rem'
    },
  	colors: {
  		green: {
  			DEFAULT: '#4a8f46'
  		},
  		white: {
  			DEFAULT: '#FFFFFF'
  		},
      lightyellow:{
        DEFAULT: '#fdfdcd'
      },
      lightpurple:{
        DEFAULT: '#f6dffb'
      },  
      lightgreen:{
        DEFAULT: '#bfffbf'
      },            
  		yellow: {
  			DEFAULT: '#ffff00'
  		},
  		gray: {
  			DEFAULT: '#d3d3d3'
  		},            
  		black: {
  			DEFAULT: '#000000'
  		},
      red: {
        DEFAULT: '#FF0000'
      } 		
  	},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
