let siteMetadata = {
	title: `Elyza Bleau`,
	capitalizeTitleOnHome: true,
	logo: `/images/logo.png`,
	icon: `/images/icon.png`,
	titleImage: `/images/sunset.jpg`,
	introTag: `FULL-STACK DEVELOPER | PHOTOGRAPHER`,
	description: `Renaissance Woman taking beautiful photos and making designs functional for end users.`,
	description: `Let's Connect`,
	description: `310-890-2381 | elyzableau@gmail.com`,
	author: `@_akzhy`,
	blogItemsPerPage: 10,
	portfolioItemsPerPage: 10,
	darkmode: true,
	navLinks: [{
			name: "HOME",
			url: "/"
		},
		{
			name: "ABOUT",
			url: "/about"
		},
		{
			name: "PORTFOLIO",
			url: "/portfolio"
		},
	],
	social: [{
			name: "LinkedIn",
			icon: "/images/LinkedIn.png",
			url: "https://www.linkedin.com/in/elyzableau/"
		},
		{
			name: "GitHub",
			icon: "/images/github.png",
			url: "https://github.com/bleauwonder/"
		},
		{
			name: "Instagram",
			icon: "/images/Instagram.svg",
			url: "https://www.instagram.com/worldofbleau/"
		},
		// {
		// 	name: "Youtube",
		// 	icon: "/images/Youtube.svg",
		// 	url: "#"
		// }
	],
	contact: {
		api_url: "./test.json",
		/* Leave this completely empty (no space either) if you don't want a contact form. */
		description: ``,
		mail: "",
		phone: "",
		address: ""
	}
}

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
      			plugins: [
					"gatsby-remark-copy-linked-files",
        			{
          				resolve: `gatsby-remark-images`,
          				options: {
            				maxWidth: 1280
          				}
        			}
      			]
    		}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents/`
			}
		},
		{
			resolve: `gatsby-plugin-less`,
			options: {
				strictMath: true,
			},
		},
	],
}
