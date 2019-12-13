import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import SECTIONS_DATA from './directory.data.js';


class Directory extends React.Component {
    constructor(){
        super();

        this.state= {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
               {
                   this.state.sections.map(({id, ...otherSectionProps}) =>(
                       <MenuItem key={id} {...otherSectionProps}>/></MenuItem>
                   ))
               }
            </div>
        )
    }
}

export default Directory;