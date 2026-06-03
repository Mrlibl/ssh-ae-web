/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: [],
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  },
  theme: {
    extend: {
      screens: {
        mobile: { min: "100px", max: "600px" },
        pad: { min: "601px", max: "1180px" },
        pc: { min: "1181px" },
      },
      // colors: {
      //   "primary-1": "#0A0B37",
      //   "primary-2": "#0A0B37",
      //   "black-9": "#000000",
      //   "black-5": "#e7e7e7",
      // },
      colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        "primary-1": "#000000",
        "primary-2": "#000000",
        "black-9": "#000000",
        "black-5": "#e7e7e7",
        "white": '#ffffff',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'rgba(255,255,255,0.1)',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      backgroundColor: {
        "black-3/5": "rgba(0, 0, 0, 0.6)",
        "black-9/10": "rgba(0, 0, 0, 0.9)",
      },
      fontFamily: {
        segoe: "segoe",
        "segoe-sb": "segoe-sb",
        "segoe-mb": "segoe-mb",
        "segoe-lb": "segoe-lb",
        "ali-h": "ali-h",
        "dfpy-g": "dfpy-g",
      },
      maxWidth: {
        "pc-body": "74rem",
      },
      width: {
        128: "28rem",
        88: "22rem",
        "pc-body": "74rem",
      },
      height: {
        121: "25rem",
        128: "32rem",
      },
      borderRadius: {},
      fontSize: {
        ss: "0.5rem",
      },
    },
  },
  plugins: [],
};
