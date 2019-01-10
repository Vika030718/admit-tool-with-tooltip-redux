import UploadButton from './UploadButton'
import ClearButton from './ClearButton'
import React from 'react'
import PropTypes from 'prop-types'

const Header =(props, {store})=>
	<header>
		<h1 className="title pt-5 text-center">Admin tool for managing images with tooltip</h1>
		<section className="text-center pb-4">
			<UploadButton/>
			<ClearButton/>
		</section>	
		<hr/>
    </header>

Header.contextTypes = {
	store: PropTypes.object
}

export default Header