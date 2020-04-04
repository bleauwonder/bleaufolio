import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PhotographyItems from "../components/items-photography"
import SectionTitle from "../components/sectiontitle"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

class PhotographyList extends React.Component {
	render(){
		const query = this.props.datas;
		if(query.allMarkdownRemark.edges.length > 0){
			return (
				<section id="photography" className="container">
					<div className="section-title">
						<SectionTitle title="PHOTOGRAPHY"/>
					</div>
					<PhotographyItems data={query}/>
					<Pagination pathContext={this.props.pathContext} type="photography"/>
				</section>
			)
		}else{
			return(
				<React.Fragment></React.Fragment>
			)
		}
	}

}


export default function({ data, pathContext }){
	return(
		<Layout>
			<SEO lang="en" title="Photography"/>
			<PhotographyList datas={data} pathContext={pathContext}/>
		</Layout>
	)
}

export const query = graphql `
	query photographyListPage($skip: Int!, $limit: Int!){
		allMarkdownRemark(
			filter: { fileAbsolutePath: {regex : "\/photography/"} }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		){
			edges{
				node{
					id
					frontmatter{
						title
						description
						date
						image{
							publicURL
							childImageSharp {
								fluid(maxWidth: 1920) {
								  srcSet
								  ...GatsbyImageSharpFluid
								}
								id
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`
