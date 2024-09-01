

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#FDF2DD',
        card:'#E5DFD6',
        highlight:{
          DEFAULT:'#EBA113',
          100:'#F2D791'
        },
        text:{
          DEFAULT:'#808085',
          100:'#F2EDE7',
          200:'#CBC3B4',
          300:'#736C5E',
          400:'#000000'
        },
        label:{
          yellow:{
            100:'#E4DCBC',
            200:'#908754'
          },
          brown:{
            100:'#DFDCD3',
            200:'#7A7767'
          },
          green:{
            100:'#DADFD3',
            200:'#677A74'
          },
          blue:{
            100:'#D0D7DC',
            200:'#577C97'
          }
        },
        gender:{
          male:'#AFD5E5',
          female:'#DDABB9'
        }

    },
    fontFamily:{
      pthin:['Mulish-Regular', 'sans-serif'],
      pmedium:['Mulish-Medium','sans-serif'],
      pbold:['Mulish-SemiBold','sans-serif'],
      titlemedium:['Mulish-Bold','sans-serif'],
      titlebold:['Mulish-ExtraBold','sans-serif']
    }
  },
  plugins: [],
  }
}
