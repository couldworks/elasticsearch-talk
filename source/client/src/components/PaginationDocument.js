import React from "react";
import PropTypes from 'prop-types'


const PaginationDocument = ({NextToken}) =>{
	return <span>{NextToken}</span>
}

PaginationDocument.propTypes = {
	NextToken: PropTypes.string
}

export default PaginationDocument;