import React from 'react'
import './index.css'

export const Announcement = ( props ) => (
        // eslint-disable-next-line
        <a className="featured-announcement" href={ props.link } target="_blank" rel="noopener">
            { props.title }
        </a>
);
